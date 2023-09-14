import axios from "axios";

export const getAuthorData = async (userId) => {
  const data = await axios.get(
    `https://strapi-blcj.onrender.com/api/articles/${userId}/?populate=*`
  );

  let response = data.data.data;

  // console.log(response);

  return response;
};
