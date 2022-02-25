import React from "react";

const Pagination = ({ currentPage, onLeftClick, onRightClick }) => {
  return (
    <ul className="pagination">
      <li className="page-item">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={onLeftClick}
        >
          Previous
        </button>
      </li>
      {currentPage}
      <li className="page-item">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={onRightClick}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
