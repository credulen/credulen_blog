"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  ConferenceSpeakerCard,
  ConferenceTicketCard,
  KeyNoteConferenceSpeakerCard,
} from "@/components/Cards";
// import ticketinfo from "../data/conferenceticketdata.json";
import ticketinfo from "../../../../data/conferenceticketdata.json";
import IsLoading from "@/app/loading";
import Image from "next/image";

const ConferenceInfoPage = ({ params }) => {
  const [singleConferenceData, setSingleConferenceData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getSingleConferenceData = async () => {
    const singleConference = await axios
      .get(`http://localhost:1337/api/conferences/${params.slug}/?populate=*`)
      .then((res) => res.data)
      .then((webinar) => webinar.data)
      .catch((err) => console.log(err));

    // console.log(singleConference);

    setSingleConferenceData(singleConference);

    // return response;
  };

  useEffect(() => {
    setIsLoading(false);
    getSingleConferenceData();
  }, []);

  // console.log(singleWebinarData);
  let year = new Date(
    singleConferenceData?.attributes?.createdAt
  ).getFullYear();
  // let month = new Date(props.attributes.createdAt).getFullYear();
  var arr = `${singleConferenceData?.attributes?.createdAt}`.split("-");
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var month_index = parseInt(arr[1], 10) - 1;
  let month = months[month_index];
  // console.log(month);

  let day = new Date(singleConferenceData?.attributes?.createdAt).getDate();
  let hour = new Date(singleConferenceData?.attributes?.createdAt).getHours();
  let mins = new Date(singleConferenceData?.attributes?.createdAt).getMinutes();

  let conferenceDate = `${month} ${day}, ${year} | ${hour}:${mins}`;
  // let webinarDate = ` ${day}, ${year} | ${hour}:${mins}`;

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <div className="container">
      {/* title */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h4>{singleConferenceData?.attributes?.conference_name}</h4>
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
                {singleConferenceData?.attributes?.conference_description}
              </p>

              {/* <p className="">
								possimus modi distinctio rerum veritatis nulla tempore maxime
								quis molestias, numquam, totam quam officiis? Natus nihil ipsum
								quam at vitae quas.
							</p> */}

              {/* <p className="">
								possimus modi distinctio rerum veritatis nulla tempore maxime
								quis molestias, numquam, totam quam officiis? Natus nihil ipsum
								quam at vitae quas.
							</p> */}

              {/* <p className="">
								possimus modi distinctio rerum veritatis nulla tempore maxime
								quis molestias, numquam, totam quam officiis? Natus nihil ipsum
								quam at vitae quas. totam quam officiis? Natus nihil ipsum quam
								at vitae quas.
							</p> */}
            </div>

            <div className="col-md-4">
              <Image
                // src="/assets/blockImg.jpg"
                src={`http://localhost:1337${singleConferenceData?.attributes?.conference_img?.attributes?.url}`}
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
              <div className="col-md-4 g-3" key={tinfo.id}>
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

export default ConferenceInfoPage;
