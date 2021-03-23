import "./cart.css";
const CartMaker = (props) => {
  const { date, backColor, btnText, icon, bloodGroup, hospital } = props;
  return (
    <div className="cartEdit">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <div
              style={{ fontSize: "12px", lineHeight: 0 }}
              className="headerLarge"
            >
              Sheduled
            </div>
            <span className="subHead">{date}</span>
          </div>
          <div className="customBtn">
            <button style={{ background: backColor }}>{btnText}</button>
            <span>{icon}</span>
          </div>
        </div>

        <div style={{ marginTop: "-6px" }} className="text-end fw-bold fs-5">
          {bloodGroup}
        </div>
        <div className="d-flex justify-content-between customBorder align-items-center line-under">
          <div className="hospital">
            {hospital} <span className="subHead">3km away</span>
          </div>
          <div className="subHead">1 min ago</div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="subHead">
            <i class="fas fa-map-marker-alt fa-xs"></i>
            <span>21/3,Los Angle CA</span>
          </div>
          <div className="subHead">
            <i class="far fa-user fa-xs"></i>
            <span className="subHead">Brother</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMaker;
