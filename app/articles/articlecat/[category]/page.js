"use client";
import IsLoading from "../../../../components/IsLoading";
import { useEffect, useState } from "react";
import { ArticleCard } from "../../../../components/Cards";
import { queryStr } from "../../../../data/articleData/articleListData";
import axios from "axios";

const SingleArticleCat = ({ params }) => {
  // const SingleArticleCat = () => {
  const { category } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await axios.get(
        `https://strapi-blcj.onrender.com/api/articles?${queryStr}&filters[category][slug]=${category}`
      );

      // console.log(data);

      let response = data.data?.data;
      setData(response);
    };

    fetchData();

    setIsLoading(false);
  }, [category]);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <div className="container">
      <div className="row mt-5 gy-4">
        {/* <TagButtons /> */}
        {data?.map((post) => {
          //   console.log(post);
          return (
            <div className="col-md-6" key={post.id}>
              <ArticleCard {...post} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleArticleCat;
