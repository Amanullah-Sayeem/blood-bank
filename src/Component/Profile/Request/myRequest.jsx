import CartMaker from "./Cart/cartMaker";

const MyRequest = (props) => {
  const { myReq } = props;
  return (
    <>
      {myReq.map((it) => (
        <CartMaker
          date={it.date.toDateString()}
          backColor={it.manage ? "#2cbd75" : "#d60d0d"}
          btnText={it.manage ? "Managed" : "Edit"}
          icon={<i class="fas fa-share-alt"></i>}
          bloodGroup={it.blood_group}
          hospital={it.hospital_name}
        />
      ))}
    </>
  );
};

export default MyRequest;
