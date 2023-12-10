import axios from "axios";
import qs from "qs";

export const queryStr = qs.stringify({
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

export const getAllArticleData = async () => {
  const axios = (await import("axios")).default;
  const data = await axios.get(
    `https://strapi-blcj.onrender.com/api/articles?${queryStr}`
    // `http://localhost:1337/api/articles?${queryStr}`
  );

  // console.log(data);

  let response = data.data.data;

  // console.log(response);

  return response;
};
