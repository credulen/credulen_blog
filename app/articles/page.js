"use client";
import { useEffect, useState } from "react";
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
import { useParams, useRouter } from "next/navigation";

export default function ArticlePage() {
  // const [articleData, setArticleData] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const [limit, setLimit] = useState(5);
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
    const fetchData = async () => {
      const data = await axios.get(
        `https://strapi-blcj.onrender.com/api/articles?populate=*&pagination[start]=0&pagination[limit]=5`
        // `http://localhost:1337/api/articles?_limit=3`
      );
      // let response = data.data.data;
      let response = data.data.meta;
      setLimit(response);
      // console.log(response);
    };

    fetchData();
  }, []);

  // console.log(limit);

  // const getSelectedCat = (category) => {
  // if()
  // };

  // pagination
  const page = params["start"] ?? "1";
  const per_page = params["limit"] ?? "5";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = articleData.slice(start, end);
  console.log(entries);

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
              if (post.attributes.highlighted_article === true) {
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
            {entries?.map((post) => {
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
          {/* <Pagination pageCount={Math.ceil(articleData.length / perPage)} currentPage={currentPage}/> */}

          <div className="pt-4">
            {/* <Pagination /> */}

            <button onClick={() => router.push(`/articles?page=${page + 1}`)}>
              Next
            </button>
          </div>
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
