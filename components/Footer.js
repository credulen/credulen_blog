import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Subscribe from "./Subscribe";
import logo from "../public/logo/5.png";

const Footer = () => {
	return (
		<div className="footer_bg">
			<div className="container py-5">
				<div className="row border_design border-bottom pb-4">
					{/* first column */}
					<div className="col-md-4">
						<Link href="/">
							<Image
								className="w-25"
								src={logo}
								width={100}
								height={100}
								alt="credulen logo image"
							/>
						</Link>
					</div>

					{/* second column */}
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

					{/* third column */}
					<div className="col-md-4">
						<h6 className="text-white">
							Subscribe our newsletter to get update
						</h6>
						<Subscribe />
					</div>
				</div>

				{/* bottom row */}
				<div className="container">
					<div className="row mt-2 align-items-center">
						<div className="col-md-6">
							<Link href="/">
								<Image
									className="w-25"
									src={logo}
									width={80}
									height={80}
									alt="credulen logo image"
								/>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
