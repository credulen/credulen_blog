// "use client";
// // import { jsxDEV } from "react/jsx-dev-runtime";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap-icons/icons";
// // import "bootstrap-icons/font";
// import { useEffect } from "react";
// import "./globals.css";
// import Navbars from "../components/Navbar";
// import Footer from "../components/Footer";
// import Head from "next/head";
// import Link from "next/link";
// import Script from "next/script";
// import dynamic from "next/dynamic";
// import LoadBootstrapJS from "@/components/LoadBootstrapJS";

// // export const metadata = {
// // 	title: "Create Next App",
// // 	description: "Generated by create next app",
// // };

// export default function RootLayout({ children }) {
//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);
//   return (
//     <html lang="en">
//       {/* <Head>
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
//           crossorigin="anonymous"
//         />
//       </Head> */}

//       <body className="body min-vh-100">
//         <Navbars />
//         <div className="mt-5 pt-4">{children}</div>

//         <div className="mt-5 pt-4">
//           <Footer />
//         </div>

//         {/* <Script
//           src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
//           integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
//           crossorigin="anonymous"
//         ></Script> */}

//         {/* <Script defer>
//           <LoadBootstrapJS />
//         </Script> */}

//         {/* <Script
//           strategy="afterInteractive"
//           defer
//           src="bootstrap/dist/js/bootstrap.bundle.min.js"
//         ></Script> */}
//       </body>
//     </html>
//   );
// }

"use client";
// import { jsxDEV } from "react/jsx-dev-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/icons";
// import "bootstrap-icons/font";
import { useEffect } from "react";
import "./globals.css";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

// export const metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      {/* <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
      </Head> */}

      <body className="body min-vh-100">
        <Navbars />
        <div className="mt-5 pt-4">{children}</div>

        <div className="mt-5 pt-4">
          <Footer />
        </div>

        {/* <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></Script> */}
      </body>
    </html>
  );
}
