"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { getAllWebinarData } from "@/data/webinarData/webinarListData";
import { useEffect, useState } from "react";
import { getAllWebinarSpeakersData } from "@/data/webinarData/webinarSpeakerData";

// an article becomes highlighted with true or false
export const HighlightCard = (props) => {
  // console.log(props.attributes.slug);
  // slug: http://localhost:1337/api/articles?fields[1]=slug

  // console.log(props.attributes.image.data.attributes.url); // coming up as null
  return (
    <div className="card mb-3">
      <img
        // src={`http://localhost:1337${props?.attributes?.image?.data?.attributes?.url}`}
        src={`${props?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
        // attributes.formats.thumbnail.url
        className="card-img-top"
        width={200}
        height={400}
        alt="Picture of the author"
      />
      <div className="card-body nav_bg">
        <h5 className="card-title text-white">{props?.attributes?.title}</h5>
        <p className="card-text text-white">
          {props?.attributes?.description.split(" ").splice(0, 10).join(" ") +
            "..."}
        </p>
        {/* <p className="card-text">
					<small className="text-body-secondary">Last updated 3 mins ago</small>
				</p> */}

        <Link
          // href={`/articles/article/${props?.attributes?.slug}`}
          href={`/articles/article/${props?.id}`}
          className="btn btnc mt-3"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export const ArticleCard = (props) => {
  // console.log(props);
  return (
    <div className="card mt-3 h-100">
      <img
        src={`${props?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
        className="card-img-top"
        width={200}
        height={250}
        alt="Picture of the author"
      />
      <div className="card-body nav_bg">
        <h5 className="card-title text-white">{props?.attributes?.title}</h5>
        <p className="card-text text-white">
          {" "}
          {props?.attributes?.description.split(" ").splice(0, 10).join(" ") +
            "..."}
        </p>
        <Link
          // href={`/article/${props.articleId}`}
          href={`/articles/article/${props?.id}`}
          className="btn btn-success"
          passHref
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export const RecentPostCard = () => {
  return (
    <div className="card nav_bg">
      <div className="card-header text-center text-white border-bottom border-white">
        Recent Posts
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center nav_bg">
          <Link href="#" className="text-white">
            Understanding Blockchain
          </Link>
        </li>
        <li className="list-group-item text-center nav_bg">
          <Link href="#" className="text-white">
            Doing More with AI and Blockchain
          </Link>
        </li>
        <li className="list-group-item text-center nav_bg">
          <Link href="#" className="text-white">
            How to Hold a Blockchain Seminar
          </Link>
        </li>
        <li className="list-group-item text-center nav_bg">
          <Link href="#" className="text-white">
            Tips for Success in Business
          </Link>
        </li>
        <li className="list-group-item text-center text-white nav_bg">
          {/* Journey through Wealth Creation */}
          <Link href="#" className="text-white">
            Journey through Wealth Creation
          </Link>
        </li>
        <li className="list-group-item text-center text-white nav_bg">
          {/* Changing the Course of History */}
          <Link href="#" className="text-white">
            Changing the Course of History
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const UpcomingWebinarCard = (props) => {
  console.log(props.id);
  return (
    // <div className="card mt-4 border-0 p-1">
    // <div className="card mt-4 border-0 p-1 nav_bg">
    <div className="card mt-4 border-0 nav_bg h-100">
      {/* <div className="card-body webevent p-4"> */}
      <div className="card-body p-4">
        <h5 className="card-title text-white">
          {props?.attributes?.webinar_name}
        </h5>
        {/* <p className="card-text">{props.attributes.webinar_description}</p> */}
        <p className="card-text text-white mt-4">
          {props?.attributes?.webinar_description
            .split(" ")
            .splice(0, 30)
            .join(" ")}
        </p>
      </div>
      {/* <ul className="list-group list-group-flush webevent p-2"> */}
      <ul className="list-group list-group-flush webevent1 p-2">
        <li className="list-group-item speakerwebevent">
          <Link
            // className="text-success"
            className="text-white"
            data-bs-toggle="collapse"
            href="#collapseExample"
            // key={props?.id}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Click Here to See Our Speakers
          </Link>

          {/* <div className="collapse mt-3" id="collapseExample"> */}
          <div className="collapse mt-3" id="collapseExample">
            <UpcomingWebinarSpeakers />
          </div>
        </li>
      </ul>
      <div className="card-body webevent1 p-3">
        <Link
          href={`/webinars/regwebinar/${props?.id}`}
          // className="card-link text-success ps-2"
          className="card-link text-white ps-2"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export const UpcomingWebinarSpeakers = () => {
  const [webinarSpeakerData, setwebinarSpeakerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const webinarSpeakers = await getAllWebinarSpeakersData();
      // console.log(webinars);
      setwebinarSpeakerData(webinarSpeakers);
    };

    fetchData();
  }, []);

  // console.log(webinarSpeakerData);

  return (
    <div className="">
      {webinarSpeakerData?.map((speaker) => {
        // {
        // 	console.log(
        // 		speaker.attributes.speaker_img.data.attributes.alternativeText
        // 	);
        // }
        return (
          <div className="d-flex mb-4" key={speaker?.id}>
            <img
              src={`${speaker?.attributes?.speaker_img?.data?.attributes?.formats?.small?.url}`}
              className="rounded-circle me-3"
              width={50}
              height={50}
              alt={
                speaker?.attributes?.speaker_img?.data?.attributes
                  ?.alternativeText
              }
            />

            <div>
              {/* <p className="mb-0 text-dark"> */}
              <p className="mb-0 text-white">
                {speaker?.attributes?.speaker_name}
              </p>

              {/* <small className="text-body-dark"> */}
              <small className="text-white">
                {speaker?.attributes?.speaker_job_description},
                <span>{speaker?.attributes?.speaker_company}</span>
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const OndemandWebinarCard = (props) => {
  let year = new Date(props?.attributes?.createdAt).getFullYear();
  // let month = new Date(props.attributes.createdAt).getFullYear();
  var arr = `${props?.attributes?.createdAt}`.split("-");
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

  let day = new Date(props?.attributes?.createdAt).getDate();
  let hour = new Date(props?.attributes?.createdAt).getHours();
  let mins = new Date(props?.attributes?.createdAt).getMinutes();

  let webinarDate = `${month.toUpperCase()} ${day}, ${year} | ${hour}:${mins}`;

  // var arr = "2012-07-01 00:00:00.0".split("-");

  return (
    <div className="card border-0 p-1 mt-3 nav_bg h-100">
      <div className="card-body p-4">
        <p className="card-text">
          {/* <small className="text-body-secondary">JULY 15, 2023 | 5:00pm</small> */}
          {/* <small className="text-body-secondary">
						{props.attributes.createdAt}
					</small> */}
          {/* <small className="text-body-secondary">{webinarDate}</small> */}
          <small className="text-white">{webinarDate}</small>
        </p>
        <h5 className="card-title text-white">
          {props?.attributes?.webinar_name}
        </h5>

        <p className="card-text mt-3 text-white">
          {props?.attributes?.webinar_description
            .split(" ")
            .splice(0, 10)
            .join(" ")}
        </p>
        <Link
          href={`/webinars/regwebinar/${props?.id}`}
          // href="/webinars/regwebinar"
          // className="btn btn-success card-link mt-4"
          className="btn btnc card-link mt-4"
        >
          CHECK WEBINAR
        </Link>
      </div>
    </div>
  );
};

export const ConferenceCard = (props) => {
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
          <h2>{props?.attributes?.conference_name}</h2>

          <p>
            {props?.attributes?.conference_description
              .split(" ")
              .splice(0, 25)
              .join(" ")}
          </p>

          <Link
            href={`/conferences/regconference/${props?.id}`}
            className="btn btn-success mt-2"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export const PastEventsCard = (props) => {
  let year = new Date(props?.attributes?.createdAt).getFullYear();
  var arr = `${props?.attributes?.createdAt}`.split("-");
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

  let day = new Date(props?.attributes?.createdAt).getDate();
  let hour = new Date(props?.attributes?.createdAt).getHours();
  let mins = new Date(props?.attributes?.createdAt).getMinutes();

  let conferenceDate = `${month.toUpperCase()} ${day}, ${year} | ${hour}:${mins}`;

  return (
    <div className="card h-100">
      <Image
        src="/assets/blockImg.jpg"
        className="card-img-top"
        width={200}
        height={250}
        alt="Picture of the author"
      />
      <div className="card-body webevent">
        <h5 className="card-title">{props?.attributes?.conference_name}</h5>
        <small className="d-block pb-1 pt-1">
          {props?.attributes?.conference_location}
        </small>
        <small className="d-block pb-3">{conferenceDate}</small>

        <p className="card-text pb-3">
          {props?.attributes?.conference_description
            .split(" ")
            .splice(0, 10)
            .join(" ")}
        </p>
        <Link href="/conferences/conferenceinfo" className="btn btn-success">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export const ComingSoonCard1 = () => {
  return (
    // <div className="card comingsoon mx-auto" style={{ width: "20rem" }}>
    <div className="card mx-auto nav_bg w-100">
      <div className="row g-0">
        {/* <h5 className="card-title text-white mx-auto my-auto text-center">
          Coming Soon
        </h5>
        <p className="card-title text-white mx-auto my-auto text-center">
          Stay Tuned...
        </p> */}
        {/* <Image
          src="/assets/comingsoon1.jpg"
          class="img-fluid rounded-start"
          width={500}
          height={50}
          alt="..."
        /> */}

        <div className="col-md-8 m-auto">
          {/* <h1 className="text-white text-center">Coming Soon</h1>
          <p className="text-white text-center">Stay Tuned...</p> */}
          <Image
            src="/assets/comingsoon1.jpg"
            class="img-fluid rounded-start"
            width={500}
            height={50}
            alt="..."
          />
        </div>
        <div className="col-md-4">
          {/* <img src="/assets/comingsoon1.jpg" alt="" /> */}
          <h5 className="card-title text-white mx-auto my-auto text-center">
            Coming Soon
          </h5>
          <p className="card-title text-white mx-auto my-auto text-center">
            Stay Tuned...
          </p>
        </div>
      </div>
    </div>
  );
};

export const ComingSoonCard3 = () => {
  return (
    // <div class=" mb-3">
    <div class="row g-0">
      <div class="col-md-7">
        <Image
          src="/assets/comingsoon1.jpg"
          class="img-fluid rounded-start"
          width={900}
          height={50}
          alt="..."
        />
      </div>
      <div class="col-md-5 nav_bg">
        <div class="card-body p-auto">
          <h1 className="card-title text-white text-center">Coming Soon</h1>
          <p className="text-white text-center">Stay Tuned...</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export const ComingSoonCard = () => {
  return (
    <div className="card nav_bg mx-auto" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title text-white mx-auto my-auto text-center">
          Coming Soon
        </h5>
        <p className="card-title text-white mx-auto my-auto text-center">
          Stay Tuned...
        </p>
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
          <Link href="#" className="text-success">
            Understanding Blockchain
          </Link>
        </li>
        <li className="list-group-item text-center">
          <Link href="#" className="text-success">
            Doing More with AI and Blockchain
          </Link>
        </li>
        <li className="list-group-item text-center">
          <Link href="#" className="text-success">
            How to Hold a Blockchain Seminar
          </Link>
        </li>
        <li className="list-group-item text-center">
          <Link href="#" className="text-success">
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

export const IndividualSolutionsCard = (props) => {
  // console.log(props);
  return (
    <div className="card h-100">
      <img
        src={`${props?.attributes?.individual_solution_image?.data?.attributes?.formats?.small?.url}`}
        className="card-img-top"
        width={200}
        height={250}
        alt="Picture of the author"
      />
      <div className="card-body webevent">
        <h5 className="card-title text-center">
          {props?.attributes?.individual_solution_name}
        </h5>
        {/* <small className="d-block pb-1 pt-1">Oregun, Lagos</small>
				<small className="d-block pb-3">JULY 15, 2023 | 5:00pm</small> */}

        <p className="card-text pb-3">
          {" "}
          {props?.attributes?.individual_solution_description
            .split(" ")
            .splice(0, 15)
            .join(" ")}
        </p>
        <Link
          href="/solutions/individualsolnform"
          className="btn btn-warning text-white"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export const BusinessSolutionsCard = (props) => {
  // console.log(props);
  return (
    <div className="card h-100">
      <img
        // src={`${props?.attributes?.business_solution_image?.data?.attributes?.formats?.thumbnail?.url}`}
        src={`${props?.attributes?.bus_soln_img?.data?.attributes?.formats?.small?.url}`}
        className="card-img-top"
        width={200}
        height={250}
        alt="Picture of the author"
      />
      <div className="card-body webevent">
        <h5 className="card-title text-center mb-4">
          {props?.attributes?.bus_soln_name}
        </h5>
        {/* <small className="d-block pb-1 pt-1">Oregun, Lagos</small> */}
        <p className="card-text pb-3">
          {props?.attributes?.bus_soln_description
            .split(" ")
            .splice(0, 15)
            .join(" ")}

          {/* {console.log(props?.attributes?.business_solution_description)} */}
        </p>
        {/* <small className="d-block pb-3">JULY 15, 2023 | 5:00pm</small> */}

        {/* <p className="card-text pb-3">
					{" "}
					{props.attributes.business_solution_description
						.split(" ")
						.splice(0, 15)
						.join(" ")}
				</p> */}
        <Link
          href="/solutions/businesssolnform"
          className="btn btn-warning text-white"
        >
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
        viewBox="0 0 16 16"
      >
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
        viewBox="0 0 16 16"
      >
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
