import Welcome from "./Component/WelcomePage/welcome";
import Sidebar from "./Component/Sidebar/sidebar";
import { Route, Switch } from "react-router";
import Home from "./Component/Home/home";
import Profile from "./Component/Profile/profile";
import "./App.css";
import SignIn from "./Component/SignIn/signIn";
import { useState } from "react";
import SignUp08 from "./Component/SignUp/signUp08";
import SignUp01 from "./Component/SignUp/signUp01";
import SignUp02 from "./Component/SignUp/signUp02";
import SignUp03 from "./Component/SignUp/signUp03";
import SignUp04 from "./Component/SignUp/signUp04";
import SignUp05 from "./Component/SignUp/signUp05";
import SignUp06 from "./Component/SignUp/signUp06";
import SignUp07 from "./Component/SignUp/signUp07";
import Notification from "./Component/Profile/Notification/notification";
import RequestPage from "./Component/Profile/Request/requestPage";

const App = () => {
  const user = localStorage.getItem("user");

  const [userLogged, setLogged] = useState(user);

  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      {userLogged ? (
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div style={{ backgroundColor: "#f6f7f9" }} className="col-9">
            <Switch>
              <Route path="/profile/:id?/" component={Profile} />
              <Route path="/request/:id?/" component={RequestPage} />
              <Route path="/notification/:id?/" component={Notification} />
              <Route path="/request/:id?/" component={RequestPage} />

              <Route path="/home/" component={Home} />
            </Switch>
          </div>
        </div>
      ) : (
        <div className="mainBody">
          <Switch>
            <Route path="/signin/" component={SignIn} />
            <Route exact path="/signUp/01/" component={SignUp01} />
            <Route exact path="/signUp/02/" component={SignUp02} />
            <Route exact path="/signUp/03/" component={SignUp03} />
            <Route exact path="/signUp/04/" component={SignUp04} />
            <Route exact path="/signUp/05/" component={SignUp05} />
            <Route exact path="/signUp/06/" component={SignUp06} />
            <Route exact path="/signUp/07/" component={SignUp07} />
            <Route exact path="/signUp/08/" component={SignUp08} />
            <Route path="/" component={Welcome} />
          </Switch>
          <div className="container-fluid">{/* <Welcome /> */}</div>
        </div>
      )}
    </Switch>
  );
};

export default App;

// return (
//   <div className="mainBody">
//     <Route path="/" component={Welcome} />
//     <Route path="/signin/" component={SignIn} />
//     <div className="container-fluid">{/* <Welcome /> */}</div>
//   </div>
// );
