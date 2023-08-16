import axios from "axios";

export const getAllIndividualSolutionData = async () => {
	const data = await axios.get(
		"http://localhost:1337/api/individual-solutions?populate=*"
	);

	let response = data.data.data;

	// console.log(response);

	return response;
};

export const getAllBusinessSolutionData = async () => {
	const data = await axios.get(
		"http://localhost:1337/api/business-institution-solutions?populate=*"
	);

	let response = data.data.data;

	// console.log(response);

	return response;
};
