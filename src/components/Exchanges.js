import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row";
const Exchanges = ({ exchanges, loading }) => {
  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>URL</th>
          <th>Logo</th>
          <th>Trust Rank</th>
        </tr>

        {exchanges.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </tbody>
    </Table>
  );
};

export default Exchanges;
