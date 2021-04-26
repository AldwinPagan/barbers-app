import { FC } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Service } from "../models/Service";

interface ServiceCardProps {
  service: Service;
  footer?: Card.TemplateTypes;
  selectedService?: boolean;
  onClick: (serviceId: number) => void;
}
const SelectService: FC<ServiceCardProps> = ({
  service: { id, name },
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
    <Button className=" p-button-text " onClick={() => onClick(id)}>
      <Card
        style={{ width: "15rem", marginBottom: "2em" }}
        header={header}
        className={`${
          selectedService ? "p-shadow-12" : "p-shadow-3"
        } p-m-3 p-col-12 p-lg-3 p-xl-3`}
        key={id}
      >
        <div className="p-card-title" style={{ textAlign: "start" }}>
          {name}
        </div>
      </Card>
    </Button>
  );
};

export default SelectService;
