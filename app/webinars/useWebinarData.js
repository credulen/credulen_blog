import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import qs from "qs";

export const useWebinarData = () => {
  const queryStr = qs.stringify({
    populate: {
      image: { populate: "*" },
    },
    pagination: {
      // start,
      // limit,
    },
  });

  const getAllWebinarData = useQuery({
    queryKey: ["getAllWebinarData"],
    queryFn: () =>
      //   axios.get(`https://strapi-blcj.onrender.com/api/webinars?${queryStr}`),
      axios.get(`https://strapi-blcj.onrender.com/api/webinars?populate=*`),
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

  return {
    getAllWebinarData,
  };
};
