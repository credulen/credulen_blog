// import React from "react";

// const TagButtons = () => {
//   return (
//     <div className="container">
//       <div>
//         <div>
//           <button className="btn btn-outline-success">
//             Blockchain Education
//           </button>
//         </div>

//         <div>
//           <button className="btn btn-outline-success">Blockchain Trends</button>
//         </div>

//         <div>
//           <button className="btn btn-outline-success">Blockchain Trends</button>
//         </div>

//         <div>
//           <button className="btn btn-outline-success">Blockchain Trends</button>
//         </div>

//         <div>
//           <button className="btn btn-outline-success">Blockchain Trends</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TagButtons;

// const TagButtons = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-3">
//           <button className="btn btn-outline-success">Blockchain Trends</button>
//         </div>
//         <div className="col-md-3">
//           <button className="btn btn-outline-success">Blockchain Trends</button>
//         </div>
//         <div className="col-md-3">
//           <button className="btn btn-outline-success">Blockchain Trends</button>
//         </div>
//         <div className="col-md-3">
//           <button className="btn btn-outline-success">Blockchain Trends</button>
//         </div>
//       </div>
//     </div>
//   );
// };

const TagButtons = () => {
  return (
    <div className="container">
      <div className=" d-none d-sm-none d-md-flex justify-content-between">
        <button className="btn btn-outline-success">Blockchain Trends</button>
        <button className="btn btn-outline-success">Blockchain Trends</button>
        <button className="btn btn-outline-success">Blockchain Trends</button>
        <button className="btn btn-outline-success">Blockchain Trends</button>
        {/* <button className="btn btn-outline-success">Blockchain Trends</button> */}
      </div>

      <div className="d-md-none">
        <button className="btn btn-outline-success">Blockchain Trends</button>
        <button className="btn btn-outline-success">Blockchain Trends</button>
        <button className="btn btn-outline-success">Blockchain Trends</button>
        <button className="btn btn-outline-success">Blockchain Trends</button>
        <button className="btn btn-outline-success">Blockchain Trends</button>
      </div>
    </div>
  );
};

export default TagButtons;
