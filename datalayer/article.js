import axios from "axios";

const apiURL = process.env.API_BASE_URL;
export const getArticles = async () => {
	try {
		const res = await axios.get(`${apiURL}/categories`);

		const allArticles = res.data.data;
		return allArticles;
	} catch (error) {
		throw new Error();
	}
};
