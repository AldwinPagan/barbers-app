import { FC } from "react";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Provider } from "../models/Provider";

interface ProviderCardProps {
  provider: Provider;
  footer?: Card.TemplateTypes;
  standOut?: boolean;
}

const ProviderCard: FC<ProviderCardProps> = ({
  provider: { id, name },
  footer,
  standOut = false,
}) => {
  const header = (name: string) => (
    <div className="p-d-flex p-ai-center p-flex-wrap">
      <Avatar
        label={name.substring(0, 1).toUpperCase()}
        size="xlarge"
        className="p-ml-2 p-mt-2"
      />
      <div className="p-ml-5 p-card-title">
        <span>{name}</span>
      </div>
    </div>
  );

  return (
    <Card
      style={{ width: "25rem", marginBottom: "2em", margin: "1em" }}
      header={header(name)}
      className={`${
        standOut ? "p-shadow-12" : "p-shadow-3"
      } p-m-3 p-col-12 p-lg-3 p-xl-3`}
      key={id}
      footer={footer}
    ></Card>
  );
};

export default ProviderCard;
