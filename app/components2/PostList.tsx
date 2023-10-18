import Link from "next/link";
import { formatDate, getStrapiMedia } from "../utils/api_helpers";
import Image from "next/image";

interface Article {
  id: 4;
  attributes: {
    title: string;
    description: string;
    body: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    highlighted_article: boolean;

    image: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
              name: string;
            };
            medium: {
              url: string;
              name: string;
            };
            small: {
              url: string;
              name: string;
            };
          };
        };
      };
    };

    category: {
      data: {
        attributes: {
          Title: string;
          slug: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      };
    };

    meta: {
      pagination: {
        start: number;
        limit: number;
        total: number;
      };
    };
  };
}

const PostList = ({
  data: articles,
  children,
}: {
  data: Article[];
  children?: React.ReactNode;
}) => {
  return (
    <section className="container p-6 mx-auto space-y-6 sm:space-y-12">
      <div className="grid justify-center">
        {articles?.map((article) => {
          const imageURL = getStrapiMedia(
            article?.attributes?.image?.data?.attributes?.formats?.small?.url
          );

          const imageAlt =
            article?.attributes?.image?.data?.attributes?.formats?.small?.url;

          const category = article?.attributes?.category?.data?.attributes;

          if (article?.attributes?.highlighted_article === true) {
            return (
              <Link
                href={`${category?.slug}/${article?.attributes?.slug}`}
                key={article?.id}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[300px] xl:min-w-[375px] rounded-2xl overflow-hidden shadow-lg"
              >
                {imageURL && (
                  <Image
                    alt={imageAlt}
                    width={50}
                    height={100}
                    src={imageURL}
                    className="object-cover w-full h-44"
                  />
                )}

                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {article?.attributes?.title}
                </h3>

                <div className="items-center">
                  <span>{formatDate(article?.attributes?.publishedAt)}</span>

                  <p className="py-4">{article?.attributes?.description}</p>
                </div>
              </Link>
            );
          }
        })}
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles?.map((article) => {
          const imageURL = getStrapiMedia(
            article?.attributes?.image?.data?.attributes?.formats?.small?.url
          );

          const imageAlt =
            article?.attributes?.image?.data?.attributes?.formats?.small?.url;

          const category = article?.attributes?.category?.data?.attributes;

          if (article?.attributes?.highlighted_article === false) {
            return (
              <Link
                href={`${category?.slug}/${article?.attributes?.slug}`}
                key={article?.id}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[300px] xl:min-w-[375px] rounded-2xl overflow-hidden shadow-lg"
              >
                {imageURL && (
                  <Image
                    alt={imageAlt}
                    width={50}
                    height={100}
                    src={imageURL}
                    className="object-cover w-full h-44"
                  />
                )}

                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {article?.attributes?.title}
                </h3>

                <div className="items-center">
                  <span>{formatDate(article?.attributes?.publishedAt)}</span>

                  <p className="py-4">{article?.attributes?.description}</p>
                </div>
              </Link>
            );
          }
        })}
      </div>
      {children && children}
    </section>
  );
};

export default PostList;
