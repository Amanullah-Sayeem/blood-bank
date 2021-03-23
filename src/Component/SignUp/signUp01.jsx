import { Link } from "react-router-dom";
import "./signUp.css";

const SignUp01 = () => {
  return (
    <div className="container">
      <div className="signUpPage">
        <div className="row">
          <div className="col-6 customMargin">
            <img src="/Image/SignIn/bloodlogo.png" alt="" width="30%" /> <br />
            <span>
              Provide your real name for your identity. Your name will be used
              for serch{" "}
            </span>
          </div>
          <div className="col-6">
            <div className="customPadding">
              <div className="my-3 headerLarge  ">Let Us Know About You</div>
              <label htmlFor="username">UserName</label>
              <div className="customInput">
                <input type="text" placeholder="johndhoe" id="username" />
              </div>

              <label htmlFor="email">Email</label>
              <div className="customInput">
                <input type="text" placeholder="jhonboe@gmail.com" id="email" />
              </div>

              <label htmlFor="password">Password</label>
              <div className="customInput">
                <input type="password" placeholder="*****" id="password" />
              </div>

              <Link to="/signup/02/">
                {" "}
                <button className="customButton">Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp01;
