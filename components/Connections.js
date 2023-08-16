"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";

const subscribeUser = async () => {
	let url;
	let postUser = await axios.post("http://localhost:1337/api/subscriptions", {
		data: { user_email: email },
	});
};

// const url = "http://localhost:1337/api/strapi-forums";
//     const sendData = () => {
//       axios.post(url, {
//         data: {
//           Title: name,
//           Questions: description,
//         },
//       });

// addTodo.js is where new todos are added to our backend.
// function AddTodo({ addTodo }) {
//   return (
//     <>
//       <div className="addTodoContainer">
//         <input
//           className="todoInputText"
//           type="text"
//           placeholder="Add new todo here..."
//           id="todoText"
//           onKeyDown={(e) => {
//             if (e.code === "Enter") {
//               addTodo(todoText.value);
//               todoText.value = "";
//             }
//           }}
//         />
//         <input
//           className="todoInputButton"
//           type="button"
//           value="Add Todo"
//           onClick={() => {
//             addTodo(todoText.value);
//             todoText.value = "";
//           }}
//         />
//       </div>
//     </>
//   );
// }
// export default AddTodo;

//    const addTodo = async (todoText) => {
// 			if (todoText && todoText.length > 0) {
// 				const result = await axios.post("http://localhost:1337/todos", {
// 					todoText: todoText,
// 				});
// 				setTodos([...todos, result?.data]);
// 			}
// 		};

{
	/* <AddTodo addTodo={addTodo} />; */
}

export const Subscribe = () => {
	const [userEmail, setUserEmail] = useState();
	return (
		<div>
			{/* <h6 className="text-dark">Subscribe our newsletter to get update</h6> */}
			<form className="">
				<input
					className="form-control"
					type="search"
					placeholder="Subscribe"
					aria-label="Search"
				/>
				<button className="btn bg-success text-white mt-2 w-100" type="submit">
					Subscribe
				</button>
			</form>
		</div>
	);
};

export const SubscribeNavbar = () => {
	return (
		<div>
			{/* <h6 className="text-dark">Subscribe our newsletter to get update</h6> */}
			<form className="d-flex">
				<input
					className="form-control me-2"
					type="search"
					placeholder="Please Enter Your Email"
				/>
				<button className="btn bg-success text-white" type="submit">
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
			aria-label="Facebook">
			Join Our Telegram Community <FaTelegram />
		</Link>
	);
};
