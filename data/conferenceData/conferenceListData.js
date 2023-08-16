import axios from "axios";

export const getAllConferenceData = async () => {
	const data = await axios.get(
		"http://localhost:1337/api/conferences?populate=*"
	);

	let response = data.data.data;

	// console.log(response);

	return response;
};
