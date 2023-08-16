// // import { ReadArticlePage } from "@/components/Pages";
// import React from "react";

// const ArticlePage = () => {
// 	return <div>{/* <ReadArticlePage /> */}</div>;
// };

// export default ArticlePage;

"use client";
import { RelatedArticleCard } from "@/components/Cards";
import { JoinTelegram, Subscribe } from "@/components/Connections";
// import { getAuthorData } from "@/data/authorData";
import { getSingleArticleData } from "@/data/articleData/getSingleArticle";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const ArticlePage = ({ params: { articleId } }) => {
	const [articleData, setArticleData] = useState([]);
	const [userData, setUserData] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const [articles, users] = await Promise.all([
	// 			getSingleArticleData(articleId),
	// 			getAuthorData(),
	// 		]);

	// 		console.log(articles);
	// 		console.log(users);
	// 	};

	// 	fetchData();
	// }, []);

	useEffect(() => {
		// const fetchArticleData = async () => {
		// 	const articles = await getSingleArticleData(articleId);
		// 	console.log(articles);
		// 	// console.log(articles.attributes.image);
		// 	// console.log(articles.attributes.image.data.attributes.url);
		// 	// `http://localhost:1337${props.attributes.image.data.attributes.url}`;
		// 	setArticleData(articles);
		// };
		// const fetchUserData = async () => {
		// 	const user = await getAuthorData();
		// 	console.log(user);
		// 	// console.log(articles.attributes.image);
		// 	// console.log(articles.attributes.image.data.attributes.url);
		// 	// `http://localhost:1337${props.attributes.image.data.attributes.url}`;
		// 	setUserData(user);
		// };
		// fetchArticleData();
		// fetchUserData();
	});

	// 	const fetchUserData = async () => {
	// 		const users = await getAuthorData(fetchUserData);
	// 		console.log(users);
	// 		// console.log(articles.attributes.image);
	// 		// console.log(articles.attributes.image.data.attributes.url);
	// 		// `http://localhost:1337${props.attributes.image.data.attributes.url}`;
	// 		setData(users);
	// 	};

	// fetchArticleData();
	// fetchUserData();
	// }, []);

	// console.log(articleData.attributes);
	// console.log(articleData.attributes.image.data.attributes.url);
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<div>
						<img
							// src={`http://localhost:1337${articleData.attributes.image.data.attributes.url}`}
							className="card-img-top"
							width={500}
							height={300}
							alt="Picture of the author"
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
									{/* John Doe | JULY 15, 2023 John Doe |{" "} */}
									{/* {format(new Date(articleData.attributes.createdAt), "PP")} */}
								</small>
							</p>
						</div>
					</div>

					{/* <p className="text-justify mt-4">{data.attributes.body}</p> */}

					<div className="text-justify mt-4">
						{/* <ReactMarkdown>{articleData.attributes.body}</ReactMarkdown> */}
					</div>
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

export default ArticlePage;
