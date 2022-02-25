import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row";
const Exchanges = ({ exchanges, loading }) => {
  if (loading) {
    return (
      <div
        class="spinner-border"
        role="status"
        style={{ marginLeft: "50%", marginTop: "20%", marginBottom: "5%" }}
      >
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <Table striped bordered hover variant="dark" className="centre tableStyle">
      <tbody>
        <tr>
          <th>Logo</th>
          <th>Name</th>
          <th>Country</th>
          <th>URL</th>
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
