import React from "react";

import "./style.css";
const PaginationComponent = ({
  currentpage,
  setCurrentpage,
  numberpages,
  numbers,
}) => {
  const prevpage = () => {
    if (currentpage != 1) {
      setCurrentpage(currentpage - 1);
    }
  };
  const changepage = (id) => {
    setCurrentpage(id);
  };
  const Nextpage = () => {
    if (currentpage !== numberpages) {
      setCurrentpage(currentpage + 1);
    }
  };
  return (
    <div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={prevpage}>
              Previous
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item  `} key={i}>
              <a
                className={`page-link ${
                  currentpage === parseInt(n, 10) ? "active" : " "
                } `}
                onClick={() => changepage(parseInt(n))}
              >
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={Nextpage}>
              Nextpage
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationComponent;
