import React from "react";
import { RecentPostCard } from "../../components/Cards";
import { JoinTelegram, Subscribe } from "../../components/Connections";
import Link from "next/link";

const PostLists = ({ data: articles, children }) => {
  //   const mappedArticles = (imageURL, imageAlt, category) => {
  //     const imageURL =
  //       article?.attributes?.image?.data?.attributes?.formats?.small?.url;

  //     const imageAlt =
  //       article?.attributes?.image?.data?.attributes?.formats?.small?.url;

  //     const category = article?.attributes?.category?.data?.attributes;

  //     return imageURL, imageAlt, category;
  //   };

  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-md-8">
          <div className="row">
            {articles?.map((article) => {
              const imageURL = `${article?.attributes?.image?.data?.attributes?.formats?.small?.url}`;

              const imageAlt =
                article?.attributes?.image?.data?.attributes?.formats?.small
                  ?.url;

              const category = article?.attributes?.category?.data?.attributes;

              if (article?.attributes?.highlighted_article === true) {
                return (
                  <>
                    <Link
                      href={`articles/article/${category?.slug}/${article?.attributes?.slug}`}
                      key={article?.id}
                      className=""
                    >
                      {imageURL && (
                        <img
                          //   alt={imageAlt}
                          //   width={50}
                          //   height={100}
                          src={`${article?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
                          className="card-img-top"
                        />
                      )}
                      {/* {mappedArticles(imageURL) && (
                        <Image
                          alt={imageAlt}
                          width={50}
                          height={100}
                          src={imageURL}
                          className="card-img-top"
                        />
                      )} */}
                    </Link>

                    <div className="card-body">
                      <Link
                        href={`/articlecat/singleartcat/${category?.slug}`}
                        className="icon__color"
                      >
                        {article?.attributes?.category?.data?.attributes?.title}
                      </Link>

                      <Link
                        href={`articles/article/${category?.slug}/${article?.attributes?.slug}`}
                        className="article-content__onhover"
                      >
                        <h5
                          // className="card-title text-dark article-title__onclick"
                          className="card-title mt-4"
                          // onClick={handleClick}
                          // style={{ color: active ? "black" : "white" }}
                        >
                          {article?.attributes?.title}
                        </h5>
                        <p className="card-text">
                          {article?.attributes?.description
                            .split(" ")
                            .splice(0, 10)
                            .join(" ") + "..."}
                        </p>
                      </Link>
                    </div>
                  </>
                );
              }
            })}
          </div>

          <div className="row mt-5 gy-4">
            {articles?.map((article) => {
              const imageURL =
                article?.attributes?.image?.data?.attributes?.formats?.small
                  ?.url;

              const imageAlt =
                article?.attributes?.image?.data?.attributes?.formats?.small
                  ?.url;

              const category = article?.attributes?.category?.data?.attributes;

              if (article?.attributes?.highlighted_article === false) {
                return (
                  <>
                    <Link
                      href={`articles/article/${category?.slug}/${article?.attributes?.slug}`}
                      key={article?.id}
                      className=""
                    >
                      {imageURL && (
                        <img
                          //   alt={imageAlt}
                          //   width={50}
                          //   height={100}
                          src={`${article?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
                          className="card-img-top"
                        />
                      )}
                    </Link>

                    <div className="card-body">
                      <Link
                        href={`/articlecat/singleartcat/${category?.slug}`}
                        className="icon__color"
                      >
                        {article?.attributes?.category?.data?.attributes?.title}
                      </Link>

                      <Link
                        href={`articles/article/${category?.slug}/${article?.attributes?.slug}`}
                        className="article-content__onhover"
                      >
                        <h5
                          // className="card-title text-dark article-title__onclick"
                          className="card-title mt-4"
                          // onClick={handleClick}
                          // style={{ color: active ? "black" : "white" }}
                        >
                          {article?.attributes?.title}
                        </h5>
                        <p className="card-text">
                          {article?.attributes?.description
                            .split(" ")
                            .splice(0, 10)
                            .join(" ") + "..."}
                        </p>
                      </Link>
                    </div>
                  </>
                );
              }
            })}
          </div>

          {children && children}
        </div>

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
    </div>
  );
};

export default PostLists;
