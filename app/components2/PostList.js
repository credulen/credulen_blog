import Link from "next/link";
import { formatDate, getStrapiMedia } from "../utils/api_helper";
import Image from "next/image";
import { RecentPostCard } from "../components/Cards";
import { JoinTelegram, Subscribe } from "../components/Connections";

const PostList = ({ data: articles, children }) => {
  //   console.log(articles);
  return (
    <section className="grid sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-2 gap-x-10">
      <div className="sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
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

      <div className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <RecentPostCard />
        </div>

        <div className="mt-5">
          <JoinTelegram />
        </div>

        <div className="mt-5">
          <h6 className="m-auto">Subscribe our newsletter to get update</h6>
          <Subscribe />
        </div>
      </div>

      {/* <div className="grid sm:grid-cols-12 md:grid-cols-4 lg:grid-cols-4">
        <p>hi</p>
        <p>hi</p>
      </div> */}
    </section>
  );
};

export default PostList;
