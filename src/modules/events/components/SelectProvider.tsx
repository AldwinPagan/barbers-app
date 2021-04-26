import { RadioButton } from "primereact/radiobutton";
import { FC } from "react";
import { Button } from "primereact/button";
import { Provider } from "../models/Provider";
import ProviderCard from "./ProviderCard";

interface SelectedProps {
  provider: Provider;
  disabled: boolean;
  selectedProvider: boolean;
  onClick: (providerId: string) => void;
}
const SelectProvider: FC<SelectedProps> = ({
  provider,
  selectedProvider = false,
  disabled = false,
  onClick,
}) => {
  const footer = (providerId: string) => (
    <div className="p-field-radiobutton" key={providerId}>
      <RadioButton
        inputId={`member-${providerId}`}
        value={providerId}
        key={providerId}
        checked={selectedProvider}
        disabled={disabled}
      />
      <label htmlFor={`member-${providerId}`}>Choose</label>
    </div>
  );

  return (
    <Button className="p-button-text " onClick={() => onClick(provider.id)}>
      <ProviderCard
        key={provider.id}
        {...{
          provider,
          standOut: selectedProvider,
          footer: footer(provider.id),
        }}
      />
    </Button>
  );
};

export default SelectProvider;
