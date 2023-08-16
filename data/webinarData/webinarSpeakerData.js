import axios from "axios";

export const getAllWebinarSpeakersData = async () => {
	const data = await axios.get(
		"https://strapi-gtbk.onrender.com/api/webinar-speakers?populate=*"
	);

	let response = data.data.data;

	// console.log(response);

	return response;
};
