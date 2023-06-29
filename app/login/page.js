const Login = () => {
	return (
		<>
			{/* desktop view */}
			<form className="form mx-auto bg-white border-5 shadow p-4 w-25 d-none d-md-block d-sm-none">
				<h5 className="text-center mt-1 mb-4">Login</h5>
				<div className="mb-3">
					<label htmlFor="exampleFormControlInput1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control webevent"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>

					<input
						type="password"
						className="form-control webevent"
						id="exampleInputPassword1"
					/>
				</div>

				{/* <div className="mb-3"> */}
				<button className="btn btn-success mt-3">Submit</button>
				{/* </div> */}
			</form>

			{/* mobile view */}
			<form className="form mx-auto bg-white border-5 shadow p-4 w-75 d-md-none d-sm-block">
				<h5 className="text-center mt-1 mb-4">Login</h5>
				<div className="mb-3">
					<label htmlFor="exampleFormControlInput1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control webevent"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>

					<input
						type="password"
						className="form-control webevent"
						id="exampleInputPassword1"
					/>
				</div>

				{/* <div className="mb-3"> */}
				<button className="btn btn-success mt-3">Submit</button>
				{/* </div> */}
			</form>
		</>
	);
};

export default Login;
