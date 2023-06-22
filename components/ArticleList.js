"use client";
import { useParams } from "next/navigation";
import { fetcher } from "@/lib/api";
import { articles, getAllArticles } from "@/strapiFetchFunctions/articlesFuncs";
import { useSWRConfig } from "swr";
import SearchJobForm from "./test";
import Buttons from "./Buttons";
import { getArticles } from "@/datalayer/article";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export const metadata = {
	title: "Credulen Home",
	description: "Credulen Homepage",
};

export default async function ArticleList() {
	// const [pageIndex, setPageIndex] = useState(1);
	// const { data } = getArticles();

	// const params = useParams();
	// const id = params.slug;

	const articles = await getAllArticles();

	// console.log(getAllArticles());
	return (
		<main className="w-full bg-[#f9f9f9] py-[50px]">
			{/* <div className="max-w-[1240px] mx-auto pb-6"> */}
			{/* <SearchJobForm /> */}
			{/* </div> */}
			<div className="max-w-[1240px] mx-auto">
				{/* category buttons */}
				{/* <div className="pb-6">
					<Buttons />
				</div> */}

				{/* {articleBySlug.data.map((art) => {
					return ( */}
				<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
					{articles.map((blog) => {
						return (
							<div
								className="bg-white rounded-xl overflow-hidden drop-shadow-md"
								key={blog.id}>
								<img
									src={blog.attributes.image.data.attributes.url}
									alt=""
									className="h-50 w-full object-cover"
								/>

								<div className="p-8">
									<h3 className="font-bold text-2x1 my-1">
										{blog.attributes.title}
									</h3>
									<p className="text-gray-600 mb-6">
										{blog.attributes.description}
									</p>

									{/* <Link
										href={`/article/${blog.attributes.slug}`}
										className="px-5 py-2 text-primary-light bg-primary rounded">
										Read
									</Link> */}
								</div>
								{/* </Link> */}
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}
