// import React from "react";
// import { RecentPostCard } from "../../components/Cards";
// import { JoinTelegram, Subscribe } from "../../components/Connections";
// import Link from "next/link";

import { useMemo } from "react";

// const PostLists = ({ data: articles, children }) => {
//   //   const mappedArticles = (imageURL, imageAlt, category) => {
//   //     const imageURL =
//   //       article?.attributes?.image?.data?.attributes?.formats?.small?.url;

//   //     const imageAlt =
//   //       article?.attributes?.image?.data?.attributes?.formats?.small?.url;

//   //     const category = article?.attributes?.category?.data?.attributes;

//   //     return imageURL, imageAlt, category;
//   //   };

//   return (
//     <div className="container">
//       <div className="row g-5">
//         <div className="col-md-8">
//           <div className="row">
//             {articles?.map((article) => {
//               const imageURL = `${article?.attributes?.image?.data?.attributes?.formats?.small?.url}`;

//               const imageAlt =
//                 article?.attributes?.image?.data?.attributes?.formats?.small
//                   ?.url;

//               const category = article?.attributes?.category?.data?.attributes;

//               if (article?.attributes?.highlighted_article === true) {
//                 return (
//                   <>
//                     <Link
//                       href={`articles/article/${category?.slug}/${article?.attributes?.slug}`}
//                       key={article?.id}
//                       className=""
//                     >
//                       {imageURL && (
//                         <img
//                           //   alt={imageAlt}
//                           //   width={50}
//                           //   height={100}
//                           src={`${article?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
//                           className="card-img-top"
//                         />
//                       )}
//                       {/* {mappedArticles(imageURL) && (
//                         <Image
//                           alt={imageAlt}
//                           width={50}
//                           height={100}
//                           src={imageURL}
//                           className="card-img-top"
//                         />
//                       )} */}
//                     </Link>

//                     <div className="card-body">
//                       <Link
//                         href={`/articlecat/singleartcat/${category?.slug}`}
//                         className="icon__color"
//                       >
//                         {article?.attributes?.category?.data?.attributes?.title}
//                       </Link>

//                       <Link
//                         href={`articles/article/${category?.slug}/${article?.attributes?.slug}`}
//                         className="article-content__onhover"
//                       >
//                         <h5
//                           // className="card-title text-dark article-title__onclick"
//                           className="card-title mt-4"
//                           // onClick={handleClick}
//                           // style={{ color: active ? "black" : "white" }}
//                         >
//                           {article?.attributes?.title}
//                         </h5>
//                         <p className="card-text">
//                           {article?.attributes?.description
//                             .split(" ")
//                             .splice(0, 10)
//                             .join(" ") + "..."}
//                         </p>
//                       </Link>
//                     </div>
//                   </>
//                 );
//               }
//             })}
//           </div>

//           <div className="row mt-5 gy-4">
//             {articles?.map((article) => {
//               const imageURL =
//                 article?.attributes?.image?.data?.attributes?.formats?.small
//                   ?.url;

//               const imageAlt =
//                 article?.attributes?.image?.data?.attributes?.formats?.small
//                   ?.url;

//               const category = article?.attributes?.category?.data?.attributes;

//               if (article?.attributes?.highlighted_article === false) {
//                 return (
//                   <>
//                     <Link
//                       href={`articles/article/${category?.slug}/${article?.attributes?.slug}`}
//                       key={article?.id}
//                       className=""
//                     >
//                       {imageURL && (
//                         <img
//                           //   alt={imageAlt}
//                           //   width={50}
//                           //   height={100}
//                           src={`${article?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
//                           className="card-img-top"
//                         />
//                       )}
//                     </Link>

//                     <div className="card-body">
//                       <Link
//                         href={`/articlecat/singleartcat/${category?.slug}`}
//                         className="icon__color"
//                       >
//                         {article?.attributes?.category?.data?.attributes?.title}
//                       </Link>

//                       <Link
//                         href={`articles/article/${category?.slug}/${article?.attributes?.slug}`}
//                         className="article-content__onhover"
//                       >
//                         <h5
//                           // className="card-title text-dark article-title__onclick"
//                           className="card-title mt-4"
//                           // onClick={handleClick}
//                           // style={{ color: active ? "black" : "white" }}
//                         >
//                           {article?.attributes?.title}
//                         </h5>
//                         <p className="card-text">
//                           {article?.attributes?.description
//                             .split(" ")
//                             .splice(0, 10)
//                             .join(" ") + "..."}
//                         </p>
//                       </Link>
//                     </div>
//                   </>
//                 );
//               }
//             })}
//           </div>

//           {children && children}
//         </div>

//         <div className="col-md-4">
//           <div className="mb-5">
//             <RecentPostCard />
//           </div>

//           <div>
//             <JoinTelegram />
//           </div>

//           <div className="mt-5">
//             <h6 className="text-dark">
//               Subscribe our newsletter to get update
//             </h6>
//             <Subscribe />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostLists;

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  pageCount,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = pageCount || Math.ceil(totalCount / pageSize);
    const numberBeforeDots = 3;
    const dotsFactor = 2;

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;
    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = numberBeforeDots + dotsFactor * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = numberBeforeDots + dotsFactor * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage, pageCount]);

  return paginationRange;
};

const PaginationLogic = ({
  onPageChange,
  onLimitChange,
  pagination,
  siblingCount = 1,
  currentPage,
}) => {
  // const { className } = props;
  // const { total, next, prev, count, pageCount } = pagination;
  const { page, pageSize, pageCount, total } = pagination;
  const { isMobile } = useCustomMediaQuery();
  const _currentPage = currentPage
    ? currentPage
    : next?.page - 1 || prev?.page + 1;

  let paginationRange = usePagination({
    currentPage: _currentPage,
    totalCount: total,
    siblingCount,
    pageSize: count,
    pageCount,
  });

  const onNext = () => {
    onPageChange(_currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(_currentPage - 1);
  };

  const _onLimitChange = (e) => {
    onPageChange(0);
    onLimitChange(+e?.target?.value);
  };

  let lastPage = paginationRange?.[paginationRange?.length - 1];
  const currentShowingStart = (_currentPage - 1) * count + 1 || 1;
  const currentShowingEnd = currentShowingStart - 1 + count || total;

  return (
    <nav aria-label="Page navigation example">
      <p>
        Showing {currentShowingStart} to{" "}
        {currentShowingEnd > total ? total : currentShowingEnd} entries
      </p>
      <ul className="pagination">
        <li
          className="page-item"
          disable={paginationRange?.length === 1 || _currentPage === 1}
          onClick={onPrevious}
        >
          <a className="page-link" href="#">
            Previous
          </a>
        </li>

        <li className="page-item">
          {paginationRange?.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <li className="pagination-item dots" key={pageNumber}>
                  &#8230;
                </li>
              );
            }
            return (
              <li
                key={pageNumber}
                className={classnames("pagination-item", {
                  selected:
                    _currentPage?.toString() === "0" ||
                    pageNumber === _currentPage,
                })}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
        </li>

        <li
          className="page-item"
          disabled={paginationRange?.length === 1 || _currentPage === lastPage}
          onClick={onNext}
        >
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationLogic;
