import { useState } from "react";
import { useHistory } from "react-router";
import { monthToString } from "../../utility/dateConverter";

const DonationContent = (props) => {
  const history = useHistory();
  const user = props.currentUser;
  if (props.activeItem === "Request") {
    history.push("/request/");
  }

  return (
    <div className="container">
      <div className="tabContentStyle">
        {user.donation.donation_info.map((it) => (
          <div className=" my-3 row align-items-center  list-unstyled">
            <div className="col-3">
              <li className="textFade">{monthToString(it.date.getMonth())}</li>
              <li className="textBold extra">{it.date.getDate()}</li>
            </div>
            <div className="col-7">
              <li className="textBold">{it.hospital_name}</li>
              <li className="textFade">
                {it.quantity} <span>Bag Blood</span>
              </li>
            </div>
            <div className="col-2">cal()</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationContent;
