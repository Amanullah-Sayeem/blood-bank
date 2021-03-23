const RequestHeaders = () => {
  const menuItems = [
    {
      name: "Urgent Request",
      image: "/Image/Request/urgent.png",
      badge: 1,
      link: "#urgent_req",
    },
    {
      name: "My Request",
      image: "/Image/Request/my.png",
      badge: 2,
      link: "#my_req",
    },
    {
      name: "Post Request",
      image: "/Image/Request/post.png",
      badge: 0,
      link: "#post_req",
    },
  ];

  return (
    <div className="row">
      {menuItems.map((item) => (
        <div className=" col-3 text-center list-unstyled">
          <li
            style={{ cursor: "pointer" }}
            className={
              item.badge > 0 ? "imageBox position-relative" : "imageBox"
            }
          >
            <img src={item.image} alt="" width="100%" />
            <span
              className={
                item.badge > 0 ? " customBadge position-absolute" : "d-none"
              }
            >
              {item.badge}
            </span>
          </li>
          <li className="headerMedium">{item.name}</li>
        </div>
      ))}
    </div>
  );
};

export default RequestHeaders;
