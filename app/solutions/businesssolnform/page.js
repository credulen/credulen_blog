const BusinessSolutionForm = () => {
  return (
    <div className="">
      <h6 className="text-center pb-4">
        {/* Please Fill the Form to Use our Business Solutions  */}
        Please Fill the Form to Register Your Interest in our Business Solutions
      </h6>

      {/* desktop view */}
      <form className="w-50 mx-auto border p-5 bg-white shadow d-none d-md-block d-sm-none">
        <div className="mb-4">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control webevent" id="fullname" />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleInputPhone1" className="form-label">
            Phone Number
          </label>
          <input
            type="email"
            className="form-control webevent"
            id="exampleInputPhone1"
            aria-describedby="phoneHelp"
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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Company Name
          </label>
          <input
            type="email"
            className="form-control webevent"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="form-label">
            Company Industry
          </label>
          <select
            className="form-select webevent"
            aria-label="Default select example"
          >
            <option defaultValue={"selected"}>Software and Data</option>
            <option value="1">Logistics</option>
            <option value="2">Education</option>
            <option value="3">Finance</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="form-label">
            Company Size
          </label>
          <select
            className="form-select webevent"
            aria-label="Default select example"
          >
            <option defaultValue={"selected"}>Over 100</option>
            <option value="1">50 - 100</option>
            <option value="2">20 - 50</option>
            <option value="3">0 - 20</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="jobtitle" className="form-label">
            Job Title
          </label>
          <input type="text" className="form-control webevent" id="jobtitle" />
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="form-label">
            Select Solution
          </label>
          <select
            className="form-select webevent"
            aria-label="Default select example"
          >
            {/* <option defaultValue={"selected"}>
              Please Select your Preferred Solution
            </option> */}
            {/* <option value="1">Please Select your Preferred Solution</option> */}
            <option value="2">
              Blockchain Business Model Strategy Workshops for Businesses
            </option>

            <option value="3">Blockchain Use Case Ideation</option>
            <option value="4">
              Tokenization Solutions for Business Growth
            </option>
            <option value="5">Decentralized Finanace (DeFi) Consulting</option>
            <option value="6">
              Blockchain Proof-of-Concept (PoC) Development
            </option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>

      {/* mobile view */}
      <form className="mx-auto border p-5 bg-white shadow  d-md-none d-sm-block form__width">
        <div className="mb-4">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control webevent" id="fullname" />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleInputPhone1" className="form-label">
            Phone Number
          </label>
          <input
            type="email"
            className="form-control webevent"
            id="exampleInputPhone1"
            aria-describedby="phoneHelp"
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
        </div>

        <div className="mb-4">
          <label htmlFor="jobtitle" className="form-label">
            Job Title
          </label>
          <input type="text" className="form-control webevent" id="jobtitle" />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input type="text" className="form-control webevent" id="country" />
        </div>

        <div className="mb-4">
          <label htmlFor="employment_status" className="form-label">
            Employment Status
          </label>
          <select
            className="form-select webevent"
            aria-label="Default select example"
          >
            <option defaultValue={"selected"}>
              Please Select your Employment Status
            </option>
            <option value="1">Employed</option>
            <option value="2">Self Employed</option>
            <option value="3">Unemployed</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="jobtitle" className="form-label">
            Job Title
          </label>
          <input type="text" className="form-control webevent" id="jobtitle" />
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="form-label">
            Select Solution
          </label>
          <select
            className="form-select webevent"
            aria-label="Default select example"
          >
            <option defaultValue={"selected"}>
              Please Select your Preferred Solution
            </option>
            <option value="1">AI</option>
            <option value="2">Blockchain</option>
            <option value="3">AI Education</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BusinessSolutionForm;
