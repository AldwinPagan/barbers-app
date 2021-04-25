import { UserCard } from "../../users/components";
import { RadioButton } from "primereact/radiobutton";
import { UserProps } from "../../users/components/UserCard";
import { FC } from "react";
import { Button } from "primereact/button";

interface SelectedProps extends UserProps {
  disabled: boolean;
  selectedMember: boolean;
  onClick?: () => void;
}
const SelectMember: FC<SelectedProps> = ({
  memberId,
  name,
  services,
  selectedMember = false,
  disabled = false,
  onClick,
}) => {
  const footer = (memberId: string) => (
    <div className="p-field-radiobutton" key={memberId}>
      <RadioButton
        inputId={`member-${memberId}`}
        value={memberId}
        key={memberId}
        checked={selectedMember}
        disabled={disabled}
      />
      <label htmlFor={`member-${memberId}`}>Choose</label>
    </div>
  );

  return (
    <Button className="p-button-text " onClick={onClick}>
      <UserCard
        memberId={memberId}
        name={name}
        services={services}
        key={memberId}
        footer={footer(memberId)}
        standOut={selectedMember}
      ></UserCard>
    </Button>
  );
};

export default SelectMember;
