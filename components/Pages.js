import React from "react";
import {
	ConferenceSpeakerCard,
	ConferenceTicketCard,
	KeyNoteConferenceSpeakerCard,
	RelatedArticleCard,
	UpcomingWebinarSpeakers,
} from "./Cards";
import Image from "next/image";
import { JoinTelegram, Subscribe } from "./Connections";
import ticketinfo from "../data/conferenceticketdata.json";
import Link from "next/link";

export const ReadArticlePage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<div>
						<Image
							src="/assets/blockImg.jpg"
							className="card-img-top"
							width={500}
							height={300}
							alt="Picture of the author"
						/>
					</div>

					<div className="d-flex align-items-center mt-3 mb-4">
						<div>
							<Image
								src="/assets/blockImg.jpg"
								className="rounded-circle me-3"
								width={40}
								height={40}
								alt="Picture of the first speaker"
							/>
						</div>

						<div>
							<p className="card-text">
								<small className="text-body-secondary">
									John Doe | JULY 15, 2023
								</small>
							</p>
						</div>
					</div>

					<p className="text-justify mt-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
						eligendi deserunt maxime magnam commodi facere rem fugit distinctio
						sed? Ex aspernatur reprehenderit eaque rem harum vel odit velit,
						facere quos ab labore nobis rerum neque laborum ipsa hic tenetur
						voluptatum. Maxime ea autem quod qui iure, sed tenetur vitae
						officiis. Dolorem cupiditate, corrupti sint laudantium ad obcaecati
						quam, dolores voluptatum laboriosam commodi consectetur itaque dolor
						quo minima non quod dignissimos repudiandae eligendi iste unde
						dolorum? Exercitationem temporibus facere ea repellendus veritatis
						vero ex quisquam minus recusandae quibusdam natus eveniet assumenda
						neque labore consequuntur, aut sequi perspiciatis officia deserunt,
						ipsum eum voluptate esse. Officia nesciunt aut minus. Possimus
						<br />
						<br />
						deserunt, rerum sunt nostrum cumque sed? Laborum qui veritatis,
						reprehenderit tenetur tempore quasi saepe excepturi blanditiis
						dolorem numquam sunt, quae animi necessitatibus neque recusandae
						laudantium adipisci facilis velit ut magnam fugit ipsam! Atque
						aspernatur temporibus, quaerat omnis perspiciatis sint numquam porro
						iste accusantium nulla provident velit hic architecto quam aut, id
						nihil praesentium illo. Iure veritatis quam quos excepturi optio!
						Reprehenderit, nulla ducimus sed vitae totam doloremque velit
						minima! Autem molestias quasi omnis culpa consectetur aut explicabo
						maiores corporis nemo harum? In aut sapiente perspiciatis, neque
						magni id saepe, officia fuga eos deserunt beatae sequi dicta
						laboriosam ullam minus explicabo dolores animi non ab quos aliquam
						doloribus assumenda magnam! Dolorum officiis sit laborum maiores eos
						consequatur, exercitationem
						<br />
						<br />
						perferendis tenetur, quia corporis quasi ipsum voluptates. Natus
						aspernatur soluta pariatur ipsa inventore delectus assumenda
						officiis nihil fuga reprehenderit. Quia dolorem illo sapiente
						numquam optio, mollitia, vero ipsum consequuntur reprehenderit iusto
						maxime minima assumenda quam suscipit repudiandae quidem doloremque,
						earum quaerat eius? Error adipisci, nobis dolore ipsa assumenda
						maxime provident distinctio eaque, amet pariatur placeat possimus
						dicta. Odio earum tenetur, ipsum quasi, itaque natus enim rem quos
						quam nisi corrupti cupiditate eos laborum distinctio atque facere
						cum sed totam. tempore porro rerum! Itaque assumenda nobis doloribus
						explicabo voluptate, officia sed ut adipisci. Eligendi, impedit
						molestias. Animi sequi assumenda nesciunt libero veritatis a optio
						consequatur. Similique sed ab, consequuntur, suscipit dignissimos
						quam placeat at ipsa minus cumque facere sunt fugiat dicta quasi
						harum, quaerat aspernatur sequi mollitia odio. Illo, laborum
						architecto doloribus veritatis soluta, neque beatae quo, ullam animi
						exercitationem odio deserunt reprehenderit assumenda explicabo.
						Temporibus, iste saepe. Ullam
					</p>
				</div>
				<div className="col-md-4">
					<RelatedArticleCard />

					<div>
						<JoinTelegram />
					</div>

					<div className="mt-5">
						<h6 className="text-dark">
							Subscribe our newsletter to get update
						</h6>
						<Subscribe />
					</div>
				</div>
			</div>
		</div>
	);
};

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

				{/* desktop view */}
				<form className="w-75 mx-auto border p-5 bg-white shadow d-none d-md-block d-sm-none">
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
							className="form-check-input webevent"
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

				{/* mobile view */}
				<form className="mx-auto border p-5 bg-white shadow  d-md-none d-sm-block">
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
							className="form-check-input webevent"
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

