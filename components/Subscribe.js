import React from "react";

const Subscribe = () => {
	return (
		<div>
			{/* <h6 className="text-dark">Subscribe our newsletter to get update</h6> */}
			<form className="mt-3">
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

export default Subscribe;
