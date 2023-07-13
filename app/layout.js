"use client";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/icons";
// import "bootstrap-icons/font";
import { useEffect } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

// export const metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return (
		<html lang="en">
			<Head>
				<Link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
					crossorigin="anonymous"
				/>

				<Link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></Link>
			</Head>
			<body className="body">
				<Navbar />
				<div className="mt-5 pt-4">{children}</div>

				<div className="mt-5 pt-4">
					<Footer />
				</div>
			</body>
		</html>
	);
}
