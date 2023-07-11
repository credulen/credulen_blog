import Image from "next/image";
import Link from "next/link";

export const HighlightCard = () => {
	return (
		<div className="card mb-3">
			<Image
				src="/assets/blockImg.jpg"
				className="card-img-top"
				width={200}
				height={400}
				alt="Picture of the author"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text mb-2">
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</p>
				<p className="card-text">
					<small className="text-body-secondary">Last updated 3 mins ago</small>
				</p>

				<Link href="/article" className="btn btn-success mt-3">
					Read More
				</Link>
			</div>
		</div>
	);
};

export const ArticleCard = () => {
	return (
		<div className="card mt-3">
			<Image
				src="/assets/blockImg.jpg"
				className="card-img-top"
				width={200}
				height={250}
				alt="Picture of the author"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the cards content.
				</p>
				<Link href="/article" className="btn btn-success">
					Read More
				</Link>
			</div>
		</div>
	);
};

export const RecentPostCard = () => {
	return (
		<div className="card">
			<div className="card-header text-center">Recent Posts</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item text-center">
					<Link href="/article" className="text-success">
						Understanding Blockchain
					</Link>
				</li>
				<li className="list-group-item text-center">
					<Link href="/article" className="text-success">
						Doing More with AI and Blockchain
					</Link>
				</li>
				<li className="list-group-item text-center">
					<Link href="/article" className="text-success">
						How to Hold a Blockchain Seminar
					</Link>
				</li>
				<li className="list-group-item text-center">
					<Link href="/article" className="text-success">
						Tips for Success in Business
					</Link>
				</li>
				<li className="list-group-item text-center text-success">
					Journey through Wealth Creation
				</li>
				<li className="list-group-item text-center text-success">
					Changing the Course of History
				</li>
			</ul>
		</div>
	);
};

export const UpcomingWebinarCard = () => {
	return (
		<div className="card mt-4  border-0 p-1">
			<div className="card-body webevent p-4">
				<h5 className="card-title">
					Joining the Train of Learners in the Age of Technology: Choosing the
					Right Kind of Materials to Digest
				</h5>
				<p className="card-text">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ducimus
					ab iste ipsam quaerat totam enim dolores harum culpa a? Natus possimus
					incidunt numquam quos ullam dolorum recusandae aperiam labore at
					veniam. Ea dolorum dignissimos ex architecto? Laborum, illo omnis!
				</p>
			</div>
			<ul className="list-group list-group-flush webevent p-2">
				<li className="list-group-item speakerwebevent">
					<Link
						className="text-success"
						data-bs-toggle="collapse"
						href="#collapseExample"
						role="button"
						aria-expanded="false"
						aria-controls="collapseExample">
						Click Here to See Our Speakers
					</Link>

					<div className="collapse mt-3" id="collapseExample">
						<UpcomingWebinarSpeakers />
						<UpcomingWebinarSpeakers />
						<UpcomingWebinarSpeakers />
					</div>
				</li>
			</ul>
			<div className="card-body webevent p-3">
				<Link
					href="/webinars/regwebinar"
					className="card-link text-success ps-2">
					Register
				</Link>
			</div>
		</div>
	);
};

export const UpcomingWebinarSpeakers = () => {
	return (
		<div className="d-flex align-items-center mb-4">
			<Image
				src="/assets/blockImg.jpg"
				className="rounded-circle me-3"
				width={50}
				height={50}
				alt="Picture of the first speaker"
			/>

			<div>
				<p className="mb-0">Name</p>
				<small className="text-body-secondary">Founder, Credulen</small>
			</div>
		</div>
	);
};

export const OndemandWebinarCard = () => {
	return (
		<div className="card border-0 p-1 mt-3">
			<div className="card-body webevent p-4">
				<p className="card-text">
					<small className="text-body-secondary">JULY 15, 2023 | 5:00pm</small>
				</p>
				<h5 className="card-title">
					Joining the Train of Learners in the Age of Technology: Choosing the
					Right Kind of Materials to Digest
				</h5>

				<p className="card-text mt-3">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
					veniam, quaerat dolores saepe ipsum reprehenderit sint mollitia beatae
					facilis natus cumque aliquam explicabo earum magni, ipsam laboriosam
					accusamus at voluptatem sit a, totam id nulla! Maiores reiciendis
					itaque sed commodi?
				</p>
				<Link
					href="/webinars/regwebinar"
					className="btn btn-success card-link mt-4">
					CHECK WEBINAR
				</Link>
			</div>
		</div>
	);
};

