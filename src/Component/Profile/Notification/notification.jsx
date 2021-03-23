import { useParams } from "react-router";
import { user } from "../../BackendData/user";
import NotifyCart from "./notifyCart";
import Topbar from "./../../Topbar/topbar";

const Notification = () => {
  const param = useParams();
  const id = param.id ? param.id : 1;
  const currentUser = user.find(async (u) => (await u.id) == id);
  const topbarObj = {
    icon: <i style={{ color: "brown" }} class=" ms-5 fas fa-arrow-left"></i>,
    name: "Notification",
  };
  const iconData = <i class="fas fa-bullhorn"></i>;
  const iconData2 = <img src="/Image/Logo/mike.png" alt="" width="15px" />;
  const iconData3 = <img src="/Image/Logo/expired.png" alt="" width="15px" />;

  return (
    <div>
      <Topbar right={currentUser} left={topbarObj} />
      <div className="row">
        <div className="col-5">
          <NotifyCart
            bloodGroup="A+"
            clinic="Musa Clinic"
            text="Posted a Blood request near you"
            time="1 min ago"
          />
          <NotifyCart
            bloodGroup="A+"
            clinic="Musa Clinic"
            text="Posted a Blood request near you"
            time="1 min ago"
          />
          <NotifyCart
            bloodGroup="A+"
            clinic="Musa Clinic"
            text="Posted a Blood request near you"
            time="1 min ago"
          />

          <div className="mx-5 mt-3 mb-2 yesterday">Yesterday</div>
          <NotifyCart
            bloodGroup={iconData}
            clinic="Musa Clinic"
            text="requested you for O+ blood"
            time="2 days ago"
          />
          <NotifyCart
            bloodGroup={iconData2}
            clinic="Musa Clinic"
            text="earned a new badge"
            time="1 mo ago"
          />
          <div className="mx-5 my-3 mb-2 yesterday">Yesterday</div>
          <NotifyCart
            bloodGroup={iconData2}
            clinic="You"
            text="earned a new badge"
            time="1 mo ago"
          />
        </div>

        <div className="col-5">
          <div className=" mx-5 mb-3 historyStyle">History</div>
          <NotifyCart
            bloodGroup={iconData2}
            clinic="Johnm Adam"
            text2="You accepted the request from"
            time="2 day ago"
          />
          <NotifyCart
            bloodGroup="A+"
            clinic="You"
            text="Posted a blood request for your brother"
            time="1 min ago"
          />
          <div className=" mx-5 mb-3 ">Yesterday</div>{" "}
          <NotifyCart
            bloodGroup={iconData3}
            clinic="You"
            text="Posted a blood request which was expirded"
            time="1 min ago"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
