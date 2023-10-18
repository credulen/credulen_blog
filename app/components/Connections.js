"use client";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export const Subscribe = () => {
  const [userEmail, setUserEmail] = useState();
  // const [errorMsg, setErrorMsg] = useState();
  // const [successMsg, setSuccessMsg] = useState();

  const submitForm = async (e) => {
    e.preventDefault();

    let url = "https://strapi-blcj.onrender.com/api/subscriptions";

    try {
      await axios.post(url, { data: { user_email: userEmail } }).then((res) => {
        Swal.fire(`you have subscribed successfully`);
      });
    } catch (error) {
      if (
        error?.response?.data?.error?.message === "user_email cannot be empty"
      ) {
        Swal.fire("Please enter your mail");
      } else if (
        error?.response?.data?.error?.message ===
        "user_email must be a valid email"
      ) {
        Swal.fire("please enter a valid email address to subscribe");
      } else if (
        error?.response?.data?.error?.message ===
        "This attribute must be unique"
      ) {
        Swal.fire("you are already subscribed");
      } else {
        Swal.fire(error?.response?.data?.error?.message);
      }
    }
  };

  return (
    <div>
      {/* <h6 className="text-dark">Subscribe our newsletter to get update</h6> */}
      <form className="">
        <input
          className="form-control"
          type="email"
          placeholder="Subscribe"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          id="email"
          onChange={(e) => setUserEmail(e.target.value)}
          aria-label="Search"
        />
        {/* <p>{errorMsg}</p> */}
        <button
          className="btn bg-success text-white mt-2 w-100"
          type="submit"
          onClick={submitForm}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export const SubscribeNavbar = () => {
  const [userEmail, setUserEmail] = useState();
  // const [errorMsg, setErrorMsg] = useState();
  // const [successMsg, setSuccessMsg] = useState();

  const submitNavForm = async (e) => {
    e.preventDefault();

    let url = "https://strapi-blcj.onrender.com/api/subscriptions";

    try {
      await axios.post(url, { data: { user_email: userEmail } }).then((res) => {
        Swal.fire(`you have subscribed successfully`);
      });
    } catch (error) {
      if (
        error?.response?.data?.error?.message === "user_email cannot be empty"
      ) {
        Swal.fire("Please enter your mail to subscribe");
      } else if (
        error?.response?.data?.error?.message ===
        "user_email must be a valid email"
      ) {
        Swal.fire("please enter a valid email address");
      } else if (
        error?.response?.data?.error?.message ===
        "This attribute must be unique"
      ) {
        Swal.fire("you are already subscribed");
      } else {
        Swal.fire(error?.response?.data?.error?.message);
      }
    }
  };
  return (
    <div>
      {/* <h6 className="text-dark">Subscribe our newsletter to get update</h6> */}
      <form className="d-flex">
        <input
          className="form-control me-2"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          id="email"
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Please Enter Your Email"
        />
        <button
          className="btn bg-success text-white"
          type="submit"
          onClick={submitNavForm}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export const JoinTelegram = () => {
  return (
    <Link
      href="https://t.me/credulensubscribers"
      target="_blank"
      className="btn bg-success text-white w-100"
      aria-label="Facebook"
    >
      Join Our Telegram Community <FaTelegram />
    </Link>
  );
};
