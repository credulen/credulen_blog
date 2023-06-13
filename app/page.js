import { fetchCategories } from "@/http";
// import { ICategory, ICollectionResponse } from "@/types";
import { AxiosResponse } from "axios";
import { GetServerSideProps, Metadata } from "next";

export const metadata = {
	title: "Credulen Home",
};

export default function Home() {
	// const { data } = fetchCategories();
	return (
		<main
			className="flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          ">
			<h1 className="text-primary">Welcome to Credulen</h1>
			{/* <h4>{data}</h4> */}
		</main>
	);
}
