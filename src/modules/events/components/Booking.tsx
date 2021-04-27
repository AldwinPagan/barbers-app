import { FC, useState } from "react";
import { MenuItem } from "primereact/components/menuitem/MenuItem";
import { Steps } from "primereact/steps";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

import {
  ProviderAndServiceSelection,
  FillGuestDetails,
  DateAndTimeSelection,
} from ".";
import { Button } from "primereact/button";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
interface FormValues {
  providerAndServiceSelection: {
    providerId: string | null;
    anyMemberSelected?: boolean;
    serviceIds: number[];
  };

  dateAndTimeSelection: {
    date: Date;
    time: string;
  };

  personalInformation: {
    firstName: string;
    lastName: string;
    contactMethod: string;
    email?: string;
    phoneNumber?: string;
  };
}
const Booking: FC = () => {
  const // {
    //   register,
    //   handleSubmit,
    //   setValue,
    //   getValues,
    //   formState: { errors },
    // }
    bookingForm = useForm<FormValues>({ mode: "onTouched" });

  let { tenantId } = useParams<{ tenantId: string }>();

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  console.log({
    activeStepIndex,
  });

  const onNextClick = () => {
    setActiveStepIndex(
      activeStepIndex < 3 ? activeStepIndex + 1 : activeStepIndex
    );
  };

  const onPreviousClick = () => {
    setActiveStepIndex(
      activeStepIndex > 0 ? activeStepIndex - 1 : activeStepIndex
    );
  };
  const items: MenuItem[] = [
    {
      label: "Choose Service and Provider",
    },
    {
      label: "Choose Date and Time",
    },
    {
      label: "Fill in Personal Details",
    },
  ];
  const renderSwitch = (index: number): JSX.Element => {
    switch (index) {
      case 1:
        return <DateAndTimeSelection />;
      case 2:
        return <FillGuestDetails />;
      default:
        return <ProviderAndServiceSelection />;
    }
  };

  return (
    <>
      <Card
        className="p-shadow-10 p-d-block p-mx-auto p-mt-6"
        style={{ width: "75%" }}
      >
        <Steps
          model={items}
          activeIndex={activeStepIndex}
          onSelect={(e) => setActiveStepIndex(e.index)}
          readOnly={true}
        />
        {renderSwitch(activeStepIndex)}
        <Divider />
        <div className="p-grid p-justify-start ">
          {activeStepIndex > 0 && (
            <Button
              label="Previous"
              className="p-m-3"
              onClick={() => {
                onPreviousClick();
              }}
            />
          )}
          {activeStepIndex < 2 && (
            <Button
              label="Next"
              className="p-m-3"
              onClick={() => {
                onNextClick();
              }}
            />
          )}
          {activeStepIndex === 2 && (
            <Button
              label="Submit"
              className="p-m-3"
              onClick={() => {
                onNextClick();
              }}
            />
          )}
        </div>
      </Card>
    </>
  );
};

export default Booking;
