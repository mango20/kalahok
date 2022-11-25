import React from "react";
import style from "../../../Assets/Styles/About/index.module.css";
import Content from "../Components/Content";

function Description() {
  return (
    <div className={style.description}>
      {Content.map((val, key) => {
        return (
          <>
            <h2>{val.title}</h2>
            <p>{val.content}</p>
          </>
        );
      })}
    </div>
  );
}

export default Description;
