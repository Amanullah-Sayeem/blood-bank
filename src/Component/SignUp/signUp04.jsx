import { Link } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";

const SignUp04 = () => {
  const [weight, setWeight] = useState("");

  return (
    <div className="container">
      <div className="signUpPage">
        <div className="row">
          <div className="col-6 customMargin">
            <img src="/Image/SignIn/bloodlogo.png" alt="" width="30%" />
            <br />
            <span className="customLabel">
              Note:you can not donate blood if you're under weight. Minimum
              weight for donation required 50KG
            </span>
          </div>
          <div className="col-6 customPadding">
            <div className="my-3 headerLarge ">How Much Do You Weight</div>
            <div className="d-flex justify-content-center">
              <div
                onClick={() => setWeight("50 less")}
                className={
                  weight === "50 less"
                    ? "me-3 weightContainer activeWeight"
                    : "me-3 weightContainer"
                }
              >
                <div className="weightCircle">
                  <div className="weightIcon">
                    <i class="fas fa-arrow-alt-circle-up"></i>
                  </div>
                  <img src="/Image/SignUp/weight.png" alt="" width="100%" />
                  <div className="position-absolute">
                    <i class="ms-2 me-1 mt-4 fas fa-less-than fa-xs"></i>50KG{" "}
                  </div>
                </div>
              </div>
              <div
                onClick={() => setWeight("50 greater")}
                className={
                  weight === "50 greater"
                    ? "me-3 weightContainer activeWeight"
                    : "me-3 weightContainer"
                }
              >
                <div className="weightIcon">
                  <i class="fas fa-arrow-alt-circle-down"></i>
                </div>
                <div className="weightCircle">
                  <img src="/Image/SignUp/weight.png" alt="" width="100%" />
                  <div className="position-absolute">
                    <i class="ms-2 me-1 mt-4 fas fa-greater-than fa-xs"></i>50KG{" "}
                  </div>
                </div>
              </div>
            </div>
            <Link to="/signup/05/">
              {" "}
              <button className=" mt-5 customButton">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp04;
