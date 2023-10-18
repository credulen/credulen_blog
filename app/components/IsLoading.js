// const IsLoading = () => {
//   return (
//     <div className="card nav_bg mx-auto" style={{ width: "20rem" }}>
//       <div className="card-body">
//         <h5 className="card-title text-white mx-auto my-auto text-center">
//           Loading...
//         </h5>
//         {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
// 				<p className="card-text">
// 					Some quick example text to build on the card title and make up the
// 					bulk of the card's content.
// 				</p> */}
//       </div>
//     </div>
//   );
// };
const IsLoading = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border btn_bg_style"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default IsLoading;
