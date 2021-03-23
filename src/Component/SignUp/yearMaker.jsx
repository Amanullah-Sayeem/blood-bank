import { Link } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";

const YearMaker = (props) => {
  const { yearIndex, year, activeYear, setActiveYear } = props;

  return (
    <div className="row">
      {yearIndex.map((it) =>
        year[it] ? (
          <div
            className={
              it === activeYear ? "col itemBox activeDate" : "col itemBox"
            }
            onClick={() => setActiveYear(it)}
          >
            {year[it]}
          </div>
        ) : (
          <div className="col itemBox visibility-none"></div>
        )
      )}
    </div>
  );
};

export default YearMaker;
