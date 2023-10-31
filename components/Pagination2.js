import { DOTS, usePagination } from "./usePagination";

const Pagination2 = (props) => {
  const { onPageChange, totalCount, siblingCount, currentPage, pageSize } =
    props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  //   if (currentPage === 0 || paginationRange.length < 2) {
  if (currentPage === 0 || paginationRange.length < 1) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination">
      <li className="page-item">
        <button
          className="page-link btn btn-success"
          disabled={currentPage === 1}
          onClick={onPrevious}
        >
          Previous
        </button>
      </li>

      {paginationRange?.map((pageNum) => {
        if (pageNum === DOTS) {
          return <li className="page-item"></li>;
        }

        return (
          <li className="page-item" onClick={() => onPageChange(pageNum)}>
            {pageNum}
          </li>
        );
      })}

      <li
        className="page-item"
        onClick={onNext}
        disabled={currentPage === lastPage}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination2;
