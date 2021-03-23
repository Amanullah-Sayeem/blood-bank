import { Icon } from "@iconify/react";
// import { Icon, InlineIcon } from '@iconify/react';
import bxHomeAlt from "@iconify-icons/bx/bx-home-alt";
import settingIcon from "@iconify-icons/uil/setting";
import { Link, useHistory } from "react-router-dom";
import "./sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const history = useHistory();
  const data = [
    {
      name: "Home",
      varient: true,
      icon: <Icon icon={bxHomeAlt} />,
      active: false,
      link: "/home/",
    },
    {
      name: "Profile",
      icon: <i class="far fa-user "></i>,
      link: "/profile/",
    },
    {
      name: "Notifications",
      icon: <i class="far fa-bell "></i>,
      link: "/notification/",
    },
    {
      name: "Requests",
      icon: <i class="far fa-map fa-xs"></i>,
      link: "/request/",
    },
    {
      name: "Customize",
      icon: <Icon icon={settingIcon} />,
    },
  ];
  const [sidebarItems, setItems] = useState(data);
  const [active, setActive] = useState(0);

  console.log("heyyyyyyyyy", active);
  return (
    <div className="container">
      <div className="logo mt-5 mb-3 text-center">
        <img src="/Image/logo/welcome.png" width="40%" alt="" />
      </div>
      <div className="">
        {sidebarItems.map((item) => (
          <div
            onClick={() => setActive(sidebarItems.indexOf(item))}
            className="sidebarItem"
          >
            <Link to={item.link} className={item.varient ? "varientColor" : ""}>
              <div
                className={
                  sidebarItems.indexOf(item) === active
                    ? " row activeStyle"
                    : " row"
                }
              >
                <div className="col-2 iconStyle">{item.icon}</div>
                <div className="col ">{item.name}</div>
                <div className="col-1 expandDiv">
                  <div
                    className={
                      sidebarItems.indexOf(item) === active
                        ? " spandStyle"
                        : "d-none"
                    }
                  ></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <img src="/Image/logo/sidebarLogo.png" width="80%" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
