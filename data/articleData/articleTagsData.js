import axios from "axios";

//
export const getAllBlockchainEduData = async () => {
  const data = await axios.get(
    "https://strapi-blcj.onrender.com/api/articles?populate=*"
  );

  let response = data.data.data;

  // console.log(response);

  return response;
};
