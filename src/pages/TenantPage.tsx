import { FC } from "react";
import { Booking } from "../modules/events/components";

const TenantPage: FC = () => {


  return (
    <>
      <img
        src="https://via.placeholder.com/2040x250?text=Page+Header+Image"
        alt="header"
        style={{ height: "100%", width: "100%" }}
      />
      <Booking/>
    </>
  );
};

export default TenantPage;
