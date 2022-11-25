import React from "react";
import PartnerLogo from "./Components/PartnerLogo";
import Title from "./Components/Title";
import style from "../../../src/Assets/Styles/Partners/index.module.css";
function Partners() {
  return (
    <div className={style.partnerBg} id="partners">
      <Title />
      <PartnerLogo />
    </div>
  );
}

export default Partners;
