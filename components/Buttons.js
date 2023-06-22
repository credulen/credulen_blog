import { useParams } from "next/navigation";
import { fetcher } from "@/lib/api";
import Link from "next/link";

export const FilterButton = () => {
	return (
		<button className="px-5 py-2 text-primary border-2 border-primary w-36">
			Sign Up
		</button>
	);
};

export const ReadMoreButton = async () => {
	const params = useParams();
	const id = params.slug;
	const articleBySlug = await getArticleBody(id);
	return (
		<>
			{articleBySlug.data.map((art) => {
				if (art.id === art.id) {
					return null;
				}
				return (
					<Link
						href={`/article/${art.attributes.slug}`}
						className="px-5 py-2 text-primary-light bg-primary rounded"
						key={art.id}>
						Read
					</Link>
				);
			})}
		</>
	);
};

export async function getArticleBody(slug) {
	// const { slug } = params;
	// params.id
	const API_BASE_URL = "http://127.0.0.1:1337/api";
	const articleResponse = await fetcher(
		// `${process.env.API_BASE_URL}/articles?fields[0]=title&fields[2]=${slug}&populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url`,
		`${API_BASE_URL}/articles?fields[0]=title&fields[2]=slug&populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url`,
		{ cache: "no-store" }
	);
	// localhost:1337/api/articles?populate=*
	try {
		// const article = await articleResponse.j
		return articleResponse;
	} catch (err) {
		throw new Error();
	}
}
