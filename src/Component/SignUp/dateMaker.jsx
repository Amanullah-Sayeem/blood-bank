import { Link } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";

const DateMaker = (props) => {
  const { dateIndex, date, activeDate, setActiveDate } = props;

  return (
    <div className="row">
      {dateIndex.map((it) =>
        date[it] ? (
          <div
            className={
              it === activeDate ? "col itemBox activeDate" : "col itemBox"
            }
            onClick={() => setActiveDate(it)}
          >
            {date[it]}
          </div>
        ) : (
          <div className="col itemBox visibility-none"></div>
        )
      )}
    </div>
  );
};

export default DateMaker;
