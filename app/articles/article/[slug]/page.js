"use client";
import {
  RecentPostCard,
  // RelatedArticleCard,
} from "../../../../components/Cards";
import { JoinTelegram, Subscribe } from "../../../../components/Connections";
import IsLoading from "../../../loading";
import {
  // getAllArticleData,
  queryStr,
} from "../../../../data/articleData/articleListData";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

const SingleArticlePage = ({ params }) => {
  const { slug } = params;
  // console.log(slug);

  const singleArticle = useQuery({
    queryKey: ["singleArticle"],
    queryFn: () =>
      axios.get(
        `https://strapi-blcj.onrender.com/api/articles/${slug}/?${queryStr}`
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

  let year = new Date(
    singleArticle?.data?.data?.data?.attributes?.createdAt
  ).getFullYear();

  var arr = `${singleArticle?.data?.data?.data?.attributes?.createdAt}`.split(
    "-"
  );
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

  // let day = new Date(singleArticleData?.attributes?.createdAt).getDate();
  // let hour = new Date(singleArticleData?.attributes?.createdAt).getHours();
  // let mins = new Date(singleArticleData?.attributes?.createdAt).getMinutes();

  // let articleDate = `${month?.toUpperCase()} ${day}, ${year}`;

  let day = new Date(
    singleArticle?.data?.data?.data?.attributes?.createdAt
  ).getDate();
  let hour = new Date(
    singleArticle?.data?.data?.data?.attributes?.createdAt
  ).getHours();
  let mins = new Date(
    singleArticle?.data?.data?.data?.attributes?.createdAt
  ).getMinutes();

  let articleDate = `${month?.toUpperCase()} ${day}, ${year}`;

  if (singleArticle.isLoading) {
    return <IsLoading />;
  }

  if (singleArticle.isError) {
    return <div>{singleArticle?.error?.message}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div>
            <Image
              src={
                singleArticle?.data?.data?.data?.attributes?.image?.data
                  ?.attributes?.formats?.medium?.url
              }
              // className="card-img-top image-container"
              className="img-fluid"
              width={900}
              height={300}
              priority
              // fill
              // style={{
              //   objectFit: "cover",
              //   height: "auto",
              // }}
              rel="preload"
              sizes="100vw"
              // Make the image display full width
              // style={{
              //   width: "100%",
              //   height: "auto",
              // }}
              // fill={true}
              alt="Picture of the author"
              // alt={`http://localhost:1337${singleArticleData?.image?.data?.attributes?.url}`}
            />
          </div>

          <div className="d-flex align-items-center mt-3 mb-4">
            <div>
              <Image
                src={
                  singleArticle?.data?.data?.data?.attributes?.author_bio?.data
                    ?.attributes?.author_img?.data?.attributes?.formats?.small
                    ?.url
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
                    singleArticle?.data?.data?.data?.attributes?.author_bio
                      ?.data?.attributes?.author_name
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
              {singleArticle?.data?.data?.data?.attributes?.title}
            </h3>

            {/* <h3>Title</h3> */}
          </div>
          <div className="text-justify mt-4 text-black">
            {/* <p align="justify"> */}
            <ReactMarkdown>
              {singleArticle?.data?.data?.data?.attributes?.body}
            </ReactMarkdown>
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
