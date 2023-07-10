import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg sticky-top nav_bg shadow-lg py-3">
			<div className="container-fluid container">
				<Link className="navbar-brand text-white" href="/">
					Navbar
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						{/* <li className="nav-item"> */}
						<Link
							className="nav-link active text-white me-3"
							aria-current="page"
							href="/">
							Home
						</Link>
						{/* </li> */}
						{/* <li className="nav-item">
							<a className="nav-link text-white" href="#">
								Link
							</a>
						</li> */}
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle text-white me-3"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Events
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="/webinars">
										Webinars
									</a>
								</li>

								<li>
									<a className="dropdown-item" href="/conferences">
										Conferences
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<Link href="/solutions" className="nav-link text-white me-3">
								Solutions
							</Link>
						</li>
						{/* <li className="nav-item"> */}
						<Link href="/contact" className="nav-link text-white">
							Contact Us
						</Link>
						{/* </li> */}
					</ul>
					<div className="d-flex" role="search">
						{/* <button
							className="btn text-white btn_outline_style me-3"
							type="submit">
							Login
						</button> */}
						<Link
							href="/login"
							className="btn text-white btn_outline_style me-3"
							type="submit">
							Login
						</Link>
						{/* <button
							className="btn btn_bg_style fw-medium bg-light"
							type="submit">
							Sign Up
						</button> */}
						<Link
							href="/signup"
							className="btn btn_bg_style fw-medium bg-light"
							type="submit">
							Sign Up
						</Link>
					</div>

					{/* <form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form> */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
