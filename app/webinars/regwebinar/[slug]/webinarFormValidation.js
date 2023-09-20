// const { default: Swal } = require("sweetalert2");

// const webinarFormValidation = (
//   fullname,
//   email,
//   phonenum,
//   company,
//   jobtitle
// ) => {
//   //   Swal.fire("");
//   let error = {};
//   const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const phonenum_pattern = /^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/;

//   if (fullname === "") {
//     error.fullname = "Please enter your name";
//   } else {
//     error.fullname;
//   }

//   if (email === "") {
//     error.email = "Please enter your email address";
//   }
//   //   else if (!email_pattern.test(email)) {
//   //     error.email = "Please enter a valid email address";
//   //   }
//   else {
//     error.email;
//   }

//   if (phonenum === "") {
//     error.phonenum = "Please enter phone number";
//   }
//   //   else if (!phonenum_pattern.test(values.phonenum)) {
//   //     error.phonenum = "Please enter a valid phone number";
//   //   }
//   else {
//     error.phonenum;
//   }

//   if (company === "") {
//     error.company = "Please enter your company";
//   } else {
//     error.company;
//   }

//   if (jobtitle === "") {
//     error.jobtitle = "Please enter your jobtitle";
//   } else {
//     error.jobtitle;
//   }

//   return error;
// };

// export default webinarFormValidation;

// const webinarFormValidation = (values) => {
const webinarFormValidation = (
  fullname,
  email,
  company,
  jobtitle,
  phonenum
) => {
  //   Swal.fire("");
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonenum_pattern = /^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/;

  //   if (values.fullname === "") {
  if (fullname === "") {
    error.fullname = "Please enter your name";
  } else {
    error.fullname;
  }

  //   if (values.email === "") {
  if (email === "") {
    error.email = "Please enter your email address";
  }
  //   else if (!email_pattern.test(email)) {
  //     error.email = "Please enter a valid email address";
  //   }
  else {
    error.email;
  }

  //   if (values.phonenum === "") {
  if (phonenum === "") {
    error.phonenum = "Please enter phone number";
  }
  //   else if (!phonenum_pattern.test(values.phonenum)) {
  //     error.phonenum = "Please enter a valid phone number";
  //   }
  else {
    error.phonenum;
  }

  //   if (values.company === "") {
  if (company === "") {
    error.company = "Please enter your company";
  } else {
    error.company;
  }

  //   if (values.jobtitle === "") {
  if (jobtitle === "") {
    error.jobtitle = "Please enter your jobtitle";
  } else {
    error.jobtitle;
  }

  return error;
};

export default webinarFormValidation;
