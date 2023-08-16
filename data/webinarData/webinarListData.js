import axios from "axios";

export const getAllWebinarData = async () => {
	const data = await axios.get(
		"https://strapi-gtbk.onrender.com/api/webinars?populate=*"
	);

	let response = data.data.data;

	// console.log(response);

	return response;
};
