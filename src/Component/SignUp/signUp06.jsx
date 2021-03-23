import { Link } from "react-router-dom";
import "./signUp.css";

const SignUp06 = () => {
  return (
    <div className="container">
      <div className="signUpPage">
        <div className="row">
          <div className="col-6 customMargin">
            <img src="/Image/SignIn/bloodlogo.png" alt="" width="30%" /> <br />
            <span>
              Please provide correct address.This information will keep safe
            </span>
          </div>
          <div className="col-6 customPadding">
            <div className="my-3 headerLarge">Where Do You Live</div>
            <label htmlFor="streetAddress">Street Address</label>
            <div className="customInput">
              <input
                type="text"
                placeholder="123/4, Saint Road"
                id="streetAddress"
              />
            </div>

            <label htmlFor="city">City</label>
            <div className="customInput">
              <input type="text" placeholder="Dhaka" id="city" />
            </div>

            <label htmlFor="postCode">Postal Code</label>
            <div className="customInput">
              <input type="text" placeholder="xxxx" id="postCode" />
            </div>

            <Link to="/signup/07/">
              <button className="customButton">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp06;
