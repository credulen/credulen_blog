"use client";
import { useEffect, useState } from "react";
import ArticleList from "@/components/ArticleList";
import { ArticleCard, HighlightCard, RecentPostCard } from "@/components/Cards";
import { JoinTelegram, Subscribe } from "@/components/Connections";
// import { getAllArticles } from "../data/articleListData";strapiFetchFunctions/articlesFuncs.js

import axios from "axios";
import Link from "next/link";
import { getAllArticleData } from "@/data/articleData/articleListData";
import IsLoading from "@/components/IsLoading";
import TagButtons from "@/components/TagButtons";

export default function ArticlePage() {
  const [articleData, setArticleData] = useState([]);
  // const [limit, setLimit] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const articles = await getAllArticleData();
    // console.log(articles);
    setArticleData(articles);
  };
  useEffect(() => {
    setIsLoading(true);
    // setIsLoading(false);
    fetchData();
    setIsLoading(false);
  }, []);

  // console.log(data);

  // useEffect(() => {
  // 	const fetchData = async () => {
  // 		const data = await axios.get(
  // 			`http://localhost:1337/api/articles?populate=*&pagination[start]=0&pagination[limit]=${limit}`
  // 		);
  // 		let response = data.data.data;
  // 		setLimit(response);
  // 		console.log(response);
  // 	};

  // 	fetchData();
  // }, [limit]);

  // console.log(limit);

  // if (isLoading) {
  //   return <IsLoading />;
  // }

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
          </div>
          {/* </div> */}

          {/* <div className="container"> */}
          <div className="row mt-5 gy-4">
            {/* <TagButtons /> */}
            {articleData?.map((post) => {
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
