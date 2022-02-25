import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Exchanges from "./Exchanges";
import Pagination from "./Pagination";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    parseInt(useParams().pageNumber)
  );

  useEffect(() => {
    async function getData() {
      if (isNaN(currentPage)) {
        setCurrentPage(1);
      }
      setLoading(true);
      let params = {
        per_page: 10,
        page: currentPage,
      };
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/exchanges",
        {
          params: params,
        }
      );
      setExchanges(res.data);
      setLoading(false);
    }

    getData();
  }, [currentPage]);

  return (
    <div className="container-xl">
      <div className="d-flex justify-content-center">
        <h3>Exchanges data</h3>
      </div>

      <div className="d-flex justify-content-center">
        <Exchanges exchanges={exchanges} loading={loading} />
      </div>
      <Pagination
        currentPage={currentPage}
        onLeftClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            let page = currentPage - 1;
            navigate(`/${page}`);
          }
        }}
        onRightClick={() => {
          setCurrentPage(currentPage + 1);
          let page = currentPage + 1;
          navigate(`/${page}`);
        }}
      />
    </div>
  );
};
export default Home;
