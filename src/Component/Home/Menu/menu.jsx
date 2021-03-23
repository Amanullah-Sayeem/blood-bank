import "./menu.css";

const Menu = () => {
  const menuItems = [
    {
      name: "Book",
      image: "/Image/Menu/book.png",
      badge: 0,
    },
    {
      name: "Donation",
      image: "/Image/Menu/donations.png",
      badge: 2,
    },
    {
      name: "Donors",
      image: "/Image/Menu/donors.png",
      badge: 5,
    },
    {
      name: "My lists",
      image: "/Image/Menu/mylist.png",
      badge: 0,
    },
  ];

  return (
    <div className=" row">
      {menuItems.map((item) => (
        <div className=" col-3 text-center list-unstyled">
          <li
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

export default Menu;
