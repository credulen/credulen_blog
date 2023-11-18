"use client";
import { useEffect, useState } from "react";
import {
  ArticleCard,
  CategoryCard,
  HighlightCard,
  RecentPostCard,
} from "../../components/Cards";
import { JoinTelegram, Subscribe } from "../../components/Connections";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import {
  getAllArticleData,
  queryStr,
} from "../../data/articleData/articleListData";
import IsLoading from "../../components/IsLoading";
import ReactPaginate from "react-paginate";
import qs from "qs";

export default function ArticlePage() {
  // const [articleData, setArticleData] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isError, setIsError] = useState(true);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState();

  const fetchData = async () => {
    const articles = await getAllArticleData();
    // console.log(articles);
    setArticleData(articles);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://strapi-blcj.onrender.com/api/articles?${queryStr}&pagination[page]=${page}&pagination[pageSize]=6`

        // `http://localhost:1337/api/articles?${queryStr}&pagination[page]=${page}&pagination[pageSize]=7`
        // `http://localhost:1337/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=7`

        // `http://localhost:1337/api/articles?filters[category][Title][$eq]=BLOCKCHAIN-EDUCATION&populate=*&pagination[page]=${page}&pagination[pageSize]=7`

        // `http://localhost:1337/api/articles?populate=*&filters[category][Title][$eq]=BLOCKCHAIN-EDUCATION&pagination[page]=${page}&pagination[pageSize]=7`

        // `http://localhost:1337/api/articles?filters[category][Title][$eq]=${category}&populate=*&pagination[page]=${page}&pagination[pageSize]=7`

        // `http://localhost:1337/api/${queryStr}`
      );

      // console.log(data);

      let response = data.data?.data;
      setData(response);

      let responseMeta = data?.data?.meta?.pagination;

      setMeta(responseMeta);
    };

    fetchData();
  }, [page]);

  const nPages = meta?.pageCount;

  // const handlePrevPage = () => {
  //   if (page > 1) {
  //     setPage((prevPage) => prevPage - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (page !== nPages) {
  //     setPage((prev) => prev + 1);
  //   }
  // };

  const onPageClick = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    } else if (page !== nPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * meta?.pageSize;
  // const startIndex = (page - 1) * meta?.pageSize;
  const endIndex = startIndex + meta?.pageSize;
  const currentPageData = data?.slice(startIndex, endIndex);

  // filter category
  const filteredData = data.filter(
    (value, index, self) =>
      self.findIndex(
        (v) =>
          v?.attributes?.category?.data?.id ===
            value?.attributes?.category?.data?.id &&
          v?.attributes?.category?.data?.attributes?.Title ===
            value?.attributes?.category?.data?.attributes?.Title
      ) === index
  );

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <main className="container">
      <div className="row g-5">
        <div className="col-md-8">
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
          </div>

          <div className="row mt-5 gy-4 mb-5">
            {currentPageData?.map((post) => {
              if (post.attributes.highlighted_article === false) {
                return (
                  <div className="col-md-6" key={post.id}>
                    <ArticleCard {...post} />
                  </div>
                );
              }
            })}
          </div>

          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            pageCount={parseInt(nPages)}
            onClick={onPageClick}
            containerClassName="pagination d-flex justify-content-center pt-5"
            previousLinkClassName="page-link bg-success text-white me-3"
            nextLinkClassName="page-link bg-success text-white ms-3"
            pageClassName="px-3 mx-2 btn btn-success text-success page-link"
            activeClassName="bg-success text-white"
            disabledLinkClassName="bg-secondary"
          />

          {/* <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            pageCount={nPages}
            onClick={onPageClick}
            containerClassName="pagination d-flex justify-content-center pt-5"
            previousLinkClassName="page-link bg-primary text-white me-3"
            nextLinkClassName="page-link bg-primary text-white ms-3"
            pageClassName="px-3 mx-2 btn btn-primary page-link"
            activeClassName="bg-primary text-white"
            disabledLinkClassName="bg-secondary"
          /> */}

          {/* <nav aria-label="Page navigation example mt-5">
            <ul className="pagination d-flex align-items-center">
              <li className="page-item">
                <button
                  className="btn btn-success"
                  disabled={page === 1}
                  onClick={handlePrevPage}
                >
                  Previous
                </button>
              </li>

              <span className="mx-3">{`Page ${page} of ${nPages}`}</span>
              
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
          </nav> */}
          {/* </div> */}
        </div>

        <div className="col-md-4">
          <div className="mb-5">
            <RecentPostCard />
          </div>

          <div className="card nav_bg mb-5">
            <div className="card-header text-center text-white">Categories</div>

            <ul className="list-group list-group-flush">
              {filteredData?.map((cat) => {
                return (
                  <div key={cat?.id}>
                    <CategoryCard {...cat} />
                  </div>
                );
              })}
            </ul>
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
