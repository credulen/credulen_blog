import qs from "qs";
import { fetcher } from "@/lib/api";
import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL;

export async function getAllArticles() {
	const articleResponse = await fetcher(
		// `${process.env.API_BASE_URL}/articles?populate=*`,
		// `${process.env.API_BASE_URL}/articles?populate=*&pagination[page]=1&pagination[pageSize]=2`,
		`${API_BASE_URL}/articles?populate=*&pagination[page]=1&pagination[pageSize]=10`,

		{ next: { revalidate: 10 } }
	);
	// localhost:1337/api/articles?populate=*
	try {
		return articleResponse.data;
	} catch (err) {
		throw new Error();
	}
}

// export async function getAllArticles() {
// 	const articleResponse = axios.get(
// 		`http://127.0.0.1:1337/api/articles?populate=*`
// 	);
// 	// localhost:1337/api/articles?populate=*
// 	try {
// 		return articleResponse.data;
// 	} catch (err) {
// 		throw new Error();
// 	}
// }

// export const articles = await getAllArticles();

export async function getArticleSlugs() {}

export async function getArticleBySlug() {}

export async function getArticleByCategoryId() {}

// export async function getArticleBody(slug) {
// 	// const { slug } = params;
// 	// params.id
// 	const API_BASE_URL = process.env.API_BASE_URL;
// 	const articleResponse = await fetcher(
// 		// `${process.env.API_BASE_URL}/articles?fields[0]=title&fields[2]=${slug}&populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url`,
// 		// `${API_BASE_URL}/articles?fields[0]=title&fields[2]=slug&populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url`,
// 		`${API_BASE_URL}/articles`,
// 		{ cache: "no-store" }
// 	);
// 	// localhost:1337/api/articles?populate=*
// 	try {
// 		// const article = await articleResponse.j
// 		return articleResponse;
// 	} catch (err) {
// 		throw new Error();
// 	}
// }
