import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Subscribe from "./Subscribe";

const Footer = () => {
	return (
		<div className="footer_bg">
			<div className="container py-5">
				<div className="row border_design border-bottom pb-4">
					<div className="col-md-4">
						<Link href="/">
							<picture>
								<img
									className="w-25"
									src="./logo/5.png"
									alt="credulen logo image"
									width={100}
									height={100}
								/>
							</picture>
						</Link>
					</div>

					<div className="col-md-4 mb-sm-3">
						<h6 className="text-white">Quick Links</h6>
						<div className="mt-3">
							<Link href="#" className="text-white d-block mb-2">
								Home
							</Link>
							<Link href="#" className="text-white d-block mb-2">
								Who We Are
							</Link>
							<Link href="#" className="text-white d-block mb-2">
								Our Philosophy
							</Link>
						</div>
					</div>

					{/* third row */}
					<div className="col-md-4">
						<h6 className="text-white">
							Subscribe our newsletter to get update
						</h6>
						<Subscribe />
					</div>
				</div>

				<div className="row mt-2 d-flex justify-content-between align-items-center">
					<div className="col-md-6">
						<Link href="/">
							<picture>
								<img
									className="w-25"
									src="./logo/5.png"
									alt="credulen logo image"
									width={150}
									height={100}
								/>
							</picture>
						</Link>
					</div>
					<div className="col-md-6">
						<Link href="#" className="mx-2 text-white" aria-label="Facebook">
							<FaFacebook />
						</Link>
						<Link href="#" className="mx-2 text-white" aria-label="Instagram">
							<FaInstagram />
						</Link>
						<Link href="#" className="mx-2 text-white" aria-label="Twitter">
							<FaTwitter />
						</Link>
					</div>
					{/* <div className="flex items-center justify-between">
						<Link href="/">
							<img className="w-25" src="./logo/5.png" alt="" />
						</Link>

						<div className="flex mx-2">
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

							<a
								href="#"
								className="mx-2 text-primary-light"
								aria-label="Github">
								<FaTwitter />
							</a>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Footer;
