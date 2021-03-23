import { Link } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";

const SignUp03 = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const bloodList = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  return (
    <div className="container">
      <div className="signUpPage">
        <div className="row">
          <div className="col-6 customMargin">
            <img src="/Image/SignIn/bloodlogo.png" alt="" width="30%" />
            <br />
            <span className="customLabel">
              Please provide correct phone no. This information will be keep
              safe
            </span>
          </div>
          <div className="col-6 customPadding">
            <div className="my-3 headerLarge ">What is Your Blood Group</div>
            <div className="row">
              {bloodList.map((it) => (
                <div className="p-3 col-4">
                  <div
                    onClick={() => setBloodGroup(it)}
                    className={
                      bloodGroup === it
                        ? "bloodCircle activeBlood"
                        : "bloodCircle"
                    }
                  >
                    {it}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/signup/04/">
              <button className=" mt-5 customButton">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp03;
