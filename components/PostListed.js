import { formatDate, getStrapiMedia } from "../lib/strapiURL.utils";
import Image from "next/image";
import Link from "next/link";

const PostLists = ({ data: articles, children }) => {
  return (
    <section className="container">
      <div className="row g-5">
        <div className="col-md-8">
          <div className="row">
            {articles?.map((article) => {
              const imageURL = getStrapiMedia(
                article?.attributes?.image?.data?.attributes?.formats?.small
                  ?.url
              );

              const imageAlt =
                article?.attributes?.image?.data?.attributes?.formats?.small
                  ?.url;

              const category = article?.attributes?.category?.data?.attributes;

              if (article?.attributes?.highlighted_article === true) {
                return (
                  <Link
                    href={`${category?.slug}/${article?.attributes?.slug}`}
                    key={article?.id}
                    className=""
                  >
                    {imageURL && (
                      <Image
                        alt={imageAlt}
                        width={50}
                        height={100}
                        src={imageURL}
                        className="card-img-top"
                      />
                    )}

                    <h3 className="card-title mt-4">
                      {article?.attributes?.title}
                    </h3>

                    <div className="items-center">
                      <span>
                        {formatDate(article?.attributes?.publishedAt)}
                      </span>

                      <p className="card-text">
                        {article?.attributes?.description}
                      </p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>

          <div className="row mt-5 gy-4">
            {articles?.map((article) => {
              const imageURL = getStrapiMedia(
                article?.attributes?.image?.data?.attributes?.formats?.small
                  ?.url
              );

              const imageAlt =
                article?.attributes?.image?.data?.attributes?.formats?.small
                  ?.url;

              const category = article?.attributes?.category?.data?.attributes;

              if (article?.attributes?.highlighted_article === false) {
                return (
                  <Link
                    href={`${category?.slug}/${article?.attributes?.slug}`}
                    key={article?.id}
                    className=""
                  >
                    {imageURL && (
                      <Image
                        alt={imageAlt}
                        width={50}
                        height={100}
                        src={imageURL}
                        className="card-img-top img-fluid"
                      />
                    )}

                    <h3 className="card-title mt-4">
                      {article?.attributes?.title}
                    </h3>

                    <div className="items-center">
                      <span>
                        {formatDate(article?.attributes?.publishedAt)}
                      </span>

                      <p className="card-text">
                        {article?.attributes?.description}
                      </p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
        {children && children}
      </div>
    </section>
  );
};

export default PostLists;
