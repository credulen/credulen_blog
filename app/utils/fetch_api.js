import qs from "qs";
import { getStrapiURL } from "./api_helper";
import axios from "axios";

export const fetchAPI = async (path, urlParamsObject = {}, options = {}) => {
  try {
    // merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // build request url
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // trigger API call using fetch
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;

    // using axios
    // const response = await axios(requestUrl);
    // const data = await response.data.data;
    // return data;
  } catch (err) {
    // console.error(err);
    // throw new Error(`Please check your server and set all required tokens`);
    throw new Error(`Error: ${err}`);
  }
};
