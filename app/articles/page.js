"use client";
import {
  ArticleCard,
  CategoryCard,
  HighlightCard,
  RecentPostCard,
} from "../../components/Cards";
import { JoinTelegram, Subscribe } from "../../components/Connections";
import IsLoading from "../loading";
import { useArticle } from "@/app/articles/useArticlesData";

export default function ArticlePage() {
  const { paginatedArticles, allArticles, setPageNo, page } = useArticle();

  // console.log(allArticles);

  if (paginatedArticles.isLoading || allArticles.isLoading) {
    return <IsLoading />;
  }

  if (paginatedArticles.isError || allArticles.isError) {
    return <div>{paginatedArticles?.error?.message}</div>;
  }

  const filteredData = allArticles?.data?.data?.data?.filter(
    (value, index, self) =>
      self.findIndex(
        (v) =>
          v?.attributes?.category?.data?.id ===
            value?.attributes?.category?.data?.id &&
          v?.attributes?.category?.data?.attributes?.Title ===
            value?.attributes?.category?.data?.attributes?.Title
      ) === index
  );

  // console.log(filteredData);

  return (
    <main className="container">
      <div className="row g-5">
        <div className="col-lg-8">
          <div className="row">
            {allArticles?.data?.data?.data?.map((post) => {
              if (post?.attributes?.highlighted_article === true) {
                return (
                  <div className="" key={post.id}>
                    <HighlightCard {...post} />
                  </div>
                );
              }
            })}
          </div>

          <div className="row mt-5 gy-4 mb-5">
            {paginatedArticles?.data?.data?.data?.map((post) => {
              if (post.attributes.highlighted_article === false) {
                return (
                  <div className="col-lg-6" key={post.id}>
                    <ArticleCard {...post} />
                  </div>
                );
              }
            })}
          </div>

          <div className="pagination d-flex justify-content-center pt-5">
            {/* {page != 1 && (
              <button
                className="px-3 mx-2 btn btn-success text-white "
                onClick={() => {
                  setPageNo(1);
                }}
              >
                previous
              </button>
            )} */}
            {Array.from(
              Array(
                paginatedArticles?.data?.data?.meta?.pagination?.pageCount -
                  1 +
                  1
              ).keys(),
              (i) => i + 1
            ).map((x, idx) => (
              <button
                className={`px-3 mx-2 btn ${
                  page == x
                    ? "btn-success text-white"
                    : "btn-white text-success"
                }`}
                key={idx}
                onClick={() => {
                  setPageNo(x);
                }}
              >
                {x}
              </button>
            ))}
            {/* {page !=
              paginatedArticles?.data?.data?.meta?.pagination?.pageCount && (
              <button
                className="px-3 mx-2 btn btn-success text-white"
                onClick={() => {
                  setPageNo(1);
                }}
              >
                Next
              </button>
            )} */}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mb-5">
            <RecentPostCard />
          </div>

          <div className="card nav_bg mb-5">
            <div className="card-header text-center text-white">Categories</div>
            <ul className="list-group list-group-flush">
              {filteredData?.map((cat) => {
                return (
                  <div key={cat?.id}>
                    <CategoryCard {...cat} />
                  </div>
                );
              })}
            </ul>
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
    </main>
  );
}
