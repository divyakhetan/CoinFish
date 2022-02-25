import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

const DetailedRow = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(useParams().id);
  const [data, setData] = useState({});

  useEffect(async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/exchanges/${id}`
    );
    console.log(res.data);
    setData(res.data);
  }, []);
  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        variant="danger"
        style={{ margin: 20 }}
      >
        Go Back
      </Button>

      <Table
        striped
        bordered
        hover
        variant="dark"
        className="centre  tableStyle"
      >
        <tbody>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Logo</td>
            <td>
              <Image src={data.image} rounded></Image>
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{data.country}</td>
          </tr>
          <tr>
            <td>Trust Rank</td>
            <td>{data.trust_score_rank}</td>
          </tr>

          <tr>
            <td>Year of establishment</td>
            <td>{data.year_established}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{data.description}</td>
          </tr>
          <tr>
            <td>Facebook url</td>
            <td>{data.facebook_url}</td>
          </tr>
          <tr>
            <td>Reddit url</td>
            <td>{data.reddit_url}</td>
          </tr>
          <tr>
            <td>Telegram url</td>
            <td>{data.telegram_url}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default DetailedRow;
