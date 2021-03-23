import { Link } from "react-router-dom";
import "./signIn.css";

const SignIn = () => {
  return (
    <div className="container">
      <div className="signInPage">
        <div className="row">
          <div className="col-6 customMargin">
            <img src="/Image/SignIn/bloodlogo.png" alt="" width="50%" />
            You have signUp First
          </div>
          <div className="col-6">
            <div className="customPadding">
              <div className="my-3 headerLarge text-center ">Sign In</div>
              <label htmlFor="email">Email or UserName</label>
              <div className="customInput">
                <input
                  type="text"
                  placeholder="johndhoe@gmail.com"
                  id="email"
                />
              </div>

              <label htmlFor="password">Password</label>
              <div className="customInput">
                <input type="password" placeholder="*****" id="password" />
              </div>

              <div className="buttonContainer">
                <Link to="/home/">
                  {" "}
                  <button className="customButton">Login</button>
                </Link>
              </div>

              <div
                style={{ cursor: "pointer" }}
                className="customLabel text-center text-decoration-underline"
              >
                Forget Password ?
              </div>
              <div className="customLabel text-center">
                Don't have an account ? <Link to="/signup/01/">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
