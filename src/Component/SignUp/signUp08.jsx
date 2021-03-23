import { Link } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";

const SignUp08 = () => {
  const handleSubmit = () => {
    window.alert("By Default  User Created for Login");
    localStorage.setItem("user", 1);
  };
  return (
    <div className="container">
      <div className="signUpPage">
        <div className="row">
          <div className="col-6 customMargin">
            <img src="/Image/SignIn/bloodlogo.png" alt="" width="30%" />
            <br />
            <span className="customLabel">
              please do not use a model or doll avarter. Please keep faith on
              yourself you're beautiful too.
            </span>
          </div>
          <div className="col-6 customPadding">
            <div className="my-3 headerLarge ">You're Almost Done</div>
            <div className="d-flex justify-content-center">
              <div className="uploadCircle">
                <div
                  style={{ width: "100%" }}
                  className="position-relative text-center"
                >
                  <input style={{ width: "inherit" }} id="upload" type="file" />

                  <label htmlFor="upload" className="uploadStyle">
                    <i class="fas fa-upload"></i>
                    <div className="text"> Upload a Photo</div>
                  </label>
                </div>
              </div>
            </div>

            <Link to="/home/" onClick={() => window.location.reload()}>
              <button onClick={handleSubmit} className=" mt-5 customButton">
                Start Jurney
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp08;
