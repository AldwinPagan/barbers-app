import { FC, useMemo } from "react";
import { SelectProvider, SelectService } from "./";
import { Checkbox } from "primereact/checkbox";
import { Provider } from "../models/Provider";
import { Service } from "../models/Service";
import {
  DeepMap,
  FieldError,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useController,
} from "react-hook-form";

interface ProviderAndServiceSelectionProps {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  watch: UseFormWatch<any>;
  errors?: DeepMap<any, FieldError>;
}

const ProviderAndServiceSelection: FC<ProviderAndServiceSelectionProps> = ({
  setValue,
  getValues,
  watch,
  register,
}) => {
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
    let selectedIds: number[] = getValues("serviceIds") ? getValues("serviceIds") : [];
    console.log(`getValues("serviceIds"): ${getValues("serviceIds")}`);
    console.log(`serviceId: ${serviceId}`);
    if (!selectedIds.includes(serviceId)) selectedIds.push(serviceId);
    else selectedIds.splice(selectedIds.indexOf(serviceId), 1);

    setValue("serviceIds", selectedIds);
  };

  const onCheckboxChange = ({ checked }: Checkbox.CheckboxProps) => {
    setValue("providerId", "");
    setValue("anyProvider", checked);
  };

  const onProviderClick = (providerId: string) => {
    setValue("providerId", providerId);
    setValue("anyProvider", false);
  };

  return (
    <>
      <h2>Choose a Service Provider</h2>
      {!getValues("anyProvider") && !getValues("providerId") && (
        <small className="p-error">
          {"Service Provider selection is required"}
        </small>
      )}
      <div className="p-field-checkbox p-invalid">
        <Checkbox
          inputId="anyProvider"
          
          {...register("anyProvider")}
          checked={watch("anyProvider")}
          onChange={onCheckboxChange}
        ></Checkbox>
        <label htmlFor="anyProvider" className="p-m-2">
          Select Service Provider for me
        </label>
      </div>
      <div className="p-grid p-justify-start">
        {providers.map((provider) => (
          <SelectProvider
            {...{
              label: "providerId",
              register: register,
              provider: provider,
              key: provider.id,
              disabled: watch("anyProvider"),
              selectedProvider: watch("providerId") === provider.id,
              onClick: onProviderClick,
              required: !watch("anyProvider"),
            }}
          />
        ))}
      </div>
      <h2>Choose Services</h2>
      {getValues("serviceIds")?.length === 0 && (
        <small className="p-error">{"Services Selection is required"}</small>
      )}

      <div className="p-row p-justify-start">
        {tenantServices.map((service) => (
          <SelectService
            key={service.id}
            {...{
              service,
              selectedService: [...watch("serviceIds")]?.includes(service.id),
              onClick: onServiceClick,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ProviderAndServiceSelection;
