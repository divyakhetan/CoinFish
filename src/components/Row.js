import React from "react";
import { useNavigate } from "react-router-dom";

const Row = ({ item }) => {
  const navigate = useNavigate();

  return (
    <tr onClick={() => navigate(`/row/${item.id}`)}>
      <td>{item.name}</td>
      <td>{item.country}</td>
      <td>{item.url}</td>
      <td>{item.image}</td>
      <td>{item.trust_score_rank}</td>
    </tr>
  );
};

export default Row;
