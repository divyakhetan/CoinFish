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

  useEffect(async () => {
    if (isNaN(currentPage)) {
      setCurrentPage(1);
    }
    setLoading(true);
    let params = {
      per_page: 10,
      page: currentPage,
    };
    const res = await axios.get("https://api.coingecko.com/api/v3/exchanges", {
      params: params,
    });
    setExchanges(res.data);
    setLoading(false);
  }, [currentPage]);

  return (
    <>
      <h3>Exchanges data</h3>
      <Exchanges exchanges={exchanges} loading={loading} />
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
    </>
  );
};
export default Home;
