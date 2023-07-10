import React from "react";

const Contact = () => {
	return (
		<>
			{/* desktop */}
			<form className="mx-auto w-50 p-4 bg-white border-5 shadow d-none d-md-block d-sm-none">
				<h5 className="text-center mt-1 mb-4">Have any Question? Contact Us</h5>
				<div className="mb-3">
					<label for="exampleFormControlInput1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control webevent"
						id="exampleFormControlInput1"
						placeholder="please enter your mail"
					/>
				</div>

				<div className="mb-3">
					<label for="exampleFormControlTextarea1" className="form-label">
						Message
					</label>
					<textarea
						className="form-control webevent"
						id="exampleFormControlTextarea1"
						rows="3"></textarea>
				</div>

				<div className="mb-3">
					<button className="btn btn-success">Submit</button>
				</div>
			</form>

			{/* mobile */}
			<form className="mx-auto w-75 p-4 bg-white border-5 shadow d-md-none d-sm-block">
				<h5 className="text-center mt-1 mb-4">Have any Question? Contact Us</h5>
				<div className="mb-3">
					<label for="exampleFormControlInput1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control webevent"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
					/>
				</div>

				<div className="mb-3">
					<label for="exampleFormControlTextarea1" className="form-label">
						Message
					</label>
					<textarea
						className="form-control webevent"
						id="exampleFormControlTextarea1"
						rows="3"></textarea>
				</div>

				<div className="mb-3">
					<button className="btn btn-success">Submit</button>
				</div>
			</form>
		</>
	);
};

export default Contact;