export const ConferenceCard = () => {
	return (
		<div className="">
			<div className="row align-items-center g-4">
				<div className="col-md-6">
					<Image
						src="/assets/blockImg.jpg"
						className="card-img-top"
						width={200}
						height={250}
						alt="Picture of the author"
					/>
				</div>
				<div className="col-md-6">
					<h2>Blockchain Hackathon</h2>

					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
						tenetur! Dolores, iste suscipit. Ab, soluta voluptatibus. Aliquam,
						porro neque ut ullam libero aperiam iure dignissimos laudantium
						quos, magnam enim placeat est, numquam aut ipsam. Unde nemo dicta
						dolores laudantium officiis.
					</p>

					<Link
						href="conferences/conferenceinfo"
						className="btn btn-success mt-2">
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export const PastEventsCard = () => {
	return (
		<div className="card">
			<Image
				src="/assets/blockImg.jpg"
				className="card-img-top"
				width={200}
				height={250}
				alt="Picture of the author"
			/>
			<div className="card-body webevent">
				<h5 className="card-title">Card title</h5>
				<small className="d-block pb-1 pt-1">Oregun, Lagos</small>
				<small className="d-block pb-3">JULY 15, 2023 | 5:00pm</small>

				<p className="card-text pb-3">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<Link href="conferences/conferenceinfo" className="btn btn-success">
					Learn More
				</Link>
			</div>
		</div>
	);
};

export const RelatedArticleCard = () => {
	return (
		<div className="card mb-5">
			<div className="card-header text-center">Related Articles</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item text-center">
					<Link href="/article" className="text-success">
						Understanding Blockchain
					</Link>
				</li>
				<li className="list-group-item text-center">
					<Link href="/article" className="text-success">
						Doing More with AI and Blockchain
					</Link>
				</li>
				<li className="list-group-item text-center">
					<Link href="/article" className="text-success">
						How to Hold a Blockchain Seminar
					</Link>
				</li>
				<li className="list-group-item text-center">
					<Link href="/article" className="text-success">
						Tips for Success in Business
					</Link>
				</li>
				<li className="list-group-item text-center text-success">
					Journey through Wealth Creation
				</li>
				<li className="list-group-item text-center text-success">
					Changing the Course of History
				</li>
			</ul>
		</div>
	);
};

export const IndividualSolutionsCard = () => {
	return (
		<div className="card">
			<Image
				src="/assets/blockImg.jpg"
				className="card-img-top"
				width={200}
				height={250}
				alt="Picture of the author"
			/>
			<div className="card-body webevent">
				<h5 className="card-title text-center">Blockchain Fundamental</h5>
				{/* <small className="d-block pb-1 pt-1">Oregun, Lagos</small>
				<small className="d-block pb-3">JULY 15, 2023 | 5:00pm</small> */}

				<p className="card-text pb-3">
					Blockchain Fundamentals Course: Dive into the world of blockchain with
					our beginner-friendly course
				</p>
				<Link
					href="/solutions/individualsolnform"
					className="btn btn-warning text-white">
					Learn More
				</Link>
			</div>
		</div>
	);
};

export const BusinessSolutionsCard = () => {
	return (
		<div className="card">
			<Image
				src="/assets/blockImg.jpg"
				className="card-img-top"
				width={200}
				height={250}
				alt="Picture of the author"
			/>
			<div className="card-body webevent">
				<h5 className="card-title text-center">Blockchain Fundamental</h5>
				{/* <small className="d-block pb-1 pt-1">Oregun, Lagos</small>
				<small className="d-block pb-3">JULY 15, 2023 | 5:00pm</small> */}

				<p className="card-text pb-3">
					Blockchain Fundamentals Course: Dive into the world of blockchain with
					our beginner-friendly course
				</p>
				<Link
					href="/solutions/businesssolnform"
					className="btn btn-warning text-white">
					Learn More
				</Link>
			</div>
		</div>
	);
};

export const ConferenceTicketCard = () => {
	return (
		<div className="border border-success">
			<div className="p-3">
				<h5>General Admission Pass</h5>
				<p>$100</p>

				<p>Register now to save</p>

				<button className="btn btn-outline-success w-100">Buy Ticket</button>

				<div>
					<TicketCardBenefit1 />
					<TicketCardBenefit1 />
					<TicketCardBenefit2 />
				</div>
			</div>
		</div>
	);
};

const TicketCardBenefit1 = () => {
	return (
		<div className="border__bottom__color d-flex align-items-stretch mt-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				className="bi bi-check-circle-fill me-3 icon__color"
				viewBox="0 0 16 16">
				<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
			</svg>

			<p>three-day full event pass</p>
		</div>
	);
};

const TicketCardBenefit2 = () => {
	return (
		<div className="d-flex align-items-stretch mt-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				className="bi bi-check-circle-fill me-3 icon__color"
				viewBox="0 0 16 16">
				<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
			</svg>

			<p>three-day full event pass</p>
		</div>
	);
};

export const KeyNoteConferenceSpeakerCard = () => {
	return (
		<div className="card">
			<Image
				src="/assets/blockImg.jpg"
				className="card-img-top"
				width={200}
				height={385}
				alt="Picture of the author"
			/>
			<div className="card-body text-center background__border">
				<h5 className="card-text text-white">KEYNOTE</h5>

				<h3 className="text-white">Dipo Lekan</h3>

				<p className="text-white">Blockchain Expert</p>
			</div>
		</div>
	);
};

export const ConferenceSpeakerCard = () => {
	return (
		<div className="card">
			<Image
				src="/assets/blockImg.jpg"
				className="card-img-top"
				width={100}
				height={100}
				alt="Picture of the author"
			/>
			<div className="card-body text-center speakerwebevent">
				<h3 className="">Dipo Lekan</h3>

				<p className="">AvaTech</p>

				<p className="text-muted">Co-Founder</p>
			</div>
		</div>
	);
};
