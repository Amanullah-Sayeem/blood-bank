import "./notification.css";

const NotifyCart = (props) => {
  const { bloodGroup, clinic, text, time, style, text2, text3 } = props;
  return (
    <div className="mx-5 notifyCart">
      <div className="py-2 row">
        <div className="col-2 d-flex justify-content-end align-items-center">
          <div className="notifyLogo">{bloodGroup}</div>
        </div>
        <div className="col-7">
          {text2 ? (
            <div className="text2">
              <span>{text2}</span> <span>{clinic}</span>
            </div>
          ) : (
            <div className="text">
              <span>{clinic}</span> <span>{text}</span>
            </div>
          )}
        </div>
        <div className="col-3 d-flex align-items-end justify-content-start time">
          {time}
        </div>
      </div>
    </div>
  );
};

export default NotifyCart;
