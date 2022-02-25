import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ currentPage, onLeftClick, onRightClick }) => {
  return (
    <ul className="pagination">
      <li className="page-item" style={{ marginRight: 20, marginLeft: "45%" }}>
        <Button variant="outline-danger" onClick={onLeftClick}>
          Previous
        </Button>
      </li>
      <li className="page-item" style={{ marginRight: 20 }}>
        <Button variant="outline-info" disabled>
          {currentPage}
        </Button>
      </li>

      <li className="page-item">
        <Button variant="outline-success" onClick={onRightClick}>
          Next
        </Button>
      </li>
    </ul>
  );
};

export default Pagination;
