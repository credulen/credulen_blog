import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-primary dark:bg-gray-900">
			<div className="container px-6 py-12 mx-auto">
				{/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4"> */}
				<div className="grid lg:grid-flow-col auto-cols-fr border-b-2 border-gray-400 pb-10">
					{/* <div className="sm:col-span-1"> */}
					<div className="">
						{/* <h1 className="text-xl font-semibold tracking-tight xl:text-2xl text-primary-light">
							Credulen
						</h1> */}

						<Link href="/">
							<img className="w-auto h-20" src="./logo/5.png" alt="" />
						</Link>
					</div>

					<div className="lg:mt-0 md: mt-5 sm:mb-1">
						<p className="font-semibold text-primary-light">Quick Link</p>

						<div className="flex flex-col items-start mt-4 space-y-2">
							<a href="#" className="text-primary-light">
								Home
							</a>
							<a href="#" className="text-primary-light">
								Who We Are
							</a>
							<a href="#" className="text-primary-light">
								Our Philosophy
							</a>
						</div>
					</div>

					<div>
						<div class="">
							{/* <h6 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white"> */}
							<h6 class="max-w-lg font-semibold text-primary-light lg:mt-0 md: mt-10 sm:mt-4">
								Subscribe our newsletter to get update
							</h6>

							<div class="flex flex-col mx-auto mt-4 space-y-3 md:space-y-0 md:flex-col">
								{/* <input
									id="email"
									type="text"
									class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
									placeholder="Email Address"
								/> */}
								<input
									className="w-full p-2 mr-4 rounded-md mb-2 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
									type="email"
									placeholder="Please enter your email"
								/>

								{/* <button class="px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
									Subscribe
								</button> */}
								<button className="p-2 mb-2 bg-primary-dark text-primary-light focus:outline-none rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* <hr className="border-gray-200 md:my-8 dark:border-gray-700" /> */}

				<div className="flex items-center justify-between">
					<Link href="/">
						<img className="w-auto h-20" src="./logo/5.png" alt="" />
					</Link>

					<div className="flex -mx-2">
						<a
							href="#"
							className="mx-2 text-primary-light"
							aria-label="Facebook">
							<FaFacebook />
						</a>

						<a
							href="#"
							className="mx-2 text-primary-light"
							aria-label="Facebook">
							<FaInstagram />
						</a>

						<a href="#" className="mx-2 text-primary-light" aria-label="Github">
							<FaTwitter />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
