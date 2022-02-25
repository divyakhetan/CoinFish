import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ currentPage, onLeftClick, onRightClick }) => {
  return (
    <div className="d-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item mr-3">
          <Button variant="outline-danger" onClick={onLeftClick}>
            Previous
          </Button>
        </li>
        <li className="page-item mr-3">
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
    </div>
  );
};

export default Pagination;
