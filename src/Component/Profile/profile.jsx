import { useParams } from "react-router";
import { user } from "../BackendData/user";
import Topbar from "../Topbar/topbar";
import "./profile.css";
import { useState } from "react";
import TabContent from "./DonationPage/donationContent";

const Profile = () => {
  const badge = [
    {
      name: "Life Saver",
      logo: "/Image/Profile/Badge/lifesaver1.png",
    },
    {
      name: "Life Saver",
      logo: "/Image/Profile/Badge/lifesaver2.png",
    },
    {
      name: "Life Saver",
      logo: "/Image/Profile/Badge/lifesaver3.png",
    },
  ];
  const param = useParams();
  const id = param.id ? param.id : 1;
  const currentUser = user.find((u) => u.id == id);
  // console.log("asasas", currentUser);
  const topbarObj = {
    icon: <i style={{ color: "brown" }} class="fas fa-arrow-left"></i>,
    name: "Profile",
  };
  const tabItem = ["Donation", "Request"];
  const [active, setActive] = useState("Donation"); // const changeActive = it > {};
  if (currentUser) {
    return (
      <div className="profileBody">
        <div className="container">
          <Topbar right={currentUser} left={topbarObj} />
          <div className="row">
            <div className="col-5">
              <div className="infoContainer">
                <div className="imgContainer ">
                  <img
                    className="rounded-2"
                    src={currentUser.image1}
                    alt=""
                    width="100%"
                  />
                  <div className="imgText">
                    <div>{currentUser.name}</div>
                    <div>{currentUser.donation.level}</div>
                  </div>
                  <img
                    className="blood"
                    src="/Image/Profile/blood.png"
                    alt=""
                  />
                </div>
                <div className="my-3 headerLarge">Info</div>
                <div className="profileInfo">{currentUser.info}</div>
                <div className=" my-3 headerLarge">
                  Badge{" "}
                  <span>
                    <img src="/Image/Profile/Badge/withbadge.png" alt="" />
                  </span>
                </div>
                <div className="row">
                  {badge.map((i) => (
                    <div className="col-3 list-unstyled text-center">
                      <img src={i.logo} alt="" width="100%" height="40px" />

                      <li className="profileInfo">{i.name}</li>
                    </div>
                  ))}
                </div>
                <div className="customProgress">
                  <div class="mb-1 progress " style={{ height: "6px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div style={{ color: "red" }}>
                    <span>3</span>
                    <span className=" ms-1 profileInfo">
                      days until you can donate again
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="tabBody infoContainer">
                <div className="container">
                  <div className="row">
                    {tabItem.map((it) => (
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => setActive(it)}
                        className={
                          it === active
                            ? "col-3 me-4 headerLarge fs-6 activeClass"
                            : "col-3 me-4 headerLarge fs-6"
                        }
                      >
                        {it}
                      </div>
                    ))}
                  </div>
                  <TabContent currentUser={currentUser} activeItem={active} />
                </div>
              </div>
              <div className="infoContainer boxShadowNone">
                <div className="container">
                  <div className="row">
                    <div className="pb-3 headerLarge">Badges</div>
                    {badge.map((it) => (
                      <div className="col-3 list-unstyled">
                        <li>
                          <img src={it.logo} alt="" height="40px" width="70%" />
                        </li>
                        <li>{it.name}</li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "sory, there is no data for searched Id";
  }
};

export default Profile;
