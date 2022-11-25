import React from "react";
import Title from "../Event/Components/Title";
import style from "../../Assets/Styles/Event/index.module.css";
import EventCard from "./Components/Card";

function Event() {
  return (
    <div className={style.eventBg} id="event">
      <Title />
      <EventCard />
    </div>
  );
}

export default Event;
