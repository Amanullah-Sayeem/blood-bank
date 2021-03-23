import { Link } from "react-router-dom";
import "./signUp.css";

const SignUp02 = () => {
  return (
    <div className="container">
      <div className="signUpPage">
        <div className="row">
          <div className="col-6 customMargin ">
            <img src="/Image/SignIn/bloodlogo.png" alt="" width="30%" /> <br />
            <span>
              Please provide correct phone no. This information will be keep
              safe
            </span>
          </div>
          <div className="col-6 customPadding">
            <div className="my-3 headerLarge">Contact Information</div>
            <label htmlFor="phone_number">Phone No</label>
            <div className="customInput">
              <input type="text" placeholder="018" id="phone_number" />
            </div>

            <label htmlFor="phone_number_2">Alternative Phone No</label>
            <div className="customInput">
              <input type="text" placeholder="017" id="phone_number_2" />
            </div>

            <label htmlFor="social">Social(Optinal)</label>
            <div className="customInput">
              <input type="text" placeholder="https:/" id="social" />
            </div>

            <Link to="/signup/03/">
              <button className="customButton">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp02;
