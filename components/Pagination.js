"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";

const PaginationComp = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsValue = useParams();

  const page = searchParams.get("start") ?? "1";
  const per_page = searchParams.get("limit") ?? "5";
  // const page = paramsValue["start"] ?? "1";
  // const per_page = paramsValue["limit"] ?? "5";

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          className="page-item"
          disable={!hasPrevPage}
          onClick={() => {
            // router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
            router.push(`/?start=${Number(page) - 1}&limit=${per_page}`);
          }}
        >
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          {/* <a className="page-link" href="#">
            1
          </a> */}
          {page} / {Math.ceil(10 / Number(per_page))}
        </li>

        <li
          className="page-item"
          disabled={!hasNextPage}
          onClick={() => {
            router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
          }}
        >
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComp;
