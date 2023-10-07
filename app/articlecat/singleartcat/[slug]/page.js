"use client";
import IsLoading from "@/components/IsLoading";
import { useEffect, useState } from "react";
import { ArticleCard } from "@/components/Cards";
import {
  getBlockchainEduCatData,
  getBlockchainTrendsCatData,
} from "@/data/articleData/articleCatData";

// const SingleArticleCat = ({ params }) => {
const SingleArticleCat = () => {
  // const { slug } = params;

  const [singleCatData, setSingleCatData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // blockchain trends
  const fetchBlockchainTrendsCatData = async () => {
    const articleCat = await getBlockchainTrendsCatData();
    setSingleCatData(articleCat);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchBlockchainTrendsCatData();
    setIsLoading(false);
  }, []);

  // blockchain education;
  const fetchBlockchainEduCatData = async () => {
    const articleCat = await getBlockchainEduCatData();
    setSingleCatData(articleCat);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchBlockchainEduCatData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <div className="container">
      <div className="row mt-5 gy-4">
        {/* <TagButtons /> */}
        {singleCatData?.map((post) => {
          console.log(post?.attributes?.category?.data?.attributes?.slug);

          if (
            post?.attributes?.category?.data?.attributes?.slug ===
            "blockchain-trends"
          ) {
            return (
              <div className="col-md-6" key={post.id}>
                <ArticleCard {...post} />
              </div>
            );
          } else if (
            post?.attributes?.category?.data?.attributes?.slug ===
            "blockchain-education"
          ) {
            return (
              <div className="col-md-6" key={post.id}>
                <ArticleCard {...post} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SingleArticleCat;
