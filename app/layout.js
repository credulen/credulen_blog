"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./globals.css";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Providers from "./providers";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className="body min-vh-100 body-relative">
        <Providers>
          <Navbars />
          <div className="mt-5 pt-4 footer-margin">{children}</div>
          <div className=" mt-5 pt-4 ">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
