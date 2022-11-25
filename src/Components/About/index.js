import React from "react";
import Description from "../About/Components/Description";
import AboutImage from "./Components/Image";
import style from "../../../src/Assets/Styles/About/index.module.css";
function About() {
  return (
    <div className={style.AboutContainer} id="about">
      <AboutImage />
      <Description />
    </div>
  );
}

export default About;
