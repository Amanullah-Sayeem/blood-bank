import { useState } from "react";

const RecentHistory = (props) => {
  const { bloodGroup, text, backColor } = props;

  const circleStyel = {
    height: "36px",
    borderRadius: "26px",
    width: "36px",
    textAlign: "center",
    background: backColor,
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "ui-serif",
    paddingTop: "8px",
  };
  return (
    <div className="recentHistory">
      <div style={circleStyel} className="customCircle">
        {bloodGroup}
      </div>
      <div className="circleText">
        Los Angeles <br />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default RecentHistory;
