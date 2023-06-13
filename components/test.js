import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="w-full bg-primary text-gray py-8 px-2">
			<div className="max-w-[1240px] mx-auto grid grid-col-2 md:grid-cols-6 border-b-2 border-gray-400 py-8 items-center place-items-center gap-10">
				{/* <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-4 lg:gap-6 border-b-2 border-gray-400 py-8 items-center justify-items-stretch"> */}
				<div>
					<img src="./logo/5.png" alt="" />
				</div>
				<div className="justify-self-center">
					<h6 className="font-bold uppercase py-2 text-primary-light">
						Solutions
					</h6>
					<ol>
						<li className="py-1 text-primary-light">Marketing</li>
						<li className="py-1 text-primary-light">Marketing</li>
						<li className="py-1 text-primary-light">Marketing</li>
						<li className="py-1 text-primary-light">Marketing</li>
					</ol>
				</div>

				<div className="col-span-2 pt-2 md:pt-2">
					<h6 className="font-bold uppercase text-primary-light">
						Subscribe to Our Newsletter
					</h6>
					<form className="flex flex-col sm:flex-row">
						<input
							className="w-full p-2 mr-4 rounded-md mb-2"
							type="email"
							placeholder="Please enter your email"
						/>
						<button className="p-2 mb-2 bg-secondary-green text-primary-light">
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-primary-light items-center">
				<h6>Credulen</h6>
				<div className="flex justify-between sm:w-[300px] pt-4 text-2x1 gap-2">
					<FaFacebook />
					<FaInstagram />
					<FaTwitter />
				</div>
			</div>
		</div>
	);
};

export default Footer;
