import { FC } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { ServiceProps } from "../../users/components/UserCard";

interface ServiceCardProps extends ServiceProps {
  footer?: Card.TemplateTypes;
  selectedService?: boolean;
  onClick: () => void;
}
const SelectService: FC<ServiceCardProps> = ({
  serviceId,
  service,
  selectedService = false,
  onClick,
}) => {
  const header: Card.TemplateTypes = (serviceId: string) => (
    <div className="p-field-checkbox" key={serviceId}>
      <Checkbox
        inputId={`service-${serviceId}`}
        value={serviceId}
        key={serviceId}
        checked={selectedService}
      />
    </div>
  );

  return (
    <Button className=" p-button-text " onClick={onClick}>
      <Card
        title={service}
        style={{ width: "15rem", marginBottom: "2em" }}
        header={header}
        className={`${
          selectedService ? "p-shadow-12" : "p-shadow-3"
        } p-m-3 p-col-12 p-lg-3 p-xl-3`}
        key={serviceId}
      ></Card>
    </Button>
  );
};

export default SelectService;
