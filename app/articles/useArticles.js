
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from "axios";
import {useState } from 'react';


import qs from "qs";


export const useArticle = ()=>{
const queryStr = qs.stringify({
  populate: {
    image: { populate: "*" },
    category: { populate: "*" },
    author_bio: { populate: "*" },
  },
  pagination: {
    // start,
    // limit,
  },
});
const [page, setPageNo] = useState(1);

    const paginatedArticles= useQuery({
        queryKey: ["article",page],
        queryFn: () => axios.get(`https://strapi-blcj.onrender.com/api/articles?${queryStr}&pagination[page]=${page}&pagination[pageSize]=6`),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        initialData: undefined,
        retry: false,
        enabled: !!page,
        refetchInterval:30 * 1000,
        onError: (error) => {
          handleError(error)
        }
    });
     const allArticles= useQuery({
        queryKey: ["allArticle"],
        queryFn: () => axios.get(`https://strapi-blcj.onrender.com/api/articles?${queryStr}`),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        initialData: undefined,
        retry: false,
        refetchInterval:30 * 1000,
        onError: (error) => {
          handleError(error)
        }
    });



  return {
    allArticles,
  paginatedArticles,
page, setPageNo
  }
}




const  arrayFromPaginatedArticles = (paginatedArticles) =>{
    if (!paginatedArticles || !paginatedArticles.data || !paginatedArticles.data.data) {
        return [];
    }

    let arrayOfArticles = [];

    for (let i = 1; i <= paginatedArticles.data.data.meta.pagination.pageCount; i++) {
        const articlesOnPage = paginatedArticles.data.data[`articles_page_${i}`];

        if (articlesOnPage) {
            arrayOfArticles = arrayOfArticles.concat(articlesOnPage);
        }
    }

    return arrayOfArticles;
}