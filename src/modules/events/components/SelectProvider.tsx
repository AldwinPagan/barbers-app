import { RadioButton } from "primereact/radiobutton";
import { FC } from "react";
import { Button } from "primereact/button";
import { Provider } from "../models/Provider";
import ProviderCard from "./ProviderCard";
import { Path, UseFormRegister } from "react-hook-form";

interface SelectProviderProps {
  provider: Provider;
  disabled?: boolean;
  selectedProvider?: boolean;
  onClick: (providerId: string) => void;
  label: Path<any>;
  register: UseFormRegister<any>;
  required?: boolean;
}
const SelectProvider: FC<SelectProviderProps> = ({
  provider,
  selectedProvider = false,
  disabled = false,
  onClick,
  label,
  register,
  required = true,
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
    <Button
      className="p-button-text"
      type="button"
      onClick={() => onClick(provider.id)}
      {...register(label, {
        required: required && "Provider35 selection is required Selection is Required",
      })}
    >
      
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
