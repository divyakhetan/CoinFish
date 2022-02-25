import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Exchanges from "../src/components/Exchanges";
import Pagination from "../src/components/Pagination";

const App = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(async () => {
    console.log("in here ", currentPage);
    setLoading(true);
    let params = {
      per_page: 10,
      page: currentPage,
    };
    const res = await axios.get("https://api.coingecko.com/api/v3/exchanges", {
      params: params,
    });
    console.log(res);
    setExchanges(res.data);
    setLoading(false);
  }, [currentPage]);

  return (
    <>
      <Exchanges exchanges={exchanges} loading={loading} />
      <Pagination
        currentPage={currentPage}
        onLeftClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
        onRightClick={() => {
          console.log("in right click");
          setCurrentPage(currentPage + 1);
        }}
      />
    </>
  );
};
export default App;
