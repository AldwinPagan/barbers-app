import { FC, useMemo, useState } from "react";
import { SelectProvider, SelectService } from "./";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Provider } from "../models/Provider";
import { Service } from "../models/Service";
import * as eventOperators from "../redux/operators";
import { EventState } from "../redux/states";
import { RouteComponentProps, useNavigate } from "@reach/router";

interface ProviderAndServiceSelectionProps
  extends eventOperators.IEventOperators,
    RouteComponentProps {
  events: EventState;
}

const ProviderAndServiceSelection: FC<ProviderAndServiceSelectionProps> = (
  props
) => {
  const navigate = useNavigate();
  const [serviceIds, setServiceIds] = useState<number[]>([]);
  const [anyProvider, setAnyProvider] = useState<boolean>(false);
  const [providerId, setProviderId] = useState<string>("");
  const tenantServices = useMemo<Service[]>(
    () => [
      { id: 0, name: "Service 1" },
      { id: 1, name: "Service 2" },
      { id: 2, name: "Service 3" },
      { id: 3, name: "Service 4" },
      { id: 4, name: "Service 5" },
      { id: 5, name: "Service 6" },
    ],
    []
  );
  const providers = useMemo<Provider[]>(
    () => [
      {
        id: "a0da388a-5010-4349-bc8b-d97db90f651d",
        name: "Alan",
        services: [
          { id: 0, name: "Service 1", time: 10 },
          { id: 1, name: "Service 2", time: 20 },
          { id: 2, name: "Service 3", time: 15 },
        ],
      },
      {
        id: "0789825a-1497-41cb-a9db-7711e905b4c2",
        name: "Blake",
        services: [
          { id: 1, name: "Service 2", time: 20 },
          { id: 3, name: "Service 4", time: 60 },
          { id: 4, name: "Service 5", time: 30 },
        ],
      },
      {
        id: "ac209cc3-bfaa-452c-8b4c-252a15cb8a8c",
        name: "Carlos",
        services: [
          { id: 2, name: "Service 3", time: 15 },
          { id: 3, name: "Service 4", time: 20 },
          { id: 5, name: "Service 6", time: 30 },
        ],
      },
    ],
    []
  );
  const onServiceClick = (serviceId: number) => {
    let selectedIds = [...serviceIds];

    if (!selectedIds.includes(serviceId)) selectedIds.push(serviceId);
    else selectedIds.splice(selectedIds.indexOf(serviceId), 1);

    setServiceIds([...selectedIds]);
  };

  const onCheckboxChange = ({ checked }: Checkbox.ChangeParams) => {
    setAnyProvider(checked);
    setProviderId("");
  };

  const onProviderClick = (providerId: string) => {
    setProviderId(providerId);
    setAnyProvider(false);
  };

  const onSubmit = async () => {
    const form = {
      ...props.events.bookingForm,
      serviceIds,
      providerId: providerId ? providerId : null,
      anyProvider,
    };
    props.updateBookingProviderAndServices(form);
    await navigate(`date-and-time-selection`, { state: props.events });
  };
  return (
    <>
      <h2>Choose a Service Provider</h2>
      {!anyProvider && !providerId && (
        <small className="p-error">
          {"Service Provider selection is required"}
        </small>
      )}
      <div className="p-field-checkbox p-invalid">
        <Checkbox
          inputId="anyProvider"
          onChange={onCheckboxChange}
          checked={anyProvider}
        ></Checkbox>
        <label htmlFor="anyProvider" className="p-m-2">
          Select Service Provider for me
        </label>
      </div>
      <div className="p-grid p-justify-start">
        {providers.map((provider) => (
          <SelectProvider
            key={provider.id}
            {...{
              provider,
              disabled: anyProvider,
              selectedProvider: providerId === provider.id,
              onClick: onProviderClick,
            }}
          />
        ))}
      </div>
      <h2>Choose Services</h2>
      {serviceIds.length === 0 && (
        <small className="p-error">{"Services selection is required"}</small>
      )}

      <div className="p-grid p-justify-start">
        {tenantServices.map((service) => (
          <SelectService
            key={service.id}
            {...{
              service,
              selectedService: serviceIds.includes(service.id),
              onClick: onServiceClick,
            }}
          />
        ))}
      </div>
      {/* <Button label="Submit" onClick={onSubmit} /> */}
    </>
  );
};

export default ProviderAndServiceSelection;
