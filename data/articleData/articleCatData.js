import axios from "axios";

// blockchain trends
export const getBlockchainTrendsCatData = async () => {
  const data = await axios.get(
    `https://strapi-blcj.onrender.com/api/articles?filters[category][slug]=blockchain-trends&populate=*`
  );

  let response = data.data.data;

  return response;
};

// blockchain education;
export const getBlockchainEduCatData = async () => {
  const data = await axios.get(
    `https://strapi-blcj.onrender.com/api/articles?filters[category][slug]=blockchain-education&populate=*`
  );

  let response = data.data.data;

  return response;
};

// artificial intelligence;
export const getArtificialIntelligenceCatData = async () => {
  const data = await axios.get(
    `https://strapi-blcj.onrender.com/api/articles?filters[category][slug]=artificial-intelligence&populate=*`
  );

  let response = data.data.data;

  return response;
};

// big data;
export const getBigDataCatData = async () => {
  const data = await axios.get(
    `https://strapi-blcj.onrender.com/api/articles?filters[category][slug]=big-data&populate=*`
  );

  let response = data.data.data;

  return response;
};

// decentralized finance
export const getDecentralizedFinCatData = async () => {
  const data = await axios.get(
    `https://strapi-blcj.onrender.com/api/articles?filters[category][slug]=decentralized-finance&populate=*`
  );

  let response = data.data.data;

  return response;
};

// web3
export const getWebCatData = async () => {
  const data = await axios.get(
    `https://strapi-blcj.onrender.com/api/articles?filters[category][slug]=web3&populate=*`
  );

  let response = data.data.data;

  return response;
};
