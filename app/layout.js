import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Credulen Blog",
	description: "About Blockchain Education",
};

// export default function RootLayout({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<html lang="en">
// 			{/* <body className={inter.className}> */}
// 			<body>
// 				{/* <nav>Navbar</nav> */}
// 				{children}
// 			</body>
// 		</html>
// 	);
// }

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-primary-light" suppressHydrationWarning={true}>
				<nav>
					<Navbar />
				</nav>
				{children}

				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
