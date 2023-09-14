// import React from "react";

// const RegWebinar = () => {
// 	return <div>RegWebinar</div>;
// };

// export default RegWebinar;
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { UpcomingWebinarSpeakers } from "@/components/Cards";
import IsLoading from "@/components/IsLoading";

// import {
// 	ConferenceSpeakerCard,
// 	ConferenceTicketCard,
// 	KeyNoteConferenceSpeakerCard,
// 	RelatedArticleCard,
// 	UpcomingWebinarSpeakers,
// } from "../../../components/Cards";

const WebinarInfoPage = ({ params }) => {
  const [singleWebinarData, setSingleWebinarData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getSingleWebinarData = async () => {
    const singleWebinar = await axios
      .get(
        `https://strapi-blcj.onrender.com/api/webinars/${params.slug}/?populate=*`
      )
      .then((res) => res.data)
      .then((webinar) => webinar.data)
      .catch((err) => console.log(err));

    console.log(singleWebinar);

    setSingleWebinarData(singleWebinar);

    // return response;
  };
  useEffect(() => {
    setIsLoading(false);
    getSingleWebinarData();
  }, []);

  // console.log(singleWebinarData);
  let year = new Date(singleWebinarData?.attributes?.createdAt).getFullYear();
  // let month = new Date(props.attributes.createdAt).getFullYear();
  var arr = `${singleWebinarData?.attributes?.createdAt}`.split("-");
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

  let day = new Date(singleWebinarData?.attributes?.createdAt).getDate();
  let hour = new Date(singleWebinarData?.attributes?.createdAt).getHours();
  let mins = new Date(singleWebinarData?.attributes?.createdAt).getMinutes();

  let webinarDate = `${month} ${day}, ${year} | ${hour}:${mins}`;
  // let webinarDate = ` ${day}, ${year} | ${hour}:${mins}`;

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <div className="container">
      {/* <h1>
				Joining the Train of Learners in the Age of Technology: Choosing the
				Right Kind of Materials to Digest
			</h1> */}
      <h1>{singleWebinarData?.attributes?.webinar_name}</h1>

      <div className="mt-4 pb-5">
        {/* <small className="">JULY 15, 2023 | 5:00pm</small> */}
        <small className="">{webinarDate}</small>
      </div>

      {/* <p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sed
				excepturi aperiam explicabo odio officia debitis harum ad quae modi quos
				est ipsum ratione, perspiciatis voluptas! Eum natus, enim amet aut cum
				esse. Nostrum beatae quae officiis amet laudantium quidem aperiam, nihil
				placeat molestiae autem doloribus dolore? At, hic officia.
			</p> */}
      <p>{singleWebinarData?.attributes?.webinar_description}</p>

      {/* speakers */}
      <div className="pt-5 mt-5">
        <h6 className="pb-3">Esteemed Speakers</h6>
        <div className="row">
          <div className="col-md-3">
            <UpcomingWebinarSpeakers />
          </div>
          {/* <div className="col-md-3">
						<UpcomingWebinarSpeakers />
					</div>
					<div className="col-md-3">
						<UpcomingWebinarSpeakers />
					</div>
					<div className="col-md-3">
						<UpcomingWebinarSpeakers />
					</div> */}
        </div>
      </div>

      <div className="pt-5 mt-5">
        <h6 className="text-center pb-4">
          Please Fill the Form Below to Register for the Webinar
        </h6>

        {/* desktop view */}
        <form className="w-75 mx-auto border p-5 bg-white shadow d-none d-md-block d-sm-none">
          <div className="mb-4">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control webevent"
              id="fullname"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
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
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input type="text" className="form-control webevent" id="company" />
          </div>

          <div className="mb-4">
            <label htmlFor="jobtitle" className="form-label">
              Job Title
            </label>
            <input
              type="text"
              className="form-control webevent"
              id="jobtitle"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="form-label">
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
            <label className="form-check-label" htmlFor="exampleCheck1">
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
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control webevent"
              id="fullname"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
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
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input type="text" className="form-control webevent" id="company" />
          </div>

          <div className="mb-4">
            <label htmlFor="jobtitle" className="form-label">
              Job Title
            </label>
            <input
              type="text"
              className="form-control webevent"
              id="jobtitle"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="form-label">
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
            <label className="form-check-label" htmlFor="exampleCheck1">
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

export default WebinarInfoPage;
