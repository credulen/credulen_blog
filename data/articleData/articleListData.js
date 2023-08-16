import axios from "axios";

export const getAllArticleData = async () => {
	const data = await axios.get(
		"https://strapi-gtbk.onrender.com/api/articles?populate=*"
	);

	let response = data.data.data;

	// console.log(response);

	return response;
};
