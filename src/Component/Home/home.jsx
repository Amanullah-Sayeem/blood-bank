import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./home.css";
// import Map from "./Menu/GoogleMap/map";
import Menu from "./Menu/menu";
import Request from "./Menu/requestHeaders";
import Slide from "./Slider/slide";
import Topbar from "./../Topbar/topbar";
import { useParams } from "react-router";
import { user } from "../BackendData/user";
import AppTwo from "./Menu/GoogleMap/AppTwo";

const Home = () => {
  const param = useParams();
  const id = param.id ? param.id : 1;
  const currentUser = user.find(async (u) => (await u.id) == id);
  const topbarObj = {
    icon: <i style={{ color: "brown" }} class="fas fa-arrow-left"></i>,
    name: "Home",
  };
  // const user = {
  //   location: {
  //     address: "1600 Amphitheatre Parkway, Mountain View, california.",
  //     lat: 37.42216,
  //     lng: -122.08427,
  //   },
  //   zoomLebel: 5,
  // };
  return (
    <div className="body">
      <div className="container">
        <div>
          <Topbar right={currentUser} left={topbarObj} />
        </div>
        <div>
          <Slide />
        </div>

        <div className="row">
          <div className="col-4">
            <div className="my-3 headerLarge">Menu</div>
            <Menu />
            <div className="my-3 headerLarge">Requests</div>
            <Request />
            <div className=" mt-3 statisticGraph">
              <div className="headerSmall">Staistics</div>
              <div className="headerExtra">new Patient</div>
              <img
                style={{ height: "80px" }}
                src="/Image/Statistic/statistic.png"
                alt=""
                width="90%"
              />
            </div>
          </div>
          <div className="col-8">
            <div>Map</div>
            <div>
              <AppTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