export const ConferenceInfoPages = () => {
	return (
		<div className="container">
			<div>
				{/* <div className="row">
					<div className="col-md-6 me-5">
						<h4>Blockchain Conference</h4>
					</div>

					<div className="col-md-6">
						<button className="btn btn-success">Register</button>
					</div>
				</div> */}

				<div className="d-flex justify-content-between align-items-center">
					<h4>Blockchain Conference</h4>
					<button className="btn btn-success">Register</button>
				</div>
			</div>

			{/* <div className="conference_hero_bg mt-5"> */}
			{/* <Image
					src="/assets/blockImg.jpg"
					className="w-100"
					width={500}
					height={400}
					alt="Picture of the first speaker"
				/> */}

			{/* <div className="hero_text_div">
					<h1
						className="text-white d-flex 
					align-self-center">
						Holla
					</h1> */}
			{/* <h2>Hi</h2> */}
			{/* </div>
			</div> */}

			<div className="pt-4">
				<div className="container__border p-4">
					<div className="row">
						<div className="col-md-8">
							<h3 className="pb-3">It's Time to Reboot</h3>
							<p className="">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
								enim?
							</p>

							<p className="">
								possimus modi distinctio rerum veritatis nulla tempore maxime
								quis molestias, numquam, totam quam officiis? Natus nihil ipsum
								quam at vitae quas.
							</p>

							<p className="">
								possimus modi distinctio rerum veritatis nulla tempore maxime
								quis molestias, numquam, totam quam officiis? Natus nihil ipsum
								quam at vitae quas.
							</p>

							<p className="">
								possimus modi distinctio rerum veritatis nulla tempore maxime
								quis molestias, numquam, totam quam officiis? Natus nihil ipsum
								quam at vitae quas. totam quam officiis? Natus nihil ipsum quam
								at vitae quas.
							</p>
						</div>

						<div className="col-md-4">
							<Image
								src="/assets/blockImg.jpg"
								className="card-img-top"
								width={200}
								height={100}
								alt="Picture of the author"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const ConferenceInfoPage = () => {
	return (
		<div className="container">
			{/* title */}
			<div className="d-flex justify-content-between align-items-center mb-5">
				<h4>Blockchain Conference</h4>
				<button className="btn btn-success">Register</button>
			</div>

			{/* nav items */}
			<div className="d-md-flex mt-3">
				{/* <Link className="nav-link me-3" href="#">
					<p>About Conference</p>
				</Link> */}

				<Link className="nav-link me-3" href="#tickets">
					<p>Tickets</p>
				</Link>

				<Link className="nav-link me-3" href="#speakers">
					<p>Speakers</p>
				</Link>

				<Link className="nav-link me-3" href="#">
					<p>Sponsors</p>
				</Link>

				<Link className="nav-link me-3" href="#">
					<p>FAQ</p>
				</Link>

				<Link className="nav-link" href="#">
					<p>Book Your Hotel</p>
				</Link>
			</div>
			{/* 
			<div className="row mt-md-5">
				<div className="col-md-2">
					<Link className="nav-link" href="#">
						<p>About Conference</p>
					</Link>
				</div>

				<div className="col-md-2">
					<Link className="nav-link" href="#">
						<p>Tickets</p>
					</Link>
				</div>
				<div className="col-md-2">
					<Link className="nav-link" href="#">
						<p>Speakers</p>
					</Link>
				</div>

				<div className="col-md-2">
					<Link className="nav-link" href="#">
						<p>Sponsors</p>
					</Link>
				</div>
				<div className="col-md-2">
					<Link className="nav-link" href="#">
						<p>FAQ</p>
					</Link>
				</div>
				<div className="col-md-2">
					<Link className="nav-link" href="#">
						<p>Book Your Hotel</p>
					</Link>
				</div>
			</div> */}

			{/* content */}

			<div className="mt-5">
				<div className="container__border p-4">
					<div className="row">
						<div className="col-md-8">
							<h3 className="pb-3">It's Time to Reboot</h3>
							<p className="">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
								enim?
							</p>

							<p className="">
								possimus modi distinctio rerum veritatis nulla tempore maxime
								quis molestias, numquam, totam quam officiis? Natus nihil ipsum
								quam at vitae quas.
							</p>

							<p className="">
								possimus modi distinctio rerum veritatis nulla tempore maxime
								quis molestias, numquam, totam quam officiis? Natus nihil ipsum
								quam at vitae quas.
							</p>

							<p className="">
								possimus modi distinctio rerum veritatis nulla tempore maxime
								quis molestias, numquam, totam quam officiis? Natus nihil ipsum
								quam at vitae quas. totam quam officiis? Natus nihil ipsum quam
								at vitae quas.
							</p>
						</div>

						<div className="col-md-4">
							<Image
								src="/assets/blockImg.jpg"
								className="card-img-top"
								width={200}
								height={300}
								alt="Picture of the author"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* tickets */}
			<div className="mt-5 pt-3" id="tickets">
				<h3>Tickets</h3>

				<p>Prices are subject to increase. Register today and save!</p>

				<div className="row">
					{/* <div className="col-md-4">
						<ConferenceTicketCard />
					</div>
					<div className="col-md-4">
						<ConferenceTicketCard />
					</div>
					<div className="col-md-4">
						<ConferenceTicketCard />
					</div> */}

					{ticketinfo.ticketInfo.map((tinfo) => {
						return (
							<div className="col-md-4" key={tinfo.id}>
								<ConferenceTicketCard />
							</div>
						);
					})}
				</div>
			</div>

			{/* speakers */}
			<div className="row mt-5 pt-5 g-3" id="speakers">
				<h3 className="text-dark">Speakers</h3>

				<div className="col-md-3">
					<KeyNoteConferenceSpeakerCard />
				</div>

				<div className="col-md-9">
					{/* row 1 */}
					<div className="row g-3">
						<div className="col-md-3">
							<ConferenceSpeakerCard />
						</div>
						<div className="col-md-3">
							<ConferenceSpeakerCard />
						</div>
						<div className="col-md-3">
							<ConferenceSpeakerCard />
						</div>
						<div className="col-md-3">
							<ConferenceSpeakerCard />
						</div>
					</div>

					{/* row 2 */}
					<div className="row mt-1 g-3">
						<div className="col-md-3">
							<ConferenceSpeakerCard />
						</div>
						<div className="col-md-3">
							<ConferenceSpeakerCard />
						</div>
						<div className="col-md-3">
							<ConferenceSpeakerCard />
						</div>
						<div className="col-md-3">
							<ConferenceSpeakerCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
