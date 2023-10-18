"use client";

// import { getAllArticles } from "@/strapiFetchFunctions/articlesFuncs";

export const metadata = {
	title: "Credulen Home",
	description: "Credulen Homepage",
};

const ArticleList = async () => {
	const articles = await getAllArticles();

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">main</div>
				<div className="col-md-4">main</div>
			</div>
		</div>
	);
};

export default ArticleList;
