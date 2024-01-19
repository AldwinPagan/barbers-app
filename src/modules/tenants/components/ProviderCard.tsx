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
    <>
    <div className="p-d-flex p-ai-center p-flex-wrap">
      <Avatar
        label={name.charAt(0).toUpperCase()}
        size="xlarge"
        className="p-ml-2 p-mt-2 p-mr-2"
      />
      <div className="p-card-title">
        <span>{name}</span>
      </div>
    </div>
    </>

  );

  return (
    <Card
      style={{ width: "12rem", marginBottom: "2em", margin: "1em" }}
      header={header(name)}
      className={`${
        standOut ? "p-shadow-12" : "p-shadow-3"
      } p-m-3 p-col-12 p-lg-3 p-xl-3`}
      key={id}
      footer={footer}
    >
      {/* <div className="p-card-title">
        <span>{name}</span>
      </div> */}

    </Card>
  );
};

export default ProviderCard;
