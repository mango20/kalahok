import React from "react";
import Cards from "./Components/Card";
import Title from "./Components/Title";
import style from "../../../src/Assets/Styles/Cards/index.module.css";
function Contact() {
  return (
    <div className={style.contactBg} id="contact">
      <Title />
      <Cards />
    </div>
  );
}

export default Contact;
