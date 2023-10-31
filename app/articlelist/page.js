"use client";
import { useState, useEffect, useCallback } from "react";
import IsLoading from "../../components/IsLoading";
import PostList from "./PostLists";
import axios from "axios";
import PaginationLogic from "./PostLists";

const Articless = () => {
  const [meta, setMeta] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start, limit) => {
    setLoading(true);

    try {
      const query = {
        sort: { createdAt: "desc" },
        populate: {
          // image: { fields: ["url"] },
          image: { populate: "*" },
          category: { populate: "*" },
          users_permissions_user: { populate: "*" },
          // authorsBio: {
          //   populate: "*",
          // },
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };

      const data = await axios.get(
        `https://strapi-blcj.onrender.com/api/articles?${query}`
      );

      let responseData = data.data.data;
      let metaData = data.data.meta;
      console.log(metaData);

      if (start === 0) {
        setData(responseData);
      } else {
        setData((prevData) => [...prevData, ...responseData]);
      }

      setMeta(metaData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const pagination = meta?.pagination;

  //   const loadPrevPosts = () => {
  //     const nextPost = meta?.pagination.start + meta?.pagination.limit;

  //     fetchData(nextPost, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  //     // console.log(process.env.NEXT_PUBLIC_PAGE_LIMIT);
  //   };

  const loadPrevPosts = () => {
    const prevPost = meta?.pagination.start - 1;

    fetchData(prevPost, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
    // console.log(process.env.NEXT_PUBLIC_PAGE_LIMIT);
  };

  const loadNewPosts = () => {
    const nextPost = meta?.pagination.start + 1;

    fetchData(nextPost, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
    // console.log(process.env.NEXT_PUBLIC_PAGE_LIMIT);
  };

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  if (isLoading) return <IsLoading />;

  return (
    <div>
      <PostList data={data}>
        {/* {meta?.pagination.start + meta?.pagination.limit <
                meta?.pagination.total && (
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
                    onClick={loadMorePosts}
                  >
                    Load More Posts...
                  </button>
                </div>
              )} */}

        {/* {meta?.pagination.start + meta?.pagination.limit <
          meta?.pagination.total && ( */}
        <div className="flex justify-center">
          <PaginationLogic
            pagination={{ ...pagination, count: +meta.limit }}
            onPageChange={(page) => handleChangeQueryParams({ page })}
            currentPage={meta?.page}
            onLimitChange={(limit) => handleChangeQueryParams({ limit })}
          />
        </div>
        {/* )} */}
      </PostList>
    </div>
  );
};

export default Articless;
