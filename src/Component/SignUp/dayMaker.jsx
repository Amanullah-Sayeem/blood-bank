import { Link } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";

const DayMaker = (props) => {
  const { dayIndex, day, activeDay, setActiveDay } = props;

  return (
    <div className="row">
      {dayIndex.map((it) =>
        day[it] ? (
          <div
            className={
              it === activeDay ? "col itemBox activeDate" : "col itemBox"
            }
            onClick={() => setActiveDay(it)}
          >
            {day[it]}
          </div>
        ) : (
          <div className="col itemBox visibility-none"></div>
        )
      )}
    </div>
  );
};

export default DayMaker;
