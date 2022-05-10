const Pagination = ({ totalPost, dataPerPage, changePageHandler }) => {
  const pages = [];
  for (let i = 1; i < Math.ceil(totalPost / dataPerPage); i++) {
    pages.push(i);
  }
  const totalPages = pages.map((number, index) => {
    return (
      <nav key={index} aria-label="Page navigation example">
        <ul className="pagination ">
          <li className="page-item">
            <a
              onClick={() => changePageHandler(number)}
              className="page-link"
              href="#"
            >
              {number}
            </a>
          </li>
        </ul>
      </nav>
    );
  });
  return <>{totalPages}</>;
};

export default Pagination;
