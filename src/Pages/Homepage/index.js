import React from "react";
import About from "../../Components/About/index.js";
import Contact from "../../Components/Contact/index.js";
import MainImages from "../../Components/Home/index.js";
import Event from "../../Components/Event/index.js";
import Header from "../../Layouts/Header/Components/index.js";
import Partners from "../../Components/Partners/index.js";
import ScrollToTop from "react-scroll-to-top";

function Homepage() {
  return (
    <>
      <Header />
      <MainImages />
      <About />
      <Event />
      <Partners />
      <Contact />
      <ScrollToTop
        smooth
        color="#ffff"
        style={{ backgroundColor: "#36408d" }}
      />
    </>
  );
}

export default Homepage;
