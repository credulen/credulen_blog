import axios from "axios";

export const getAllIndividualSolutionData = async () => {
  const data = await axios.get(
    "https://strapi-blcj.onrender.com/api/individual-solutions?populate=*"
  );

  let response = data.data.data;

  // console.log(response);

  return response;
};

export const getAllBusinessSolutionData = async () => {
  const data = await axios.get(
    "https://strapi-blcj.onrender.com/api/bus-solns?populate=*"
  );

  let response = data.data.data;

  // console.log(response);

  return response;
};
