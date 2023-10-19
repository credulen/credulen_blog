"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import axios from "axios";
import IsLoading from "../../components/IsLoading";
import {
  ArticleCard,
  HighlightCard,
  RecentPostCard,
} from "../../components/Cards";
import { JoinTelegram, Subscribe } from "../../components/Connections";

const Art = () => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async ({ start = 0, limit = 4 } = {}) => {
      // const fetchData = async (start, limit) => {
      const query = qs.stringify({
        populate: {
          image: { populate: "*" },
          category: { populate: "*" },
        },

        pagination: {
          start,
          limit,
        },
      });

      const data = await axios.get(
        `https://strapi-blcj.onrender.com/api/articles?${query}`
      );

      let response = data?.data?.data;
      let metaData = data?.data?.meta?.pagination;

      //   console.log(metaData);

      //   console.log(1, data);
      //   console.log(2, response);

      if (start === 0) {
        setPosts(response);
      } else {
        setPosts((prevData) => [...prevData, ...response]);
      }
      //   setPosts(response);
      setMeta(metaData);
    };

    console.log(meta);

    fetchData();

    setLoading(false);
  }, []);

  const page = searchParams.get("start") ?? "1";
  const per_page = searchParams.get("limit") ?? "4";

  const startPag = (Number(page) - 1) * Number(per_page);
  const endPag = startPag + Number(per_page);

  const entries = posts.slice(startPag, endPag);
  //   console.log(entries);

  const hasPrevPage = () => {
    let prevSet = endPag < posts.length;
  };

  const hasNextPage = () => {
    let nextSet = startPag > 0;
  };

  const prevPage = () => {
    router.push(`/articlelist?page=${page - 1}`);
  };

  const nextPage = () => {
    router.push(`/articlelist?page=${page + 1}`);
  };

  //   console.log(
  //     3,
  //     posts?.map((single) => {
  //       console.log(single);
  //     })
  //   );

  //   const pageNumClick = (start, limit) => {
  //     router.push({
  //       pathname: router.pathname,
  //       query: { start: start, limit: limit },
  //     });
  //   };

  if (loading) {
    return <IsLoading />;
  }

  return (
    <main className="container">
      <div className="row g-5">
        <div className="col-md-8">
          <div className="row">
            {posts?.map((post) => {
              //   console.log(4, post);
              if (post?.attributes?.highlighted_article === true) {
                return (
                  <div className="" key={post.id}>
                    <HighlightCard {...post} />
                  </div>
                );
              }
            })}
          </div>

          <div className="row mt-5 gy-4">
            {posts?.map((post) => {
              //   console.log(4, post);
              if (post?.attributes?.highlighted_article === false) {
                return (
                  <div className="col-md-6" key={post.id}>
                    <ArticleCard {...post} />
                  </div>
                );
              }
            })}
          </div>

          <div className="pt-5">
            <button className="me-4 btn btn-success" onClick={prevPage}>
              Previous
            </button>
            <button className="btn btn-success" onClick={nextPage}>
              Next
            </button>
          </div>
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
    </main>
  );
};

export default Art;
