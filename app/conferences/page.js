import { ConferenceCard, PastEventsCard } from "@/components/Cards";
import React from "react";

const Conferences = () => {
	return (
		<div className="container">
			<div className="pb-5">
				<h1 className="mb-4">Events You will Love</h1>
				<div className="mb-5 pb-3">
					<ConferenceCard />
				</div>

				<div className="mb-5">
					<ConferenceCard />
				</div>

				<div className="mb-5">
					<ConferenceCard />
				</div>

				<div className="mb-5">
					<ConferenceCard />
				</div>
			</div>

			{/* past events */}
			<div className="pt-5">
				<h4 className="border-top border-bottom p-3 border-dark-subtle mb-5">
					Past Events
				</h4>

				<div className="container">
					<div className="row g-4">
						<div className="col-md-6">
							<PastEventsCard />
						</div>
						<div className="col-md-6">
							<PastEventsCard />
						</div>
						{/* <div className="col-md-4">
							<PastEventsCard />
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Conferences;
