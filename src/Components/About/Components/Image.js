import React from "react";
import Image from "react-bootstrap/Image";
import style from "../../../Assets/Styles/About/index.module.css";
import Content from "../Components/Content";
function AboutImage() {
  return (
    <>
      {Content.map((val, key) => {
        return (
          <>
            <Image src={val.visual} className={style.AboutMainImg}></Image>
          </>
        );
      })}
    </>
  );
}

export default AboutImage;
