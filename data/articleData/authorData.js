import axios from "axios";

export const getAuthorData = async (userId) => {
	const data = await axios.get(
		`http://localhost:1337/api/articles/${userId}/?populate=*`
	);

	let response = data.data.data;

	console.log(response);

	return response;
};
