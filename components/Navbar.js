"use client";
import Link from "next/link";
import Image from "next/image";
// import logo from "../..//logo/5.png";
import logo from "../public/logo/5.png";
import { SubscribeNavbar } from "./Connections";
import { useEffect, useState } from "react";
import { getAllArticleData } from "@/data/articleData/articleListData";
import { NavCatCard } from "./Cards";
import { useArticle } from "@/app/articles/useArticlesData";

const Navbars = () => {
  // const [data, setData] = useState([]);
  const [artFilter, setArtFilter] = useState([]);
  const { allArticles } = useArticle();
  // console.log(allArticles);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const articles = await getAllArticleData();
  //     // console.log(articles);
  //     setData(articles);
  //   };

  //   fetchData();
  // }, []);

  // const filteredData = data.filter(
  const filteredData = allArticles?.data?.data?.data?.filter(
    (value, index, self) =>
      self.findIndex(
        (v) =>
          v?.attributes?.category?.data?.id ===
            value?.attributes?.category?.data?.id &&
          v?.attributes?.category?.data?.attributes?.Title ===
            value?.attributes?.category?.data?.attributes?.Title
      ) === index
  );

  // console.log(filteredData);

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-lg py-3">
      {/* <nav className="navbar navbar-expand-lg sticky-top nav_bg shadow-lg py-3"> */}
      <div className="container-fluid container">
        <a className="navbar-brand text-dark" href="/">
          Credulen
        </a>
        {/* <Link className="navbar-brand text-white" href="/">
					<Image
						className=""
						src={logo}
						width={50}
						height={50}
						alt="credulen logo"
					/>
				</Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          // onClick={() => setIsHidden((c) => !c)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <div
          className={`collapse navbar-collapse ${isHidden ? "hidden" : ""}`}
          id="navbarSupportedContent"
        > */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-dark me-3"
                aria-current="page"
                href="/"
                // onClick={(e) => {
                //   e.preventDefault();
                //   setIsHidden(false);
                // }}
              >
                Home
              </a>
            </li>
            {/* <li className="nav-item">
							<a className="nav-link text-white" href="#">
								Link
							</a>
						</li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark me-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-dark" href="/webinars">
                    Webinars
                  </a>
                </li>

                <li>
                  <a className="dropdown-item text-dark" href="/conferences">
                    Conferences
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/solutions" className="nav-link text-dark me-3">
                Solutions
              </a>
            </li>

            <li className="nav-item">
              <a href="/contact" className="nav-link text-dark me-3">
                Contact Us
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark me-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              {/* <ul className="dropdown-menu" onClick={() => artFilter}> */}
              <ul className="dropdown-menu">
                {filteredData?.map((cat) => {
                  return (
                    <>
                      <li key={cat?.id}>
                        <NavCatCard {...cat} />
                      </li>
                    </>
                  );
                })}
              </ul>
            </li>
          </ul>
          <div className="" role="search">
            {/* <button
							className="btn text-white btn_outline_style me-3"
							type="submit">
							Login
						</button> */}
            {/* <Link
							href="/login"
							className="btn text-white btn_outline_style me-3"
							type="submit">
							Login
						</Link> */}
            {/* <button
							className="btn btn_bg_style fw-medium bg-light"
							type="submit">
							Sign Up
						</button> */}
            {/* <Link
							href="/signup"
							className="btn btn_bg_style fw-medium bg-light"
							type="submit">
							Sign Up
						</Link> */}

            <SubscribeNavbar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;

// import Link from "next/link";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// const Navbars = () => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             {/* <Nav.Link href="#link"> */}

//             <Link className="dropdown-item" href="/webinars">
//               Webinars
//             </Link>
//             {/* </Nav.Link> */}
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navbars;
