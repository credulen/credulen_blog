import axios from "axios";

export const getAllConferenceData = async () => {
  const data = await axios.get(
    "https://strapi-blcj.onrender.com/api/conferences?populate=*"
  );

  let response = data.data.data;

  // console.log(response);

  return response;
};
