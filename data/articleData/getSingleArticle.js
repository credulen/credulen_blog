import axios from "axios";

export const getSingleArticleData = async (slug) => {
	// const data = await axios.get(
	// 	// `http://localhost:1337/api/articles/?filters\[slug\][$eq]=${slug}/?populate=*`
	// 	// `http://localhost:1337/api/articles/?filters\[slug\][$eq]=${slug}/?populate=*`
	// 	// `http://localhost:1337/api/articles?fields[0]=title&fields[2]=slug&populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url`
	// 	`http://localhost:1337/api/articles/${articleId}/?populate=*`
	// );

	let data = await axios.get(
		`http://localhost:1337/api/articles/${slug}/?populate=*`
	);

	let response = data.data.data;

	// console.log(response);

	return response;
};

("localhost:1337/api/articles/1/?populate=*");
