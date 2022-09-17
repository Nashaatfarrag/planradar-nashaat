import React from "react";
import "./pagination.css";

const Pagination = (props) => {
  const { currentPage, setCurrentPage } = props;
  const totalPages = props.totalPages;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePageClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const pageNumbers = pages.map((page) => {
    return (
      <li
        key={page}
        id={page}
        onClick={handlePageClick}
        className={currentPage === page ? "active" : null}
      >
        {page}
      </li>
    );
  });

  return (
    <div className="main">
      <ul className="page-numbers">
        <li>
          <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>
            Prev
          </button>
        </li>

        {pageNumbers}
        <li>
          <button
            onClick={handleNextClick}
            disabled={currentPage === pages[pages.length - 1]}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
