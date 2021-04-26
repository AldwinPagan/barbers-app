import { FC } from "react";
import { SelectProvider, SelectService } from "./";
import { Checkbox } from "primereact/checkbox";
import { Divider } from "primereact/divider";
import { Provider } from "../models/Provider";
import { Service } from "../models/Service";

interface ProviderAndServiceSelectionProps {
  providers: Provider[];
  services: Service[];
  selectedServiceIds: number[];
  selectedAnyMember: boolean;
  selectedProviderId: string | null;
  onServiceClick: (serviceId: number) => void;
  onServiceChange: (e: Checkbox.ChangeParams) => void;
  onProviderClick: (providerId: string) => void;
}

const ProviderAndServiceSelection: FC<ProviderAndServiceSelectionProps> = ({
  providers,
  services,
  selectedServiceIds,
  selectedAnyMember,
  selectedProviderId,
  onServiceClick,
  onProviderClick,
  onServiceChange,
}) => {
  return (
    <>
      <h2>Choose Services</h2>
      <div className="p-grid p-justify-start">
        {services.map((service) => (
          <SelectService
            key={service.id}
            {...{
              service,
              selectedService: selectedServiceIds.includes(service.id),
              onClick: onServiceClick,
            }}
          />
        ))}
      </div>
      <Divider />
      <h2>Choose a Service Provider</h2>
      <div className="p-field-checkbox">
        <Checkbox
          onChange={onServiceChange}
          checked={selectedAnyMember}
          inputId="selectAny"
          name="selectAny"
        ></Checkbox>
        <label htmlFor="selectAny" className="p-m-2">
          Select Service Provider for me
        </label>
      </div>
      <div className="p-grid p-justify-start">
        {providers.map((provider) => (
          <SelectProvider
            key={provider.id}
            {...{
              provider,
              disabled: selectedAnyMember,
              selectedProvider: selectedProviderId === provider.id,
              onClick: onProviderClick,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ProviderAndServiceSelection;
