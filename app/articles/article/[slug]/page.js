"use client";
import {
  RecentPostCard,
  RelatedArticleCard,
} from "../../../../components/Cards";
import { JoinTelegram, Subscribe } from "../../../../components/Connections";
import IsLoading from "../../../loading";
import {
  getAllArticleData,
  queryStr,
} from "../../../../data/articleData/articleListData";
// import { getAuthorData } from "@/data/authorData";
import { getSingleArticleData } from "../../../../data/articleData/getSingleArticle";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import qs from "qs";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Image from "next/image";

// fetchData();
// const SingleArticlePage = ({ params: { articleId } }) => {
// const SingleArticlePage = ({ articleId }) => {
// const SingleArticlePage = ({ params }) => {
const SingleArticlePage = ({ params }) => {
  // const queryStr = qs.stringify({
  //   populate: {
  //     image: { populate: "*" },
  //     category: { populate: "*" },
  //     author_bio: { populate: "*" },
  //   },
  //   pagination: {},
  // });

  const { slug } = params;
  // console.log(slug);

  const [singleArticleData, setSingleArticleData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [authorData, setAuthorData] = useState([]);

  // const newData = fetchData(params.articleId);

  const getSingleArticleData = async () => {
    const data = await axios.get(
      `https://strapi-blcj.onrender.com/api/articles/${slug}/?${queryStr}`
      // `https://strapi-blcj.onrender.com/api/articles?${queryStr}&filters[slug]=${slug}`
    );
    // .then((res) => res.data)
    // .then((article) => article.data)
    // .catch((err) => console.log(err));
    // console.log(data?.data?.data);
    setSingleArticleData(data?.data?.data);
  };

  // const getSingleArticleData = useMemo(async () => {
  //   try {
  //     const data = await axios.get(
  //       `https://strapi-blcj.onrender.com/api/articles/${slug}/?${queryStr}`
  //     );

  //     return setSingleArticleData(data?.data?.data);
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // }, []);

  // console.log(singleArticleData?.attributes?.createdAt);

  // console.log(
  //   singleArticleData?.attributes?.author_bio?.data?.attributes?.author_img
  //     ?.data?.attributes?.formats?.small?.url
  // );

  let year = new Date(singleArticleData?.attributes?.createdAt).getFullYear();
  // let month = new Date(props.attributes.createdAt).getFullYear();
  var arr = `${singleArticleData?.attributes?.createdAt}`.split("-");
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var month_index = parseInt(arr[1], 10) - 1;
  let month = months[month_index];
  // console.log(month);

  let day = new Date(singleArticleData?.attributes?.createdAt).getDate();
  let hour = new Date(singleArticleData?.attributes?.createdAt).getHours();
  let mins = new Date(singleArticleData?.attributes?.createdAt).getMinutes();

  let articleDate = `${month?.toUpperCase()} ${day}, ${year}`;

  // console.log(articleDate);
  // useEffect(() => {
  //   getSingleArticleData();
  //   setIsLoading(false);
  // }, []);
  useEffect(() => {
    getSingleArticleData();
    // setSingleArticleData(getSingleArticleData);
    setIsLoading(false);
  }, [singleArticleData]);
  // }, [slug]);

  if (!singleArticleData) {
    return <IsLoading />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div>
            <Image
              // src="https://res.cloudinary.com/dge5x9t8i/image/upload/v1693866578/credulen/Maya03_small_c13f592fdc.png"
              src={
                singleArticleData?.attributes?.image?.data?.attributes?.formats
                  ?.medium?.url
              }
              // className="card-img-top image-container"
              className="img-fluid"
              width={900}
              height={300}
              // fill={true}
              alt="Picture of the author"
              // alt={`http://localhost:1337${singleArticleData?.image?.data?.attributes?.url}`}
            />
          </div>

          <div className="d-flex align-items-center mt-3 mb-4">
            <div>
              <Image
                src={
                  singleArticleData?.attributes?.author_bio?.data?.attributes
                    ?.author_img?.data?.attributes?.formats?.small?.url
                }
                className="rounded-circle me-3"
                width={40}
                height={40}
                alt="Picture of the first speaker"
              />
            </div>

            <div>
              <p className="card-text">
                <small className="text-body-secondary">
                  {
                    singleArticleData?.attributes?.author_bio?.data?.attributes
                      ?.author_name
                  }{" "}
                  | {articleDate}
                </small>

                {/* <small className="text-body-secondary">
                  {singleArticleData?.attributes?.users_permission_user |
                    singleArticleData?.attributes?.createdAt}
                </small> */}
              </p>
            </div>
          </div>

          {/* <p className="text-justify mt-4">{data.attributes.body}</p> */}

          <div className="text-center">
            <h3 className="text-black">
              {singleArticleData?.attributes?.title}
            </h3>

            {/* <h3>Title</h3> */}
          </div>
          <div className="text-justify mt-4 text-black">
            {/* {
              <p align="justify">
                <ReactMarkdown>
                  <SyntaxHighlighter
                    children={String(
                      singleArticleData?.attributes?.body
                    ).replace(
                      "<a>",
                      '<a style="text-decoration: underline; color: blue">'
                    )}
                    style={blue}
                  />
                </ReactMarkdown>
              </p>
            } */}

            {/* <p align="justify"> */}
            <ReactMarkdown>{singleArticleData?.attributes?.body}</ReactMarkdown>
            {/* </p> */}

            {/* {isLoading ? (
                <IsLoading />
                <ReactMarkdown source={singleArticleData?.attributes?.body} escapeHtml={false} />
              ) : (
                <p>dangerouslySetInnerHtml={blogPost}</p>
              )} */}
          </div>
          {/* end */}
        </div>
        <div className="col-md-4">
          {/* <RelatedArticleCard /> */}
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
    </div>
  );
};

export default SingleArticlePage;
