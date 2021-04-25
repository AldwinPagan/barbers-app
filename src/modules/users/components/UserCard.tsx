import { FC } from "react";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Chip } from "primereact/chip";

export interface UserProps {
  memberId: string;
  name: string;
  services: ServiceProps[];
}
export interface ServiceProps {
  serviceId: number;
  service: string;
  time?: number;
}

interface UserCardProps extends UserProps {
  footer?: Card.TemplateTypes;
  standOut?: boolean;
}

const UserCard: FC<UserCardProps> = ({
  memberId,
  name,
  services,
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
      style={{ width: "25rem", marginBottom: "2em" }}
      header={header(name)}
      title="Services"
      className={`${
        standOut ? "p-shadow-12" : "p-shadow-3"
      } p-m-3 p-col-12 p-lg-3 p-xl-3`}
      key={memberId}
      footer={footer}
    >
      <div className="p-d-flex p-ai-center p-flex-wrap">
        {services.map(({ service, serviceId }) => (
          <Chip label={service} key={serviceId} className="p-mr-2 p-mb-2" />
        ))}
      </div>
    </Card>
  );
};

export default UserCard;
