"use client";
import SuccessfulFormSubmitMsg from "@/components/SuccessFormMsg";
import axios from "axios";
import { useEffect, useState } from "react";

const intialValues = {
  fullname: "",
  phonenum: "",
  email: "",
  employmentstatus: "",
  // country: "",
  jobtitle: "",
  solution: "",
};

const IndividualSolutionForm = () => {
  const [values, setValues] = useState(intialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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
            .post(
              "https://strapi-blcj.onrender.com/api/individual-solution-forms",
              {
                data: {
                  full_name: JSON.stringify(values.fullname),
                  email: values.email.toString(),
                  // phone_num: JSON.stringify(values.phonenum),
                  phone_num: values.phonenum,
                  employment_status: JSON.stringify(values.employmentstatus),
                  job_title: JSON.stringify(values.jobtitle),
                  solution_type: JSON.stringify(values.solution),
                },
              }
            )
            .then((res) => {
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
    if (!values.phonenum) {
      errors.phonenum = "Your phone number is required";
    }
    if (!values.email) {
      errors.email = "Your email is required";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!values.employmentstatus) {
      errors.employmentstatus = "Please select an employment status";
    }
    if (!values.jobtitle) {
      errors.jobtitle = "Your job title is required";
    }
    if (!values.solution) {
      errors.solution = "Please select a solution";
    }

    return errors;
  };

  return (
    <div className="">
      <h6 className="text-center pb-4 text-dark">
        Please Fill the Form to Register Your Interest in our Solutions for
        Individuals
      </h6>

      {/* desktop view */}
      <div>
        {!show && (
          <form className="w-50 mx-auto border p-5 bg-white shadow d-none d-md-block d-sm-none">
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
              />

              <div>
                {errors.fullname && (
                  <p className="text-danger">{errors.fullname}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleInputPhone1"
                className="form-label text-dark"
              >
                Phone Number
              </label>
              <input
                type="number"
                className="form-control webevent"
                id="exampleInputPhone1"
                name="phonenum"
                value={values.phonenum}
                onChange={handleChange}
                aria-describedby="phoneHelp"
              />

              <div>
                {errors.phonenum && (
                  <p className="text-danger">{errors.phonenum}</p>
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
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>

              <div>
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
            </div>

            {/* <div className="mb-4">
              <label htmlFor="company" className="form-label">
                Country
              </label>
              <select
                className="form-select webevent"
                aria-label="Default select example"
              >
                <option defaultValue={"selected"}>Nigeria</option>
                <option value="1">America</option>
                <option value="2">UK</option>
                <option value="3">Three</option>
              </select>
            </div> */}

            <div className="mb-4">
              <label
                htmlFor="employment_status"
                className="form-label text-dark"
              >
                Employment Status
              </label>
              <select
                className="form-select webevent"
                aria-label="Default select example"
                name="employmentstatus"
                value={values.employmentstatus}
                onChange={handleChange}
              >
                <option defaultValue={"selected"}>
                  Please Select your Employment Status
                </option>
                <option value="1">Employed</option>
                <option value="2">Self Employed</option>
                <option value="3">Unemployed</option>
              </select>

              <div>
                {errors.employmentstatus && (
                  <p className="text-danger">{errors.employmentstatus}</p>
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
              />
              <div>
                {errors.jobtitle && (
                  <p className="text-danger">{errors.jobtitle}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="form-label text-dark">
                Select Solution
              </label>
              <select
                className="form-select webevent"
                aria-label="Default select example"
                name="solution"
                value={values.solution}
                onChange={handleChange}
              >
                {/* <option defaultValue={"selected"}>
              Please Select your Preferred Solution
            </option> */}
                <option value="1">Please Select Your Preferred Solution</option>

                <option value="2">Web3/Blockchain Engineer Program</option>
                <option value="3">Data Science (Web3) Program</option>
                <option value="4">Data Engineering Program</option>
              </select>

              <div>
                {errors.solution && (
                  <p className="text-danger">{errors.solution}</p>
                )}
              </div>
            </div>

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

      {show && <SuccessfulFormSubmitMsg />}

      {/* mobile view */}
      <div>
        {!show && (
          <form className="mx-auto border p-5 bg-white shadow  d-md-none d-sm-block form__width">
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
              />

              <div>
                {errors.fullname && (
                  <p className="text-danger">{errors.fullname}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleInputPhone1"
                className="form-label text-dark"
              >
                Phone Number
              </label>
              <input
                type="number"
                className="form-control webevent"
                id="exampleInputPhone1"
                name="phonenum"
                value={values.phonenum}
                onChange={handleChange}
                aria-describedby="phoneHelp"
              />

              <div>
                {errors.phonenum && (
                  <p className="text-danger">{errors.phonenum}</p>
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
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>

              <div>
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
            </div>

            {/* <div className="mb-4">
              <label htmlFor="company" className="form-label">
                Country
              </label>
              <select
                className="form-select webevent"
                aria-label="Default select example"
              >
                <option defaultValue={"selected"}>Nigeria</option>
                <option value="1">America</option>
                <option value="2">UK</option>
                <option value="3">Three</option>
              </select>
            </div> */}

            <div className="mb-4">
              <label
                htmlFor="employment_status"
                className="form-label text-dark"
              >
                Employment Status
              </label>
              <select
                className="form-select webevent"
                aria-label="Default select example"
                name="employmentstatus"
                value={values.employmentstatus}
                onChange={handleChange}
              >
                <option defaultValue={"selected"}>
                  Please Select your Employment Status
                </option>
                <option value="1">Employed</option>
                <option value="2">Self Employed</option>
                <option value="3">Unemployed</option>
              </select>

              <div>
                {errors.employmentstatus && (
                  <p className="text-danger">{errors.employmentstatus}</p>
                )}
              </div>
            </div>

            {/* <div className="mb-4">
              <label htmlFor="jobtitle" className="form-label">
                Job Title
              </label>
              <input
                type="text"
                className="form-control webevent"
                id="jobtitle"
                name="jobtitle"
                value={values.jobtitle}
                onChange={handleChange}
              />
            </div> */}
            {/* 
            <div className="mb-4">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control webevent"
                id="country"
                name="country"
                value={values.country}
                onChange={handleChange}
              />
            </div> */}

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
              />

              <div>
                {errors.jobtitle && (
                  <p className="text-danger">{errors.jobtitle}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="form-label text-dark">
                Select Solution
              </label>
              <select
                className="form-select webevent"
                aria-label="Default select example"
                name="solution"
                value={values.solution}
                onChange={handleChange}
              >
                <option defaultValue={"selected"}>
                  Please Select your Preferred Solution
                </option>
                <option value="1">AI</option>
                <option value="2">Blockchain</option>
                <option value="3">AI Education</option>
              </select>

              <div>
                {errors.solution && (
                  <p className="text-danger">{errors.solution}</p>
                )}
              </div>
            </div>

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
  );
};

export default IndividualSolutionForm;
