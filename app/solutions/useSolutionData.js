import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import qs from "qs";

export const useSolutionData = () => {
  const queryStr = qs.stringify({
    populate: {
      image: { populate: "*" },
    },
    pagination: {
      // start,
      // limit,
    },
  });

  const getAllIndSolutionData = useQuery({
    queryKey: ["allIndSolutionData"],
    queryFn: () =>
      axios.get(
        `https://strapi-blcj.onrender.com/api/individual-solutions?populate=*`
      ),
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

  const getAllBusSolutionData = useQuery({
    queryKey: ["alllBusSolutionData"],
    queryFn: () =>
      axios.get(`https://strapi-blcj.onrender.com/api/bus-solns?populate=*`),
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
    getAllIndSolutionData,
    getAllBusSolutionData,
  };
};
