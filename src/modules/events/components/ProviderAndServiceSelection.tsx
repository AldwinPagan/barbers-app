import { FC, useMemo } from "react";
import { SelectProvider, SelectService } from "./";
import { Checkbox } from "primereact/checkbox";
import { Divider } from "primereact/divider";
import { Provider } from "../models/Provider";
import { Service } from "../models/Service";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../../../shared/components/buttons";

interface ProviderAndServiceSelectionFormValues {
  providerId: string | null;
  anyProvider?: boolean;
  serviceIds: number[];
}

const ProviderAndServiceSelection: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<ProviderAndServiceSelectionFormValues>({
    defaultValues: { serviceIds: [] },
  });
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
    let selectedIds = watch("serviceIds");

    if (!selectedIds.includes(serviceId)) selectedIds.push(serviceId);
    else selectedIds.splice(selectedIds.indexOf(serviceId), 1);

    setValue("serviceIds", selectedIds);
    console.log(watch("serviceIds"));
  };

  const onCheckboxChange = ({ checked }: Checkbox.ChangeParams) => {
    setValue("anyProvider", checked);
    setValue("providerId", null);
  };

  const onProviderClick = (providerId: string) => {
    setValue("providerId", providerId);
    setValue("anyProvider", false);
  };

  const onSubmit = (data: ProviderAndServiceSelectionFormValues) => {
    // TODO: Save on Redux Store
    console.log("ProviderAndServiceSelection", data);
    // TODO: props.history.push("Next page") check reac-router-dom
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Choose Services</h2>
        <div className="p-grid p-justify-start">
          {tenantServices.map((service) => (
            <SelectService
              key={service.id}
              {...{
                service,
                selectedService: getValues("serviceIds")?.includes(service.id),
                onClick: onServiceClick,
              }}
              {...(register("serviceIds"))}
            />
          ))}
        </div>
        <h2>Choose a Service Provider</h2>
        <div className="p-field-checkbox p-invalid">
          <Checkbox
            inputId="anyProvider"
            {...register("anyProvider")}
            onChange={onCheckboxChange}
            checked={watch("anyProvider")}
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
                disabled: watch("anyProvider"),
                selectedProvider: getValues("providerId") === provider.id,
                ...register("providerId"),
                onClick: onProviderClick,
              }}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default ProviderAndServiceSelection;
