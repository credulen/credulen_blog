"use client";
import IsLoading from "../../../components/IsLoading";
import { useEffect, useState } from "react";
import { ArticleCard } from "../../../components/Cards";
import {
  getArtificialIntelligenceCatData,
  getBlockchainEduCatData,
  getBlockchainTrendsCatData,
} from "../../../../data/articleData/articleCatData";
import { getAllArticleData } from "../../../../data/articleData/articleListData";
import { useParams, useSearchParams } from "next/navigation";
import axios from "axios";

// const SingleArticleCat = ({ params }) => {
const SingleArticleCat = ({ params }) => {
  const { slug } = params;

  const [singleCatData, setSingleCatData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  // blockchain trends
  // const fetchBlockchainTrendsCatData = async () => {
  //   const articleCat = await getBlockchainTrendsCatData();
  //   setSingleCatData(articleCat);
  // };

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchBlockchainTrendsCatData();
  //   setIsLoading(false);
  // }, []);

  // // blockchain education;
  // const fetchBlockchainEduCatData = async () => {
  //   const articleCat = await getBlockchainEduCatData();
  //   setSingleCatData(articleCat);
  // };

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchBlockchainEduCatData();
  //   setIsLoading(false);
  // }, []);

  // // blockchain education;
  // const fetchAICatData = async () => {
  //   const articleCat = await getArtificialIntelligenceCatData();
  //   setSingleCatData(articleCat);
  // };

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchAICatData();
  //   setIsLoading(false);
  // }, []);

  // const fetchData = async () => {
  //   const articles = await getAllArticleData();
  //   // console.log(articles?.attributes);
  //   // Filter the articles by a specific criteria, e.g. category
  //   const filteredArticles = articles.filter((article) => {
  //     // Check if the article's category matches the specified category
  //     return article.category === category;
  //   });
  //   singleCatData(filteredArticles);
  //   // setArticleData(articles);
  // };

  // filtering article categories
  // const articleCat = [
  //   ...new Set(
  //     singleCatData.map(
  //       (cat) => cat?.attributes?.category?.data?.attributes?.Title
  //     )
  //   ),
  // ];
  // // console.log("article category", articleCat);

  // const filterCat = (filtcat) => {
  //   const newCat = singleCatData.filter(
  //     (newCats) =>
  //       newCats?.attributes?.category?.data?.attributes?.Title === filtcat
  //   );
  //   setSingleCatData(newCat);
  // };

  // works a bit

  // const fetchData = async (category) => {
  //   const articles = await getAllArticleData();

  //   const filteredArticles = articles.filter((art) => {
  //     return art?.attributes?.category?.data?.attributes?.slug === category;
  //   });

  //   if (filteredArticles.length === 0) {
  //     setSingleCatData([]); // Set to an empty array if no items match
  //   } else {
  //     setSingleCatData([...filteredArticles]); // Create a new array with filtered data
  //   }

  //   // console.log(filteredArticles);
  //   setSingleCatData(filteredArticles);
  // };

  // // console.log(singleCatData);

  // useEffect(() => {
  //   setIsLoading(true);
  //   // setIsLoading(false);
  //   fetchData();
  //   setIsLoading(false);
  // }, [singleCatData]);

  // 2;
  useEffect(() => {
    // Simulate fetching data from an API
    const getSingleArticleData = async () => {
      // console.log(slug);
      try {
        const data = await axios.get(
          `https://strapi-blcj.onrender.com/api/articles?filters[category][slug]=${slug}&populate=*`
        );
        // .then((res) => res.data)
        // .then((article) => article.data)
        // .catch((err) => console.log(err));

        setSingleCatData(data?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getSingleArticleData();
  }, []);

  const searchParams = useSearchParams();
  const selectedCat = searchParams.get(params);
  console.log(selectedCat);

  useEffect(() => {
    // Filter articles based on the selected category
    const filtered = singleCatData.filter(
      (art) => art?.attributes?.category?.data?.attributes?.slug === selectedCat
    );

    setFilteredArticles(filtered);
  }, [selectedCat, singleCatData]);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <div className="container">
      <div className="row mt-5 gy-4">
        {/* <TagButtons /> */}
        {filteredArticles?.map((post) => {
          console.log(post);
          return (
            <div className="col-md-6" key={post.id}>
              <ArticleCard {...post} />
            </div>
          );
          // if (
          //   post?.attributes?.category?.data?.attributes?.slug ===
          //   "blockchain-trends"
          // ) {
          //   return (
          //     <div className="col-md-6" key={post.id}>
          //       <ArticleCard {...post} />
          //     </div>
          //   );
          // } else if (
          //   post?.attributes?.category?.data?.attributes?.slug ===
          //   "blockchain-education"
          // ) {
          //   return (
          //     <div className="col-md-6" key={post.id}>
          //       <ArticleCard {...post} />
          //     </div>
          //   );
          // } else if (
          //   post?.attributes?.category?.data?.attributes?.slug ===
          //   "artificial-intelligence"
          // ) {
          //   return (
          //     <div className="col-md-6" key={post.id}>
          //       <ArticleCard {...post} />
          //     </div>
          //   );
          // }
        })}
      </div>
    </div>
  );
};

export default SingleArticleCat;
