"use client";
import SuccessfulFormSubmitMsg from "@/components/SuccessFormMsg";
import axios from "axios";
import { useEffect, useState } from "react";

const intialValues = {
  fullname: "",
  phonenum: "",
  email: "",
  companyname: "",
  companysize: "",
  jobtitle: "",
  industry: "",
  solution: "",
  // country: "",
};

const BusinessSolutionForm = () => {
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
            .post("https://strapi-blcj.onrender.com/api/bus-soln-forms", {
              data: {
                full_name: JSON.stringify(values.fullname),
                phone_num: values.phonenum,
                email: values.email.toString(),
                company_name: JSON.stringify(values.companyname),
                company_industry: JSON.stringify(values.industry),
                company_size: JSON.stringify(values.companysize),
                job_title: JSON.stringify(values.jobtitle),
                solution_type: JSON.stringify(values.solution),
              },
            })
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
    if (!values.companyname) {
      errors.companyname = "Your company name is required";
    }
    if (!values.companysize) {
      errors.companysize = "Your company size is required";
    }
    if (!values.jobtitle) {
      errors.jobtitle = "Your job title is required";
    }
    if (!values.industry) {
      errors.industry = "Your industry is required";
    }
    if (!values.solution) {
      errors.solution = "Please select a solution";
    }

    return errors;
  };

  return (
    <div className="">
      <h6 className="text-center pb-4 text-dark">
        {/* Please Fill the Form to Use our Business Solutions  */}
        Please Fill the Form to Register Your Interest in our Business Solutions
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
              <div id="emailHelp" className="form-text text-dark">
                We'll never share your email with anyone else.
              </div>

              <div>
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-dark"
              >
                Company Name
              </label>
              <input
                type="email"
                className="form-control webevent"
                id="exampleInputEmail1"
                name="companyname"
                value={values.companyname}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />

              <div>
                {errors.companyname && (
                  <p className="text-danger">{errors.companyname}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="form-label text-dark">
                Company Size
              </label>
              <select
                className="form-select webevent text-dark"
                aria-label="Default select example"
                name="companysize"
                value={values.companysize}
                onChange={handleChange}
              >
                <option defaultValue={"selected"}>
                  Please Select Your Company Size
                </option>
                <option value="1">over 100</option>
                <option value="2">50 - 100</option>
                <option value="3">20 - 50</option>
                <option value="4">0 - 20</option>
              </select>

              <div>
                {errors.companysize && (
                  <p className="text-danger">{errors.companysize}</p>
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
                Industry
              </label>
              <select
                className="form-select webevent"
                aria-label="Default select example"
                name="industry"
                value={values.industry}
                onChange={handleChange}
              >
                <option defaultValue={"selected"}>
                  Please Select Your Preferred Industry
                </option>
                <option value="1">Software and Data</option>
                <option value="2">Blockchain and AI</option>
                <option value="3">Logistics</option>
              </select>

              <div>
                {errors.industry && (
                  <p className="text-danger">{errors.industry}</p>
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
                <option value="1">Please Select your Preferred Solution</option>
                <option value="2">
                  Blockchain Business Model Strategy Workshops for Businesses
                </option>

                <option value="3">Blockchain Use Case Ideation</option>
                <option value="4">
                  Tokenization Solutions for Business Growth
                </option>
                <option value="5">
                  Decentralized Finanace (DeFi) Consulting
                </option>
                <option value="6">
                  Blockchain Proof-of-Concept (PoC) Development
                </option>
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
      {/* d-md-none d-sm-block */}
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

            <div className="mb-4">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-dark"
              >
                Company Name
              </label>
              <input
                type="email"
                className="form-control webevent"
                id="exampleInputEmail1"
                name="companyname"
                value={values.companyname}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />

              <div>
                {errors.companyname && (
                  <p className="text-danger">{errors.companyname}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="form-label text-dark">
                Company Size
              </label>
              <select
                className="form-select webevent"
                aria-label="Default select example"
                name="companysize"
                value={values.companysize}
                onChange={handleChange}
              >
                <option defaultValue={"selected"}>
                  Please Select Your Company SIze
                </option>
                <option value="1">over 100</option>
                <option value="2">50 - 100</option>
                <option value="3">20 - 50</option>
                <option value="4">0 - 20</option>
              </select>

              <div>
                {errors.companysize && (
                  <p className="text-danger">{errors.companysize}</p>
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
                Industry
              </label>
              <select
                className="form-select webevent"
                aria-label="Default select example"
                name="industry"
                value={values.industry}
                onChange={handleChange}
              >
                <option defaultValue={"selected"}>
                  Please Select Your Preferred Industry
                </option>
                <option value="1">Software and Data</option>
                <option value="2">Blockchain and AI</option>
                <option value="3">Logistics</option>
              </select>

              <div>
                {errors.industry && (
                  <p className="text-danger">{errors.industry}</p>
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
                <option value="1">Please Select your Preferred Solution</option>
                <option value="2">
                  Blockchain Business Model Strategy Workshops for Businesses
                </option>

                <option value="3">Blockchain Use Case Ideation</option>
                <option value="4">
                  Tokenization Solutions for Business Growth
                </option>
                <option value="5">
                  Decentralized Finanace (DeFi) Consulting
                </option>
                <option value="6">
                  Blockchain Proof-of-Concept (PoC) Development
                </option>
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

export default BusinessSolutionForm;
