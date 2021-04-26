import { FC, useState } from "react";
import { MenuItem } from "primereact/components/menuitem/MenuItem";
import { Steps } from "primereact/steps";
import { Card } from "primereact/card";
import { ProviderAndServiceSelection } from ".";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Provider } from "../models/Provider";
import { Service } from "../models/Service";
interface BookingProps {
  providers: Provider[];
  services: Service[];
}
interface FormValues {
  providerAndServiceSelection: {
    providerId: string;
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
    contactMethod: "SMS" | "Email" | "Call";
    email?: string;
    phoneNumber?: string;
  };
}
const Booking: FC<BookingProps> = ({ providers, services }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  let { tenantId } = useParams<{ tenantId: string }>();

  const [selectedProviderId, setselectedProviderId] = useState<string | null>(
    null
  );
  const [selectedAnyMember, setSelectedAnyMember] = useState<boolean>(false);
  const [selectedServiceIds, setSelectedServiceIds] = useState<number[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string | null>(null);

  console.log({
    selectedProviderId,
    selectedAnyMember,
    selectedServiceIds,
    activeStepIndex,
  });
  const onServiceClick = (serviceId: number) => {
    let selectedIds = [...selectedServiceIds];

    if (!selectedIds.includes(serviceId)) selectedIds.push(serviceId);
    else selectedIds.splice(selectedIds.indexOf(serviceId), 1);

    setSelectedServiceIds(selectedIds);
  };

  const onServiceChange = ({ checked }: Checkbox.ChangeParams) => {
    setSelectedAnyMember(checked);
    setselectedProviderId(null);
  };

  const onProviderClick = (providerId: string) => {
    setselectedProviderId(providerId);
    setSelectedAnyMember(false);
  };

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
        return <p>Date Selection</p>;
      case 2:
        return <p>Fill Personal Details</p>;
      default:
        return (
          <ProviderAndServiceSelection
            services={services}
            providers={providers}
            onServiceClick={onServiceClick}
            onProviderClick={onProviderClick}
            onServiceChange={onServiceChange}
            selectedAnyMember={selectedAnyMember}
            selectedProviderId={selectedProviderId}
            selectedServiceIds={selectedServiceIds}
          />
        );
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
