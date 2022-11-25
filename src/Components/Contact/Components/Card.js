import React from "react";
import Card from "react-bootstrap/Card";
import Content from "../Components/Content";
import style from "../../../Assets/Styles/Cards/index.module.css";

function Cards() {
  return (
    <div className={style.Container}>
      {Content.map((val, key) => {
        return (
          <Card className={style.CardContainer} key={key}>
            <Card.Img variant="top" src={val.svg} className={style.svgIcons} />
            <Card.Body>
              <Card.Title>{val.title}</Card.Title>
              <Card.Text>{val.content}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Cards;
