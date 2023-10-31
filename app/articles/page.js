"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import qs from "qs";
// import ArticleList from "@/components/ArticleList";
import {
  ArticleCard,
  HighlightCard,
  RecentPostCard,
} from "../../components/Cards";
import { JoinTelegram, Subscribe } from "../../components/Connections";
// import { getAllArticles } from "../data/articleListData";strapiFetchFunctions/articlesFuncs.js

import axios, { AxiosError } from "axios";
import Link from "next/link";
import { getAllArticleData } from "../../data/articleData/articleListData";
import IsLoading from "../../components/IsLoading";
import TagButtons from "../../components/TagButtons";
import PaginationComp from "../../components/Pagination";
import { useParams, useRouter } from "next/navigation";

export default function ArticlePage({ searchParams }) {
  // const [articleData, setArticleData] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState([]);
  const [limit, setLimit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);

  const router = useRouter();
  const params = useParams();

  const fetchData = async () => {
    const articles = await getAllArticleData();
    // console.log(articles);
    setArticleData(articles);
  };

  useEffect(() => {
    setIsLoading(true);
    // setIsLoading(false);
    fetchData()
      .then(() => {})
      .catch((err) => {
        if (err.message === "Network Error")
          setIsError("Please Check your Internet Connection and Reload");
      });
    setIsLoading(false);
  }, []);

  // console.log(
  //   articleData.map((e) => {
  //     console.log(e.attributes);
  //   })
  // );

  // filtering article categories
  // const articleCat = [
  //   ...new Set(
  //     articleData.map(
  //       (cat) => cat?.attributes?.category?.data?.attributes?.Title
  //     )
  //   ),
  // ];
  // console.log("article category", articleCat);

  // console.log(data);
  // const queryStr = qs.stringify({
  //   populate: {
  //     // image: { fields: ["url"] },
  //     users_permissions_user: { populate: "*" },
  //     image: { populate: "*" },
  //     category: { populate: "*" },
  //     // authorsBio: {
  //     //   populate: "*",
  //     // },
  //   },
  //   pagination: {
  //     // start: start,
  //     // limit: limit,
  //     // page,
  //     // pageSize,
  //   },
  // });

  const [page, setPage] = useState(1);

  useEffect(() => {
    // const fetchData = async ({ page = 1, pageSize = 5 } = {}) => {
    const fetchData = async () => {
      const data = await axios.get(
        // `http://localhost:1337/api/articles?${query}`
        // `https://strapi-blcj.onrender.com/api/articles?pagination[page]=1&pagination[pageSize]=5`
        // `http://localhost:1337/api/articles?_limit=3`
        `https://strapi-blcj.onrender.com/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=7`

        // `https://strapi-blcj.onrender.com/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=3?filters[chef][restaurants][stars][$eq]=5`
      );

      // console.log(`https://strapi-blcj.onrender.com/api/articles?${query}`);
      // console.log(data);
      let response = data.data?.data;
      setData(response);

      let responseMeta = data?.data?.meta?.pagination;
      // console.log(responseMeta);
      setMeta(responseMeta);
    };

    fetchData();
    // fetchData({ start: 1, limit: 4 });
  }, [page]);

  // console.log(meta);

  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  /*code that worked*/
  // const totalCount = meta?.total;

  // const nPages = Math.ceil(meta?.total / meta?.pageSize);
  // console.log(nPages);
  const nPages = meta?.pageCount;
  const pageSize = meta?.pageSize;
  const pageNum = meta?.page;
  const totalRecords = meta?.total;
  // console.log(totalRecords);
  // console.log(nPages);

  // const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const handlePrevPage = () => {
    if (page > 1) {
      // setCurrentPage(currentPage - 1);
      setPage((prevPage) => prevPage - 1);
      // setPage((prevPage) => prevPage - 1, page);
      // setPage(currentPage - 1);
      // setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (page !== nPages) {
      // setCurrentPage(currentPage + 1);
      // setCurrentPage((prevPage) => prevPage + 1);
      setPage((prev) => prev + 1);
      // setPage((prev) => prev + 1, page);
      // setPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * meta?.pageSize;
  const endIndex = startIndex + meta?.pageSize;
  const currentPageData = data?.slice(startIndex, endIndex);
  // console.log(startIndex, endIndex);

  // const currentPageData = useMemo(() => {
  //   const startIndex = (currentPage - 1) * meta?.pageSize;
  //   const endIndex = startIndex + meta?.pageSize;
  //   return data?.slice(startIndex, endIndex);
  // }, [currentPage]);
  // // console.log(startIndex, endIndex);
  /*code that worked*/

  // const currentPageDatas = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * meta?.pageSize;
  //   const lastPageIndex = firstPageIndex + meta?.pageSize;
  //   return data?.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);
  // console.log(startIndex, endIndex);

  // const indexOfLastRecord = (currentPage - 1) * meta?.pageSize;
  // const indexOfFirstRecord = meta?.pageSize - indexOfLastRecord;
  // console.log(indexOfFirstRecord, indexOfLastRecord);
  // console.log(currentPageData);
  // console.log(meta?.total);

  // let starts = meta?.start;
  // let limits = meta?.limit;
  // let total = meta?.total;
  // console.log(1, start);
  // console.log(2, limits);
  // console.log(3, total);

  // const pageNumClick = () => {
  //   router.push({
  //     pathname: router.pathname,
  //     query: { start: start, limit: limits },
  //   });
  // };

  // console.log(pageNumClick);

  // const fetchLimitData = useCallback(async (start = 0, limit = 4) => {
  //   setIsLoading(true);

  //   try {
  //     const query = qs.stringify({
  //       populate: {
  //         // image: { fields: ["url"] },
  //         users_permissions_user: { populate: "*" },
  //         image: { populate: "*" },
  //         category: { populate: "*" },
  //         // authorsBio: {
  //         //   populate: "*",
  //         // },
  //       },
  //       pagination: {
  //         start: start,
  //         limit: limit,
  //       },
  //     });

  //     const data = await axios.get(
  //       `https://strapi-blcj.onrender.com/api/articles?${query}`
  //     );

  //     const responseData = data?.data?.data;
  //     const resData = data?.data?.meta?.pagination;

  //     // console.log(responseData);
  //     // console.log(resData);

  //     if (start === 0) {
  //       setData(responseData);
  //     } else {
  //       setData((prevData) => [...prevData, ...responseData]);
  //     }

  //     setLimit(resData);

  //     // console.log(limit);
  //   } catch (err) {
  //     throw new Error(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchLimitData();
  // }, []);

  // const getSelectedCat = (category) => {
  // if()
  // };

  // pagination
  // const page = params["page"] ?? "1";
  // const per_page = params["per_page"] ?? "5";
  // // const page = searchParams["page"] ?? "1";
  // // console.log(page);
  // // console.log(per_page);
  // // const per_page = searchParams["per_page"] ?? "5";

  // const start = (Number(page) - 1) * Number(per_page);
  // const end = start + Number(per_page);

  // const entries = articleData.slice(start, end);
  // console.log(entries);

  // const newData = currentPageData?.map((article) => [
  //   article?.attributes?.title,
  //   article?.attributes?.description,
  //   article?.attributes?.image?.data?.attributes?.formats?.medium?.url,
  // ]);

  // console.log(newData);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <main className="container">
      {/* <div></div> */}
      <div className="row g-5">
        <div className="col-md-8">
          {/* <div className="container"> */}
          <div className="row">
            {articleData?.map((post) => {
              // console.log(post?.attributes?.category?.data?.attributes?.slug);
              // console.log(post?.attributes?.description);
              if (post?.attributes?.highlighted_article === true) {
                return (
                  <div className="" key={post.id}>
                    <HighlightCard {...post} />
                  </div>
                );
              }
            })}
            {/* <HighlightCard
              articleData={articleData}
              setArticleData={setArticleData}
            /> */}
          </div>
          {/* </div> */}

          {/* <div className="container"> */}
          <div className="row mt-5 gy-4 mb-5">
            {/* <TagButtons /> */}
            {currentPageData?.map((post) => {
              // console.log(post.attributes);
              if (post.attributes.highlighted_article === false) {
                return (
                  <div className="col-md-6" key={post.id}>
                    <ArticleCard {...post} />
                  </div>
                );
              }
            })}
            {/* {currentPageData ? <ArticleCard {...newData} /> : <p>Loading</p>} */}
          </div>

          {/* </div> */}
          {/* <Pagination
            pageCount={Math.ceil(limit.length / perPage)}
            currentPage={currentPage}
          /> */}

          {/* <div className="pt-4">
            <PaginationComp
              hasNextPage={end < articleData.length}
              hasPrevPage={start > 0}
            />
            {console.log(start, end, articleData.length)} */}

          {/* <button onClick={() => router.push(`/articles?page=${page + 1}`)}>
              Next
            </button> */}
          {/* </div> */}

          {/* <div className="mt-5"> */}
          {/* <div onClick={() => pageNumClick(parseInt(meta?.start) + 1, limit)}>
              Next page
            </div>

            <div onClick={() => pageNumClick(parseInt(meta?.start) - 1, limit)}>
              Previous page
            </div> */}
          {/* {limit ? JSON.stringify(limit) : <></>} */}
          {/* <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            /> */}

          <nav aria-label="Page navigation example mt-5">
            <ul
              className="pagination d-flex align-items-center"
              // nPages={nPages}
              // currentPage={currentPage}
              // setCurrentPage={setCurrentPage}
            >
              <li className="page-item">
                <button
                  className="btn btn-success"
                  disabled={page === 1}
                  onClick={handlePrevPage}
                >
                  Previous
                </button>
              </li>
              {/* {
                // map through the array of numbers and render a li for each one
                pageNumbers.map((pgNumber) => {
                  // if (number === currentPage) {}

                  <li
                    // className={`page-item ${
                    //   currentPage === pgNumber ? "active" : ""
                    // }`}
                    className="page-item"
                    key={pgNumber}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(pgNumber)}
                    >
                      {pgNumber}
                    </a>
                  </li>;
                })
              } */}
              <span className="mx-3">{`Page ${page} of ${nPages}`}</span>
              {/* {console.log(currentPage, nPages)} */}
              <li className="page-item">
                <button
                  className="btn btn-success"
                  disabled={page === nPages}
                  onClick={handleNextPage}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
          {/* </div> */}
        </div>

        {/* <div className="col-md-4" style={{ position: "fixed", right: "1px" }}> */}
        <div className="col-md-4">
          <div className="mb-5">
            <RecentPostCard />
          </div>

          <div>
            <JoinTelegram />
          </div>

          <div className="mt-5">
            <h6 className="text-dark">
              Subscribe our newsletter to get update
            </h6>
            <Subscribe />
          </div>
        </div>
      </div>
    </main>
  );
}

// const Pagination = () => {
//   const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

//   const prevPage = () => {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const nextPage = () => {
//     if (currentPage !== nPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <nav aria-label="Page navigation example">
//       <ul className="pagination">
//         <li className="page-item">
//           <a className="page-link" href="#" onClick={prevPage}>
//             Previous
//           </a>
//         </li>
//         {
//           // map through the array of numbers and render a li for each one
//           pageNumbers.map((pgNumber) => {
//             // if (number === currentPage) {}

//             <li
//               className={`page-item ${
//                 currentPage === pgNumber ? "active" : ""
//               }`}
//               key={pgNumber}
//             >
//               <a
//                 className="page-link"
//                 href="#"
//                 onClick={() => setCurrentPage(pgNumber)}
//               >
//                 {pgNumber}
//               </a>
//             </li>;
//           })
//         }

//         <li className="page-item">
//           <a className="page-link" href="#" onClick={nextPage}>
//             Next
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };
