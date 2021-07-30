import { FC, useState } from "react";
import { MenuItem } from "primereact/components/menuitem/MenuItem";
import { Steps } from "primereact/steps";
import { Divider } from "primereact/divider";
import {
  ProviderAndServiceSelection,
  FillGuestDetails,
  DateAndTimeSelection,
} from ".";
import { Button } from "primereact/button";
import { bindActionCreators } from "redux";
import { EventState } from "../redux/states";
import * as eventOperators from "../redux/operators";
import { RouteComponentProps, useParams } from "@reach/router";

import { useForm } from "react-hook-form";
import { Booking as BookingModel } from "../models/Booking";

interface BookingProps extends RouteComponentProps {
  submitBooking: (booking: BookingModel) => void;
  events: EventState;
}

const Booking: FC<BookingProps> = (props) => {
  let { tenantId } = useParams();
  const {
    trigger,
    register,
    setValue,
    getValues,
    watch,
    handleSubmit,

    formState: { errors },
    control,
  } = useForm<BookingModel>({
    mode: "onChange",
    defaultValues: {
      serviceIds: [],
    },
  });

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  console.log("Booking Component", getValues());

  const onNextClick = async () => {
    const isStepValid = await trigger();
    if (isStepValid)
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
      label: "Choose Services and Provider",
    },
    {
      label: "Choose Date and Time",
    },
    {
      label: "Fill in Personal Details",
    },
  ];

  const onSubmit = (data: BookingModel) => {
    const form = {
      // ...props.events.bookingForm,
      ...data,
      tenantId,
    };
    props.submitBooking(form);
    // console.log("Fill  Guest Details", { ...props.events.bookingForm });
  };

  const renderSwitch = (index: number): JSX.Element => {
    switch (index) {
      case 1:
        return <DateAndTimeSelection {...props} />;
      case 2:
        return <FillGuestDetails {...{ getValues, register, errors }} />;
      case 0:
      default:
        return (
          <ProviderAndServiceSelection
            {...{
              getValues,
              register,
              setValue,
              watch,
            }}
          />
        );
    }
  };

  return (
    <>
      <div className="p-d-none p-d-md-inline">
        <Steps
          model={items}
          activeIndex={activeStepIndex}
          onSelect={(e) => setActiveStepIndex(e.index)}
          readOnly={true}
        />
      </div>

      {/* <form action="" method="post"> */}
      {renderSwitch(activeStepIndex)}
      <Divider />
      <div className="p-d-flex p-p">
        <Button
          label="Previous"
          disabled={activeStepIndex < 1}
          className="p-m-3"
          onClick={() => {
            onPreviousClick();
          }}
        />

        {activeStepIndex < 2 ? (
          <Button
            label={"Next"}
            disabled={activeStepIndex >= 2}
            className="p-m-3"
            onClick={async () => {
              await onNextClick();
            }}
          />
        ) : (
          <Button
            label="Submit"
            disabled={activeStepIndex !== 2}
            className="p-my-3 p-ml-auto"
            onClick={handleSubmit(onSubmit)}
          />
        )}
      </div>

      {/* </form> */}
    </>
  );
};

function mapStateToProps({ events }: { events: EventState }) {
  return {
    events,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      ...eventOperators,
    },
    dispatch
  );
}
export default Booking;
