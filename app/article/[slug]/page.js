"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/api";

const ArticleContent = async () => {
	// const singleArticle = await getArticleBody();
	// console.log(singleArticle);

	// const params = useParams();
	// const id = params.slug;
	// const articleBySlug = await getArticleBody(id);

	// // console.log(articleBySlug);
	// // console.log(articleBySlug.data[0].attributes.slug);

	// const singleSlug = articleBySlug.data.map((art) => {
	// 	console.log(art.attributes.slug);
	// });

	// console.log(singleSlug);

	const blogs = {
		id: 1,
		title: "blog 1",
		desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat eius praesentium sit magnam eaque commodi enim dolores eligendi illo, eum possimus sint deleniti reiciendis!",
		coverImg: "./assets/blockImg.jpg",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse quisquam soluta vel blanditiis tempore, porro aperiam nobis? Aliquid deleniti exercitationem corrupti ad nesciunt, voluptatibus odio porro hic delectus optio eos illo, minima mollitia repellat facilis cumque debitis perferendis molestiae autem saepe recusandae sit! Id minus labore obcaecati eveniet doloremque veniam maiores ipsum ratione porro. Quisquam veniam eligendi illo iste aliquid exercitationem quibusdam minus. Enim placeat laboriosam odio corporis aut beatae ab expedita ipsa iste ullam natus quibusdam qui facere laudantium inventore, ipsum quos itaque tempora? Amet unde maxime, deserunt error dicta, porro reprehenderit in laboriosam rem eum consequatur, corrupti sit earum ab numquam quis recusandae fugiat? A, omnis. Laborum magnam quasi, tenetur architecto nobis nulla a amet veritatis officiis ipsam eligendi! Eum assumenda dolore commodi totam quam, ut eius veritatis nobis sequi, facere quia, cupiditate odit vel excepturi laudantium. Temporibus quaerat commodi minus accusamus, deleniti voluptates officiis nemo maxime voluptas odio vitae eum dolor non natus mollitia sit necessitatibus eius nostrum numquam eveniet doloremque totam quo ipsa qui. Provident, nam facere dolor necessitatibus nesciunt aliquam dignissimos accusantium excepturi iusto quia assumenda earum, culpa inventore est reprehenderit. Magni eaque tempora maxime laborum beatae nisi natus provident. Corrupti at dolorum officia!",

		authorName: "John Doe",
		authorImg: "./assets/me.jpg",
		authorDesc: "Web Developer",
	};

	return (
		<div className="w-full pb-10 bg-white-500">
			<div className="max-w-[1240px] mx-auto">
				{/* <div className="px-40 sm:pt-20 md:mt-0 text-black justify-items-center">
					<div className="col-span-3 gap-x-10 gap-y-8">
						<img
							src={blogs.coverImg}
							className="h-56 w-full object-cover"
							alt=""
						/>
						<h1 className="font-bold text-2xl my-1 pt-5">{blogs.title}</h1>
						<div className="pt-5">
							<p>{blogs.content}</p>
						</div>
					</div>
				</div> */}

				<div
					className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
					<div className="col-span-2 gap-x-8 gap-y-8">
						<img
							src={blogs.coverImg}
							className="h-56 w-full object-cover"
							alt=""
						/>
						<h1 className="font-bold text-2xl my-1 pt-5">{blogs.title}</h1>
						<div className="pt-5">
							<p>{blogs.content}</p>
						</div>
					</div>

					<div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
						<div>
							<img
								src={blogs.authorImg}
								className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
								alt=""
							/>
							<h2 className="font-bold text-2xl text-center text-gray-900 pt-3">
								{blogs.authorName}
							</h2>

							<p className="text-center text-gray-900 font-medium">
								{blogs.authorDesc}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleContent;

// export async function getArticleBody(slug) {
// 	// const { slug } = params;
// 	// params.id
// 	const articleResponse = await fetcher(
// 		// `${process.env.API_BASE_URL}/articles?fields[0]=title&fields[2]=${slug}&populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url`,
// 		`${process.env.API_BASE_URL}/articles?fields[0]=title&fields[2]=slug&populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url`,
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
