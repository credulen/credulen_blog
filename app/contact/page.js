"use client";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [userEmail, setUserEmail] = useState();
  const [userMsg, setUserMsg] = useState();
  // const [errorMsg, setErrorMsg] = useState();
  // const [successMsg, setSuccessMsg] = useState();

  const submitContactForm = async (e) => {
    e.preventDefault();

    let url = "https://strapi-blcj.onrender.com/api/contact-form-details";

    try {
      if (userEmail === "" && userMsg === "") {
        Swal.fire("all fields are required");
      } else if (userEmail === "") {
        Swal.fire("please enter your email");
      } else if (userMsg === "") {
        Swal.fire("please enter a message");
      } else {
        await axios
          .post(url, {
            data: { sender_mail: userEmail, sender_message: userMsg },
          })
          .then((res) => {
            Swal.fire(`we have successfully received your message`);
          });
      }
    } catch (error) {
      // if (
      //   error?.response?.data?.error?.message === "sender_mail cannot be empty"
      // ) {
      //   Swal.fire("All fields are required");
      // } else if (
      //   error?.response?.data?.error?.message ===
      //   "sender_message must be defined."
      // ) {
      //   Swal.fire("All fields are required");
      // }

      // if (
      //   error?.response?.data?.error?.details?.errors[0]?.message ===
      //     "sender_message must be defined." &&
      //   error?.response?.data?.error?.details?.errors[1]?.message ===
      //     "sender_mail cannot be empty"
      // ) {
      //   Swal.fire("please enter a message");
      // }
      if (error?.response?.data?.error?.message === "2 errors occurred") {
        Swal.fire("all fields are required");
      } else if (
        error?.response?.data?.error?.message ===
        "sender_mail must be a valid email"
      ) {
        Swal.fire("please enter a valid email address");
      }
      // else if (
      //   error?.response?.data?.error?.details?.errors[1]?.message ===
      //   "sender_mail cannot be empty"
      // ) {
      //   Swal.fire("please enter your mail");
      // }
      else {
        Swal.fire(error?.response?.data?.error?.message);
      }
      // console.log(error);
      // console.log(error?.response?.data?.error?.details?.errors[0].message);
      // console.log(error?.response?.data?.error?.details?.errors[1].message);
    }
  };
  return (
    <>
      {/* desktop */}
      {/* <form className="mx-auto w-50 p-4 bg-white border-5 shadow d-none d-md-block d-sm-none nav_bg"> */}
      <form className="mx-auto w-50 p-4 border-5 shadow d-none d-md-block d-sm-none nav_bg">
        {/* <h5 className="text-center mt-1 mb-4">Have any Question? Contact Us</h5> */}
        <h5 className="text-center mt-1 mb-4 text-white">
          Have any Question? Contact Us
        </h5>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control webevent"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            id="exampleFormControlInput1"
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="please enter your mail"
          />
        </div>

        <div className="mb-3">
          <label
            for="exampleFormControlTextarea1"
            className="form-label text-white"
          >
            Message
          </label>
          <textarea
            className="form-control webevent"
            id="exampleFormControlTextarea1"
            onChange={(e) => setUserMsg(e.target.value)}
            rows="3"
            placeholder="please enter your message"
          ></textarea>
        </div>

        <div className="mb-3">
          <button className="btn btn-success" onClick={submitContactForm}>
            Submit
          </button>
        </div>
      </form>

      {/* mobile */}
      <form className="mx-auto w-75 p-4 nav_bg border-5 shadow d-md-none d-sm-block">
        <h6 className="text-center mt-1 mb-4 text-white">
          Have any Question? Contact Us
        </h6>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control webevent"
            id="exampleFormControlInput1"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="please enter your mail"
          />
        </div>

        <div className="mb-3">
          <label
            for="exampleFormControlTextarea1"
            className="form-label text-white"
          >
            Message
          </label>
          <textarea
            className="form-control webevent"
            id="exampleFormControlTextarea1"
            onChange={(e) => setUserMsg(e.target.value)}
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <button className="btn btn-success" onClick={submitContactForm}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
