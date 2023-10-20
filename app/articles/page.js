"use client";
import { useCallback, useEffect, useState } from "react";
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
  const [limit, setLimit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

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

  useEffect(() => {
    // const fetchData = async ({ start = 0, limit = 6 } = {}) => {
    const fetchData = async () => {
      const query = qs.stringify({
        populate: {
          // image: { fields: ["url"] },
          users_permissions_user: { populate: "*" },
          image: { populate: "*" },
          category: { populate: "*" },
          // authorsBio: {
          //   populate: "*",
          // },
        },
        // pagination: {
        //   start,
        //   limit,
        // },
      });
      const data = await axios.get(
        `https://strapi-blcj.onrender.com/api/articles?${query}`
        // `http://localhost:1337/api/articles?_limit=3`
      );

      // console.log(`https://strapi-blcj.onrender.com/api/articles?${query}`);
      // console.log(data);
      let response = data.data.data;
      // let response = data.data.meta;
      setLimit(response);
      // console.log(response);
    };

    fetchData();
    // fetchData({ start: 1, limit: 4 });
  }, []);

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
          <div className="row mt-5 gy-4">
            {/* <TagButtons /> */}
            {limit?.map((post) => {
              // console.log(post.attributes);
              if (post.attributes.highlighted_article === false) {
                return (
                  <div className="col-md-6" key={post.id}>
                    <ArticleCard {...post} />
                  </div>
                );
              }
            })}
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
