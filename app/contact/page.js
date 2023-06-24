import React from "react";

const Contact = () => {
	return (
		<div className="mx-auto w-50 border border-secondary-subtle p-4">
			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label">
					Email address
				</label>
				<input
					type="email"
					className="form-control bg-light"
					id="exampleFormControlInput1"
					placeholder="name@example.com"
				/>
			</div>

			<div className="mb-3">
				<label for="exampleFormControlTextarea1" className="form-label">
					Message
				</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="3"></textarea>
			</div>
		</div>
	);
};

export default Contact;
