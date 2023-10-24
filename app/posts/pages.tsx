"use client";
import { useState, useEffect, useCallback } from "react";
import dotenv from "dotenv";
import { fetchAPI } from "../utils/fetch_api";

import Loader from "../components2/Loaders";
import PostLists from "../components2/PostLists";

// dotenv.config();

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };

  // meta: {
  //   pagination: {
  //     start: number;
  //     limit: number;
  //     total: number;
  //   };
  // };
}

const Profile = () => {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [Loading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);

    try {
      const token = process.env.NEXT_PUBLIC_BACKEND_API_KEY_NEW;
      const path = `/articles`;

      const urlParamsObject = {
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

      // console.log(urlParamsObject);

      const options = { headers: { Authorization: `Bearer ${token}` } };
      // console.log(options);

      const responseData = await fetchAPI(path, urlParamsObject, options);
      console.log(urlParamsObject);
      console.log(responseData);

      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[]) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMorePosts = (): void => {
    const nextPost = meta!.pagination.start + meta!.pagination.limit;

    fetchData(nextPost, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
    console.log(process.env.NEXT_PUBLIC_PAGE_LIMIT);
  };

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  if (Loading) return <Loader />;

  return (
    <div>
      <PostLists data={data}>
        {meta!.pagination.start + meta!.pagination.limit <
          meta!.pagination.total && (
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
              onClick={loadMorePosts}
            >
              Load More Posts...
            </button>
          </div>
        )}
      </PostLists>
    </div>
  );
};

export default Profile;
