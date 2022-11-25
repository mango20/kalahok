import React from "react";
import partnersCont from "./Content";
import Image from "react-bootstrap/Image";
import style from "../../../Assets/Styles/Partners/index.module.css";

function PartnerLogo() {
  return (
    <div className={style.logoCont}>
      {partnersCont.map((val, key) => {
        return (
          <div className={style.logoContInside}>
            <Image src={val.imgs} className={style.imgPartner}></Image>
          </div>
        );
      })}
    </div>
  );
}

export default PartnerLogo;
