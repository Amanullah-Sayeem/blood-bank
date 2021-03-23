import { Link } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";

const SignUp05 = () => {
  const [gender, setGender] = useState("");

  return (
    <div className="container">
      <div className="signUpPage">
        <div className="row">
          <div className="col-6 customMargin">
            <img src="/Image/SignIn/bloodlogo.png" alt="" width="30%" />
            <br />
            <span className="customLabel">
              Define your gender wi;; let us know bring new features for mothers
              health care
            </span>
          </div>
          <div className="col-6 customPadding">
            <div className="my-3 headerLarge ">Let Know About Your Gender</div>
            <div className="d-flex justify-content-center">
              <div
                onClick={() => setGender("male")}
                className={
                  gender === "male"
                    ? "me-3 weightContainer activeWeight"
                    : "me-3 weightContainer"
                }
              >
                <div className="weightCircle">
                  <img src="/Image/SignUp/weight.png" alt="" width="100%" />
                  <div className="position-absolute">Male</div>
                </div>
              </div>
              <div
                onClick={() => setGender("female")}
                className={
                  gender === "female"
                    ? "me-3 weightContainer activeWeight"
                    : "me-3 weightContainer"
                }
              >
                <div className="weightCircle">
                  <img src="/Image/SignUp/weight.png" alt="" width="100%" />
                  <div className="position-absolute">Female</div>
                </div>
              </div>
            </div>
            <Link to="/signup/06/">
              {" "}
              <button className=" mt-5 customButton">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp05;
