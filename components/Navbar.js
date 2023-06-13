"use client";
import Link from "next/link";
// import React from "react";
import { useState } from "react";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => setToggle(!toggle);

	return (
		<div className="w-full h-[80px] z-10 bg-primary fixed drop-shadow-lg relative">
			<div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
				<div className="flex items-center">
					{/* <img
						src="/icons/menu_icons.svg"
						alt=""
						className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]"
					/> */}
					<h1 className="text-primary-light sm:ml-10 ss:ml-10 md:ml-3 w-full h-[25px]">
						credulen
					</h1>
				</div>

				<div className="flex items-center">
					<ul className="hidden md:flex">
						<li className="text-primary-light">Home</li>
						<li className="text-primary-light">Events</li>
						<li className="text-primary-light">Solutions</li>
						<li className="text-primary-light">Contact Us</li>
					</ul>
				</div>

				<div className="hidden md:flex sm:mr-10 md:mr-10">
					<button className="border-none bg-transparent text-primary-light mr-4">
						Login
					</button>
					{/* <button className="px-5 py-1 text-primary bg-primary-light hover:bg-primary hover:text-primary-light"> */}
					<button className="px-5 py-2 text-primary bg-primary-light">
						Sign Up
					</button>
				</div>

				<div className="md:hidden" onClick={handleClick}>
					<img
						src={
							!toggle
								? "/icons/menu_open_icon.svg"
								: "/icons/menu_close_icon.svg"
						}
						alt="menu"
						className="w-[28px] h-[28px] object-contain mr-10"
					/>
				</div>
			</div>

			<ul
				className={
					toggle ? "absolute bg-primary-light w-full px-8 md:hidden" : "hidden"
				}>
				<li>Home</li>
				<li>Events</li>
				<li>Solutions</li>
				<li>Contact Us</li>

				<div className="flex flex-col my-4">
					<button className="border-primary bg-transparent mb-4 py-3 px-8">
						Login
					</button>
					<button className="px-5 py-2 text-primary-light bg-primary">
						Sign Up
					</button>
				</div>
			</ul>
		</div>
	);
};

export default Navbar;
