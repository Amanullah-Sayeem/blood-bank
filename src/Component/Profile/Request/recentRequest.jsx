import CartMaker from "./Cart/cartMaker";

const RecentRequest = (props) => {
  const { recentReq } = props;
  return (
    <div className="row">
      {recentReq.map((it) => (
        <div className="col-6">
          <CartMaker
            date={it.date.toDateString()}
            backColor={it.manage ? "#2cbd75" : "#d60d0d"}
            btnText={it.manage ? "Managed" : "Edit"}
            icon={<i class="fas fa-share-alt"></i>}
            bloodGroup={it.blood_group}
            hospital={it.hospital_name}
          />
        </div>
      ))}
    </div>
  );
};

export default RecentRequest;
