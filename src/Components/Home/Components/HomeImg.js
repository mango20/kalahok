import React from "react";
import Carousel from "react-bootstrap/Carousel";
import homeCont from "./Content.js";
import style from "../../../Assets/Styles/Home/index.module.css";

function HomeImg() {
  return (
    <>
      <Carousel>
        {homeCont.map((val, key) => {
          return (
            <Carousel.Item>
              <img alt="First slide" className={style.img} src={val.imgs} />
              {/* <Carousel.Caption>
                <h3>{val.title}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default HomeImg;
