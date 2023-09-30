"use client";
import { RelatedArticleCard } from "@/components/Cards";
import { JoinTelegram, Subscribe } from "@/components/Connections";
import IsLoading from "@/components/IsLoading";
import { getAllArticleData } from "@/data/articleData/articleListData";
// import { getAuthorData } from "@/data/authorData";
import { getSingleArticleData } from "@/data/articleData/getSingleArticle";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

// const fetchData = async (articleId) => {
// 	let singleArticle = await axios.get(
// 		`http://localhost:1337/api/articles/${articleId}/?populate=*`
// 	);

// 	console.log(singleArticle);
// 	// return singleArticle;
// };

// fetchData();
// const SingleArticlePage = ({ params: { articleId } }) => {
// const SingleArticlePage = ({ articleId }) => {
// const SingleArticlePage = ({ params }) => {
const SingleArticlePage = ({ params }) => {
  const { slug } = params;

  const [singleArticleData, setSingleArticleData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [authorData, setAuthorData] = useState([]);

  // const newData = fetchData(params.articleId);

  // console.log(newData);

  // useEffect(() => {
  // 	const getSingleArticleData = async () => {
  // 		let singleArticle = await axios.get(
  // 			`http://localhost:1337/api/articles/${params.slug}/?populate=*`
  // 		);

  // 		let response = singleArticle.data.data;

  // 		// return response;
  // 		// console.log(response);
  // 		setSingleArticleData(response);
  // 		setIsLoading(false);
  // 	};

  // 	getSingleArticleData();
  // }, []);

  const getSingleArticleData = async () => {
    const data = await axios.get(
      `https://strapi-blcj.onrender.com/api/articles/${slug}/?populate=*`
    );
    // .then((res) => res.data)
    // .then((article) => article.data)
    // .catch((err) => console.log(err));

    setSingleArticleData(data?.data?.data);
  };

  useEffect(() => {
    getSingleArticleData();
    setIsLoading(false);
  }, [slug]);

  // useEffect(async () => {
  //   const data = await axios.get(
  //     `http://localhost:1337/api/articles/${slug}/?populate=*`
  //   );
  //   // .then((res) => res.data)
  //   // .then((article) => article.data)
  //   // .catch((err) => console.log(err));
  //   setSingleArticleData(data?.data?.data);
  //   setIsLoading(false);
  // }, [slug]);

  // console.log(singleArticleData.attributes.title);
  // console.log(singleArticleData);
  // console.log(authorData);

  // const oneArticle = singleArticleData.map((article) => {
  // 	console.log(article);
  // });

  // console.log(oneArticle);

  // useEffect(() => {
  // 	console.log(singleArticleData);
  // });

  // let title = singleArticleData.attributes.title;
  // console.log(title);
  // console.log(singleArticleData);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div>
            <img
              // src="https://res.cloudinary.com/dge5x9t8i/image/upload/v1693866578/credulen/Maya03_small_c13f592fdc.png"
              src={`${
                isLoading ? (
                  <IsLoading />
                ) : (
                  singleArticleData?.attributes?.image?.data?.attributes
                    ?.formats?.medium?.url
                )
              }`}
              // className="card-img-top image-container"
              className="img-fluid"
              width={900}
              // height={300}
              // fill={true}
              alt="Picture of the author"
              // alt={`http://localhost:1337${singleArticleData?.image?.data?.attributes?.url}`}
            />
          </div>

          <div className="d-flex align-items-center mt-3 mb-4">
            <div>
              <img
                src="/assets/blockImg.jpg"
                className="rounded-circle me-3"
                width={40}
                height={40}
                alt="Picture of the first speaker"
              />
            </div>

            <div>
              <p className="card-text">
                <small className="text-body-secondary">
                  John Doe | JULY 15, 2023
                </small>

                <small className="text-body-secondary">
                  {isLoading ? (
                    <IsLoading />
                  ) : (
                    singleArticleData?.attributes?.users_permission_user |
                    singleArticleData?.attributes?.createdAt
                  )}
                </small>
              </p>
            </div>
          </div>

          {/* <p className="text-justify mt-4">{data.attributes.body}</p> */}

          <div className="text-center">
            <h3 className="text-black">
              {isLoading ? <IsLoading /> : singleArticleData?.attributes?.title}
            </h3>

            {/* <h3>Title</h3> */}
          </div>
          <div className="text-justify mt-4 text-black">
            <p>
              {isLoading ? (
                <IsLoading />
              ) : (
                <p align="justify">
                  <ReactMarkdown>
                    {singleArticleData?.attributes?.body}
                  </ReactMarkdown>
                </p>
              )}
              {/* {isLoading ? (
                <IsLoading />
                <ReactMarkdown source={singleArticleData?.attributes?.body} escapeHtml={false} />
              ) : (
                <p>dangerouslySetInnerHtml={blogPost}</p>
              )} */}
            </p>
          </div>
          {/* end */}
        </div>
        <div className="col-md-4">
          <RelatedArticleCard />

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