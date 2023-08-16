"use client";
import { RelatedArticleCard } from "@/components/Cards";
import { JoinTelegram, Subscribe } from "@/components/Connections";
import { getAllArticleData } from "@/data/articleData/articleListData";
// import { getAuthorData } from "@/data/authorData";
import { getSingleArticleData } from "@/data/articleData/getSingleArticle";
import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

// const fetchData = async (articleId) => {
// 	let singleArticle = await axios.get(
// 		`http://localhost:1337/api/articles/${articleId}/?populate=*`
// 	);

// 	console.log(singleArticle);
// 	// return singleArticle;
// };

// fetchData();
// const SingleArticlePage = ({ params: { articleId } }) => {
// const SingleArticlePage = ({ articleId }) => {
const SingleArticlePage = ({ params }) => {
	const [singleArticleData, setSingleArticleData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [authorData, setAuthorData] = useState([]);

	// const newData = fetchData(params.articleId);

	// console.log(newData);

	// useEffect(() => {
	// 	const getSingleArticleData = async () => {
	// 		let singleArticle = await axios.get(
	// 			`http://localhost:1337/api/articles/${params.slug}/?populate=*`
	// 		);

	// 		let response = singleArticle.data.data;

	// 		// return response;
	// 		// console.log(response);
	// 		setSingleArticleData(response);
	// 		setIsLoading(false);
	// 	};

	// 	getSingleArticleData();
	// }, []);

	const getSingleArticleData = async () => {
		const data = await axios
			.get(`http://localhost:1337/api/articles/${params.slug}/?populate=*`)
			.then((res) => res.data)
			.then((article) => article.data);

		setSingleArticleData(data);
	};

	useEffect(() => {
		setIsLoading(false);
		getSingleArticleData();
	}, []);

	// console.log(singleArticleData.attributes.title);
	// console.log(singleArticleData);
	// console.log(authorData);

	// const oneArticle = singleArticleData.map((article) => {
	// 	console.log(article);
	// });

	// console.log(oneArticle);

	// useEffect(() => {
	// 	console.log(singleArticleData);
	// });

	// let title = singleArticleData.attributes.title;
	// console.log(title);
	console.log(singleArticleData);

	if (isLoading) {
		return <h1 className="text-center">Loading...</h1>;
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<div>
						<img
							// src="/assets/blockImg.jpg"
							src={`http://localhost:1337${singleArticleData?.image?.data?.attributes?.url}`}
							className="card-img-top"
							width={500}
							height={300}
							alt="Picture of the author"
							// alt={`http://localhost:1337${singleArticleData?.image?.data?.attributes?.url}`}
						/>
					</div>

					<div className="d-flex align-items-center mt-3 mb-4">
						<div>
							<img
								src="/assets/blockImg.jpg"
								className="rounded-circle me-3"
								width={40}
								height={40}
								alt="Picture of the first speaker"
							/>
						</div>

						<div>
							<p className="card-text">
								<small className="text-body-secondary">
									John Doe | JULY 15, 2023
								</small>
								{/* <small className="text-body-secondary">
									{singleArticleData?.attributes?.users_permission_user |
										singleArticleData?.attributes?.createdAt}
								</small> */}
							</p>
						</div>
					</div>

					{/* <p className="text-justify mt-4">{data.attributes.body}</p> */}

					<div className="text-center">
						<h3>{singleArticleData?.attributes?.title}</h3>
						{/* <h3>Title</h3> */}
					</div>
					<div className="text-justify mt-4">
						{/* <ReactMarkdown>{articleData.attributes.body}</ReactMarkdown> */}
						<p>
							{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
								adipisci ducimus quas earum nostrum necessitatibus, at iusto,
								tempore, nisi explicabo temporibus amet animi labore repudiandae
								asperiores magnam cum maiores perferendis sunt a! Quam saepe
								ratione, laudantium magni modi, quod asperiores voluptate
								eveniet alias accusamus facere? Doloremque pariatur vitae
								quisquam libero! Saepe iste cumque, illum eaque voluptatum,
								molestias labore officia voluptatem necessitatibus voluptates
								temporibus consequuntur. Perspiciatis doloremque aliquid
								necessitatibus a ullam officia, explicabo enim rem. Sequi, velit
								quasi qui nesciunt, voluptatum necessitatibus temporibus vitae
								modi quia odio, nihil facere in non corrupti. Tenetur quam
								laborum esse! Provident qui dolore ipsum tempora! */}
							{/* {isLoading ? singleArticleData?.body : <h1>Load</h1>} */}
							{singleArticleData?.body}
						</p>
					</div>
					{/* end */}
				</div>
				<div className="col-md-4">
					<RelatedArticleCard />

					<div>
						<JoinTelegram />
					</div>

					<div className="mt-5">
						<h6 className="text-dark">
							Subscribe our newsletter to get update
						</h6>
						<Subscribe />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleArticlePage;
