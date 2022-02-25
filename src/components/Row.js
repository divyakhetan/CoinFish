import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Row = ({ item }) => {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(`/row/${item.id}`)}
      style={{ cursor: "pointer" }}
    >
      <td>
        <Image src={item.image} rounded className="img"></Image>
      </td>
      <td>{item.name}</td>
      <td>{item.country}</td>
      <td>{item.url}</td>

      <td>{item.trust_score_rank}</td>
    </tr>
  );
};

export default Row;
