import { fetchCategories } from "@/http";
// import { ICategory, ICollectionResponse } from "@/types";
import { AxiosResponse } from "axios";
import { GetServerSideProps, Metadata } from "next";

export const metadata = {
	title: "Credulen Home",
};

export default function Home() {
	// const { data } = fetchCategories();

	const blogs = [
		{
			id: 1,
			title: "blog 1",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat eius praesentium sit magnam eaque commodi enim dolores eligendi illo, eum possimus sint deleniti reiciendis!",
			coverImg: "./assets/blockImg.jpg",
		},
		{
			id: 2,
			title: "blog 2",
			desc: "Incidunt earum necessitatibus eaque, optio excepturi adipisci! Sint aut eius nisi doloribus, sed accusamus illum officiis unde quasi omnis commodi, delectus atque nemo nihil soluta perspiciatis suscipit praesentium quae.",
			coverImg: "./assets/blockImg.jpg",
		},
		{
			id: 3,
			title: "blog 3",
			desc: "Voluptatibus recusandae quae placeat quasi cupiditate laborum molestias! Alias nihil, architecto rem porro suscipit expedita maiores odio deleniti assumenda unde ad perferendis quia maxime pariatur officiis quibusdam. Fugit repudiandae sint, vel ipsum dolore.",
			coverImg: "./assets/blockImg.jpg",
		},
	];
	return (
		<main className="w-full bg-[#f9f9f9] py-[50px]">
			<div className="max-w-[1240px] mx-auto">
				<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
					{blogs.map((blog) => {
						return (
							<div
								className="bg-white rounded-xl overflow-hidden drop-shadow-md"
								key={blog.id}>
								<img
									src={blog.coverImg}
									alt=""
									className="h-50 w-full object-cover"
								/>

								<div className="p-8">
									<h3 className="font-bold text-2x1 my-1">{blog.title}</h3>
									<p className="text-gray-600">{blog.desc}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}
