import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import qs from "qs";

export const useConferenceData = () => {
  const queryStr = qs.stringify({
    populate: {
      image: { populate: "*" },
    },
    pagination: {
      // start,
      // limit,
    },
  });

  const getAllConferenceData = useQuery({
    queryKey: ["allConferences"],
    queryFn: () =>
      axios.get(`https://strapi-blcj.onrender.com/api/conferences?populate=*`),
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
    getAllConferenceData,
  };
};
