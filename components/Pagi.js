const Pagi = ({ items, pageSize, currentPage, onPageChange }) => {
  //   console.log(items);
  //   console.log(pageSize);
  //   const pagesCount = Math.round(items / pageSize);
  //   console.log(pagesCount);
  //   {page} / {Math.ceil(10 / Number(per_page))}

  const pageCount = items;
  console.log(pageCount);
  const paths = Array.from({ length: pageCount }, (_, i) => i + 1);
  console.log(paths);
  //   const pathsString = paths.map((path) => path.toString());
  //   console.log(pathsString);

  //   if (pagesCount === 1) return null;
  //   const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  //   console.log(pages);

  return (
    <div>
      <ul className="pagination">
        {paths.map((page) => {
          console.log(page);
          return (
            // {console.log(page)}
            <>
              {/* <li key={page} onClick={() => onPageChange(page)}>
              {page}
            </li> */}
              <li key={page} className={page === currentPage ? "green" : "red"}>
                <a className="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </a>
              </li>
              {/* <li class="page-item" key={page}>
                <a class="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </a>
              </li> */}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagi;
