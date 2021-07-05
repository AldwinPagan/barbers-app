import { FC, useState } from "react";
import { MenuItem } from "primereact/components/menuitem/MenuItem";
import { Steps } from "primereact/steps";
import { Divider } from "primereact/divider";
import { Card } from "primereact/card";
import {
  ProviderAndServiceSelection,
  FillGuestDetails,
  DateAndTimeSelection,
} from ".";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EventState } from "../redux/states";
import * as eventOperators from "../redux/operators";
import {
  RouteComponentProps,
  useParams,
  Router,
  Redirect,
} from "@reach/router";

interface BookingProps
  extends eventOperators.IEventOperators,
    RouteComponentProps {
  events: EventState;
}
const Booking: FC<BookingProps> = (props) => {
  let { tenantId } = useParams();

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  console.log("Booking Component", {
    props,
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
      label: "Choose Services and Provider",
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
        return <DateAndTimeSelection {...props}/>;
      case 2:
        return <FillGuestDetails {...props}/>;
      case 0:
      default:
        return <ProviderAndServiceSelection {...props}/>;
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
        <div className="p-grid p-justify-start">
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
              label={"Next"}
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
