import { Link } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";
import DateMaker from "./dateMaker";
import YearMaker from "./yearMaker";
import DayMaker from "./dayMaker";

const SignUp07 = () => {
  const date = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];
  const year = [
    "...",
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    20,
    21,
    22,
    23,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    "....",
  ];
  const day = [
    "Jun",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [activeDate, setActiveDate] = useState(7);
  const [activeYear, setActiveYear] = useState(10);
  const [activeDay, setActiveDay] = useState(6);

  const dateIndex = [
    activeDate - 2,
    activeDate - 1,
    activeDate,
    activeDate + 1,
    activeDate + 2,
  ];
  const yearIndex = [
    activeYear - 2,
    activeYear - 1,
    activeYear,
    activeYear + 1,
    activeYear + 2,
  ];
  const dayIndex = [activeDay - 1, activeDay, activeDay + 1];
  return (
    <div className="container">
      <div className="signUpPage">
        <div className="row">
          <div className="col-6 customMargin">
            <img src="/Image/SignIn/bloodlogo.png" alt="" width="40%" />
            <br />
            <span>
              Correct birthdate give you best experience with the community.
              Don't hide it.
            </span>
          </div>
          <div className="col-6 customPadding">
            <div className="my-3 headerLarge ">How Old Are You?</div>
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <div className="year">I am</div>
              <YearMaker
                yearIndex={yearIndex}
                year={year}
                activeYear={activeYear}
                setActiveYear={setActiveYear}
              />
              <div className="mb-3 year">years old</div>

              <DateMaker
                dateIndex={dateIndex}
                date={date}
                activeDate={activeDate}
                setActiveDate={setActiveDate}
              />
              <div className=" mb-3 date">date</div>

              <DayMaker
                dayIndex={dayIndex}
                day={day}
                activeDay={activeDay}
                setActiveDay={setActiveDay}
              />
              <div className="month">month</div>
            </div>

            <Link to="/signup/08/">
              <button className=" mt-5 customButton">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp07;
