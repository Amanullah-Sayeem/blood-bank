import CartMaker from "./Cart/cartMaker";

const UrgentRequest = (props) => {
  const { urgentReq } = props;
  return (
    <>
      {urgentReq.map((it) => (
        <CartMaker
          date={it.date.toDateString()}
          backColor={"#d60d0d"}
          btnText="Contact"
          icon={<i class="fas fa-share-alt"></i>}
          bloodGroup={it.blood_group}
          hospital={it.hospital_name}
        />
      ))}
    </>
  );
};

export default UrgentRequest;
