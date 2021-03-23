import { useParams } from "react-router";
import { user } from "../../BackendData/user";
import Request from "../../Home/Menu/requestHeaders";
import Topbar from "../../Topbar/topbar";
import MyRequest from "./myRequest";
import RecentRequest from "./recentRequest";
import RequestForm from "./requestForm";
import UrgentRequest from "./urgentRequest";
import "./requestPage.css";
import RecentHistory from "./recentHistory";

const RequestPage = () => {
  const param = useParams();
  const id = param.id ? param.id : 1;
  const currentUser = user.find(async (u) => (await u.id) == id);
  const topbarObj = {
    icon: <i style={{ color: "brown" }} class="fas fa-arrow-left"></i>,
    name: "Request",
  };

  const urgentReq = currentUser.request_info.filter(
    (obj) => obj.req_type === "urgent_req"
  );

  const myReq = currentUser.request_info.filter(
    (obj) => obj.req_type === "my_req"
  );

  const recentReq = currentUser.request_info.slice(-4);

  if (urgentReq && myReq) {
    return (
      <div className="container">
        <Topbar right={currentUser} left={topbarObj} />
        <div className="row">
          <div className="col-4">
            <Request />
            <div id="urgent_req" className="my-2  requestHeader">
              Urgent Request
            </div>
            <UrgentRequest urgentReq={urgentReq} />
            <div id="my_req" className="my-2 requestHeader">
              My Requests
            </div>
            <MyRequest myReq={myReq} />
          </div>
          <div className="col-8">
            <div id="post_req" className="my-2 requestHeader">
              Blood Request
            </div>
            <div className="row">
              <div className="col-6">
                <RequestForm />
              </div>
              <div className="col-6">
                <div className="my-2 requestHeader">Recent History</div>
                <div className="row">
                  {recentReq.map((it) => (
                    <div className="col-6">
                      <RecentHistory
                        bloodGroup={it.blood_group}
                        text={
                          it.req_type == "scheduled" ? "Scheduled" : "Urgent"
                        }
                        backColor={
                          it.req_type == "scheduled" ? "blue" : "#d60d0d"
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-2 requestHeader">Recent Requests</div>
            <RecentRequest recentReq={recentReq} />
          </div>
        </div>
      </div>
    );
  } else {
    return "loading";
  }
};

export default RequestPage;
