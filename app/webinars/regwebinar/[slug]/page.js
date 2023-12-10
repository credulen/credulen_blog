// import React from "react";

// const RegWebinar = () => {
// 	return <div>RegWebinar</div>;
// };

// export default RegWebinar;
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { UpcomingWebinarSpeakers } from "../../../../components/Cards";
import IsLoading from "../../../loading";

import Swal from "sweetalert2";
import webinarFormValidation from "./webinarFormValidation";
import { useRouter } from "next/navigation";
import SuccessfulFormSubmitMsg from "../../../../components/SuccessFormMsg";

// import {
// 	ConferenceSpeakerCard,
// 	ConferenceTicketCard,
// 	KeyNoteConferenceSpeakerCard,
// 	RelatedArticleCard,
// 	UpcomingWebinarSpeakers,
// } from "../../../components/Cards";

const intialValues = {
  fullname: "",
  email: "",
  phonenum: "",
  company: "",
  jobtitle: "",
};

const WebinarInfoPage = ({ params }) => {
  const [singleWebinarData, setSingleWebinarData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState(intialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [show, setShow] = useState(false);

  const getSingleWebinarData = async () => {
    const singleWebinar = await axios
      .get(
        `https://strapi-blcj.onrender.com/api/webinars/${params.slug}/?populate=*`
      )
      .then((res) => res.data)
      .then((webinar) => webinar.data)
      .catch((err) => console.log(err));

    // console.log(singleWebinar);

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

  // const handleChange = (e) => {
  //   setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
    // setShow(!show);
  };

  useEffect(() => {
    const checkForm = async () => {
      try {
        if (Object.keys(errors).length === 0 && isSubmit) {
          // console.log(values);
          await axios
            .post("https://strapi-blcj.onrender.com/api/web-reg-form-details", {
              data: {
                registerer_full_name: JSON.stringify(values.fullname),
                registerer_email: values.email.toString(),
                registerer_company: JSON.stringify(values.company),
                registerer_job_title: JSON.stringify(values.jobtitle),
                registerer_phonenum: values.phonenum,
              },
            })
            .then((res) => {
              console.log("data", res.data);
              if (res.status === 200) {
                setShow(!show);
              }
            })
            .catch((err) => console.log(err));

          setValues(intialValues);
        }
      } catch (err) {
        throw new Error(err);
      }

      // console.log(JSON.stringify(values.email));
    };

    checkForm();
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fullname) {
      errors.fullname = "Your fullname is required";
    }
    if (!values.email) {
      errors.email = "Your email is required";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!values.phonenum) {
      errors.phonenum = "Your phone number is required";
    }
    if (!values.company) {
      errors.company = "Your company is required";
    }
    if (!values.jobtitle) {
      errors.jobtitle = "Your job title is required";
    }

    return errors;
  };

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <div className="container">
      {/* <h1>
				Joining the Train of Learners in the Age of Technology: Choosing the
				Right Kind of Materials to Digest
			</h1> */}
      <h1 className="text-dark">
        {singleWebinarData?.attributes?.webinar_name}
      </h1>

      <div className="mt-4 pb-5">
        {/* <small className="">JULY 15, 2023 | 5:00pm</small> */}
        <small className="text-dark">{webinarDate}</small>
      </div>

      <p className="text-dark">
        {singleWebinarData?.attributes?.webinar_description}
      </p>

      {/* speakers */}
      <div className="pt-5 mt-5">
        <h6 className="pb-3 text-dark">Esteemed Speakers</h6>
        <div className="row">
          <div className="col-md-3">
            <UpcomingWebinarSpeakers />
          </div>
        </div>
      </div>

      <div className="pt-5 mt-5">
        <h6 className="text-center pb-4 text-dark">
          Please Fill the Form Below to Register for this Webinar
        </h6>

        {/* desktop view */}
        {/* {Object.keys(errors).length === 0 && isSubmit ? (
          <div>success</div>
        ) : (
          <p>Check again</p>
        )} */}
        <div>
          {!show && (
            <form className="w-75 mx-auto border p-5 bg-white shadow d-none d-md-block d-sm-none">
              <div className="mb-4">
                <label htmlFor="fullname" className="form-label text-dark">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control webevent"
                  id="fullname"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                  // onChange={(e) => setFullname(e.target.value)}
                />
                <div>
                  {errors.fullname && (
                    <p className="text-danger">{errors.fullname}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-dark"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control webevent"
                  id="exampleInputEmail1"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>

                <div>
                  {errors.email && (
                    <p className="text-danger">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="exampleInputNum1"
                  className="form-label text-dark"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control webevent"
                  placeholder="WhatsApp Number"
                  id="exampleInputNum1"
                  name="phonenum"
                  value={values.phonenum}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   e.target.value;
                  // }}
                  aria-describedby="emailHelp"
                />

                <div>
                  {errors.phonenum && (
                    <p className="text-danger">{errors.phonenum}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="form-label text-dark">
                  Company
                </label>
                <input
                  type="text"
                  className="form-control webevent"
                  id="company"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   setCompany(e.target.value);
                  // }}
                />

                <div>
                  {errors.company && (
                    <p className="text-danger">{errors.company}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="jobtitle" className="form-label text-dark">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control webevent"
                  id="jobtitle"
                  name="jobtitle"
                  value={values.jobtitle}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   e.target.value;
                  // }}
                />

                <div>
                  {errors.jobtitle && (
                    <p className="text-danger">{errors.jobtitle}</p>
                  )}
                </div>
              </div>

              {/* <div className="mb-4">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input type="text" className="form-control webevent" id="country" />
          </div> */}

              {/* <div className="mb-4 form-check">
            <input
              type="checkbox"
              className="form-check-input webevent"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          )}
        </div>

        {/* {show && <div className="text-center">success</div>} */}
        {show && <SuccessfulFormSubmitMsg />}

        {/* mobile view */}
        <div>
          {!show && (
            <form className="mx-auto border p-5 bg-white shadow d-md-none d-sm-block">
              <div className="mb-4">
                <label htmlFor="fullname" className="form-label text-dark">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control webevent"
                  id="fullname"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   setFullname(e.target.value);
                  // }}
                />
                <div>
                  {errors.fullname && (
                    <p className="text-danger">{errors.fullname}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-dark"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control webevent"
                  id="exampleInputEmail1"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>

                <div>
                  {errors.email && (
                    <p className="text-danger">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="exampleInputNum1"
                  className="form-label text-dark"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control webevent"
                  id="exampleInputNum1"
                  name="phonenum"
                  value={values.phonenum}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   setPhonenum(e.target.value);
                  // }}
                  placeholder="WhatsApp Number"
                  aria-describedby="emailHelp"
                />

                <div>
                  {errors.phonenum && (
                    <p className="text-danger">{errors.phonenum}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="form-label text-dark">
                  Company
                </label>
                <input
                  type="text"
                  className="form-control webevent"
                  id="company"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   setCompany(e.target.value);
                  // }}
                />

                <div>
                  {errors.company && (
                    <p className="text-danger">{errors.company}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="jobtitle" className="form-label text-dark">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control webevent"
                  id="jobtitle"
                  name="jobtitle"
                  value={values.jobtitle}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   setJobtitle(e.target.value);
                  // }}
                />

                <div>
                  {errors.jobtitle && (
                    <p className="text-danger">{errors.jobtitle}</p>
                  )}
                </div>
              </div>

              {/* <div className="mb-4">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input type="text" className="form-control webevent" id="country" />
          </div> */}

              {/* <div className="mb-4 form-check">
            <input
              type="checkbox"
              className="form-check-input webevent"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebinarInfoPage;
