import "./welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome ">
      <div>
        <img src="/Image/logo/welcome.png" alt="" width="100%" />
      </div>
      <div className="buttonContainer">
        <Link to="/signin/">
          <button className="customButton">Start Journy</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
