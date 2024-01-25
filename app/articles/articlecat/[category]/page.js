"use client";
import IsLoading from "../../../loading";
import { useEffect, useState } from "react";
import { ArticleCard } from "../../../../components/Cards";
import { queryStr } from "../../../../data/articleData/articleListData";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const SingleArticleCat = ({ params }) => {
  // const SingleArticleCat = () => {
  const { category } = params;

  const articleCategory = useQuery({
    queryKey: ["articleCategory"],
    queryFn: () =>
      axios.get(
        `https://strapi-blcj.onrender.com/api/articles?${queryStr}&filters[category][slug]=${category}`
      ),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: undefined,
    retry: false,
    refetchInterval: 30 * 1000,
    onError: (error) => {
      handleError(error);
    },
  });

  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);

  if (articleCategory.isLoading) {
    return <IsLoading />;
  }

  if (articleCategory.isError) {
    return <div>{articleCategory?.error?.message}</div>;
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     const data = await axios.get(
  //       `https://strapi-blcj.onrender.com/api/articles?${queryStr}&filters[category][slug]=${category}`
  //     );

  //     // console.log(data);

  //     let response = data.data?.data;
  //     setData(response);
  //   };

  //   fetchData();

  //   setIsLoading(false);
  // }, [category, data]);

  // if (isLoading) {
  //   return <IsLoading />;
  // }

  return (
    <div className="container">
      <div className="row gy-4">
        {/* <TagButtons /> */}
        {articleCategory?.data?.data?.data?.map((post) => {
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
