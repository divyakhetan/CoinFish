import React from "react";

const Row = ({ item }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.country}</td>
      <td>{item.url}</td>
      <td>{item.image}</td>
      <td>{item.trust_score_rank}</td>
    </tr>
  );
};

export default Row;
