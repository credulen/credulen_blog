import Link from "next/link";
import { FaTelegram } from "react-icons/fa";

export const Subscribe = () => {
	return (
		<div>
			{/* <h6 className="text-dark">Subscribe our newsletter to get update</h6> */}
			<form className="">
				<input
					className="form-control"
					type="search"
					placeholder="Subscribe"
					aria-label="Search"
				/>
				<button className="btn bg-success text-white mt-2 w-100" type="submit">
					Subscribe
				</button>
			</form>
		</div>
	);
};

export const JoinTelegram = () => {
	return (
		<Link
			href="#"
			className="btn bg-success text-white w-100"
			aria-label="Facebook">
			Join Our Telegram Group <FaTelegram />
		</Link>
	);
};
