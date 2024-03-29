import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./style.css";

const Dots = () => {
  return <li className="page-link">...</li>
}

const PaginationComponent = ({ totalPost, postPerPage, setCurrentPage, currentPage }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i)
  }

  const Prev = () => {
    if (currentPage >= 2) {
      setCurrentPage(currentPage - 1);
      if (start > 0) { setStart(start - 1) }
      if (end > 3) { setEnd(end - 1) }
    }
  }

  const Next = () => {
    if (currentPage < Math.round(totalPost / postPerPage)) {
      setCurrentPage(currentPage + 1);
      setStart(start + 1);
      setEnd(end + 1);
    }
  }
  console.log(start, end);

  return (
    <div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" onClick={Prev}>Previous</Link>
          </li>
          {currentPage > 1 && (<Dots />)}
          {
            pages.map((n) => (
              <li key={n} className="page-item">
                <Link className={`page-link ${currentPage === parseInt(n, 10) ? "active" : ""} `} onClick={() => setCurrentPage(parseInt(n))}>
                  {n}
                </Link>
              </li>
            )).slice(start, end)
          }
          {pages.length > 3 && (<Dots />)}
          <li className="page-item">
            <Link className="page-link" onClick={Next}>Next</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationComponent;