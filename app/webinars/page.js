import { OndemandWebinarCard, UpcomingWebinarCard } from "@/components/Cards";
import React from "react";

const Webinars = () => {
	return (
		<div className="container">
			<div>
				<h1>Credulen Webinars</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
					obcaecati ipsa impedit maxime officia necessitatibus. Corrupti nostrum
					magni soluta accusamus officia ullam voluptas suscipit blanditiis
					animi consequatur in, quisquam quae.
				</p>
			</div>

			{/* upcoming webinars */}
			<div className="mt-5">
				<h2>Upcoming Webinars</h2>

				<div className="row g-4">
					<div className="col-md-6 col-sm-12">
						<UpcomingWebinarCard />
					</div>
					<div className="col-md-6 col-sm-12">{/* <UpcomingWebinars /> */}</div>
				</div>
			</div>

			{/* on demand webinars */}
			<div className="mt-5 pt-4">
				<h2>On Demand Webinars</h2>
				<p className="text-secondary">Our Past Webinars</p>

				<div className="row g-4">
					<div className="col-md-6 col-sm-12">
						<OndemandWebinarCard />
					</div>
					<div className="col-md-6 col-sm-12">
						<OndemandWebinarCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Webinars;
