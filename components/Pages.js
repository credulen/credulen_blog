import React from "react";
import { UpcomingWebinarSpeakers } from "./Cards";

export const WebinarInfoPage = () => {
	return (
		<div>
			<h1>
				Joining the Train of Learners in the Age of Technology: Choosing the
				Right Kind of Materials to Digest
			</h1>

			<div className="mt-4 pb-5">
				<small className="me-4">Oregun, Lagos</small>
				<small className="">JULY 15, 2023 | 5:00pm</small>
			</div>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sed
				excepturi aperiam explicabo odio officia debitis harum ad quae modi quos
				est ipsum ratione, perspiciatis voluptas! Eum natus, enim amet aut cum
				esse. Nostrum beatae quae officiis amet laudantium quidem aperiam, nihil
				placeat molestiae autem doloribus dolore? At, hic officia.
			</p>

			{/* speakers */}
			<div className="pt-5 mt-5">
				<h6 className="pb-3">Esteemed Speakers</h6>
				<div className="row">
					<div className="col-md-3">
						<UpcomingWebinarSpeakers />
					</div>
					<div className="col-md-3">
						<UpcomingWebinarSpeakers />
					</div>
					<div className="col-md-3">
						<UpcomingWebinarSpeakers />
					</div>
					<div className="col-md-3">
						<UpcomingWebinarSpeakers />
					</div>
				</div>
			</div>

			<div className="pt-5 mt-5">
				<h6 className="text-center pb-4">
					Please Fill the Form Below to Register for the Webinar
				</h6>

				<form className="w-75 mx-auto">
					<div className="mb-4">
						<label for="fullname" className="form-label">
							Full Name
						</label>
						<input
							type="text"
							className="form-control webevent"
							id="fullname"
						/>
					</div>

					<div className="mb-4">
						<label for="exampleInputEmail1" className="form-label">
							Email address
						</label>
						<input
							type="email"
							className="form-control webevent"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
						<div id="emailHelp" className="form-text">
							We'll never share your email with anyone else.
						</div>
					</div>

					<div className="mb-4">
						<label for="company" className="form-label">
							Company
						</label>
						<input type="text" className="form-control webevent" id="company" />
					</div>

					<div className="mb-4">
						<label for="jobtitle" className="form-label">
							Job Title
						</label>
						<input
							type="text"
							className="form-control webevent"
							id="jobtitle"
						/>
					</div>

					<div className="mb-4">
						<label for="country" className="form-label">
							Country
						</label>
						<input type="text" className="form-control webevent" id="country" />
					</div>

					<div className="mb-4 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" for="exampleCheck1">
							Check me out
						</label>
					</div>
					<button type="submit" className="btn btn-success">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
