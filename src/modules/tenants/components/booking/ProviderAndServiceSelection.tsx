import { FC, useMemo } from "react";
import SelectProvider from "../SelectProvider";
import SelectService from "../SelectService";import { Checkbox } from "primereact/checkbox";
import {
  DeepMap,
  FieldError,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { Booking } from "../../models/Booking";
import { Day } from "../../../../shared/utils/DateUtils";
import { Tenant } from "../../models/Tenant";
interface ProviderAndServiceSelectionProps<T> {
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  getValues: UseFormGetValues<T>;
  watch: UseFormWatch<T>;
  errors?: DeepMap<T, FieldError>;
}

const ProviderAndServiceSelection: FC<
  ProviderAndServiceSelectionProps<Booking>
> = ({ setValue, getValues, watch, register }) => {
  const tenant = useMemo<Tenant>((): Tenant => {
    return {
      id: "849297ed-eae1-4220-8d88-395af9e7987e",
      name: "CEO Barbershop",
      services: [
        { id: 0, name: "Service 1" },
        { id: 1, name: "Service 2" },
        { id: 2, name: "Service 3" },
        { id: 3, name: "Service 4" },
        { id: 4, name: "Service 5" },
        { id: 5, name: "Service 6" },
      ],
      providers: [
        {
          id: "a0da388a-5010-4349-bc8b-d97db90f651d",
          name: "John",
          serviceIds: [0, 1, 2],
          workingHours: [
            {
              dayNumber: 1,
              from: Day.create("08:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("05:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 0,
              from: Day.create("08:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("05:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 4,
              from: Day.create("08:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("05:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 5,
              from: Day.create("08:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("05:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 6,
              from: Day.create("08:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("05:00 PM", Day.WORKING_HOUR_FORMAT),
            },
          ],
        },
        {
          id: "0789825a-1497-41cb-a9db-7711e905b4c2",
          name: "Jose",
          serviceIds: [1, 3, 4],
          workingHours: [
            {
              dayNumber: 0,
              from: Day.create("09:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 3,
              from: Day.create("09:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 4,
              from: Day.create("09:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 5,
              from: Day.create("09:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 6,
              from: Day.create("09:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00 PM", Day.WORKING_HOUR_FORMAT),
            },
          ],
        },
        {
          id: "ac209cc3-bfaa-452c-8b4c-252a15cb8a8c",
          name: "Carlos",
          serviceIds: [2, 3, 5],
          workingHours: [
            {
              dayNumber: 1,
              from: Day.create("10:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 2,
              from: Day.create("10:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 3,
              from: Day.create("10:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 4,
              from: Day.create("10:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 5,
              from: Day.create("10:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00PM", Day.WORKING_HOUR_FORMAT),
            },
          ],
        },
        {
          id: "347618b4-52d4-4a52-8139-27d846c58869",
          name: "Charlie",
          serviceIds: [1, 2, 3],
          workingHours: [
            {
              dayNumber: 0,
              from: Day.create("08:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 1,
              from: Day.create("08:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 2,
              from: Day.create("08:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 3,
              from: Day.create("08:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 4,
              from: Day.create("08:00 AM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("06:00 PM", Day.WORKING_HOUR_FORMAT),
            },
          ],
        },
        {
          id: "695759eb-de23-4b74-bede-967ee3c2d070",
          name: "Joseph",
          serviceIds: [2, 3, 4],
          workingHours: [
            {
              dayNumber: 2,
              from: Day.create("12:00 PM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("04:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 3,
              from: Day.create("12:00 PM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("04:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 4,
              from: Day.create("12:00 PM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("04:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 5,
              from: Day.create("12:00 PM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("04:00 PM", Day.WORKING_HOUR_FORMAT),
            },
            {
              dayNumber: 6,
              from: Day.create("12:00 PM", Day.WORKING_HOUR_FORMAT),
              to: Day.create("04:00 PM", Day.WORKING_HOUR_FORMAT),
            },
          ],
        },
      ],
      workingHours: [
        {
          dayNumber: 2,
          from: Day.create("09:00 AM", Day.WORKING_HOUR_FORMAT),
          to: Day.create("05:00 PM", Day.WORKING_HOUR_FORMAT),
        },
        {
          dayNumber: 3,
          from: Day.create("09:00 AM", Day.WORKING_HOUR_FORMAT),
          to: Day.create("05:00 PM", Day.WORKING_HOUR_FORMAT),
        },
        {
          dayNumber: 4,
          from: Day.create("09:00 AM", Day.WORKING_HOUR_FORMAT),
          to: Day.create("05:00 PM", Day.WORKING_HOUR_FORMAT),
        },
        {
          dayNumber: 5,
          from: Day.create("09:00 AM", Day.WORKING_HOUR_FORMAT),
          to: Day.create("05:00 PM", Day.WORKING_HOUR_FORMAT),
        },
        {
          dayNumber: 6,
          from: Day.create("09:00 AM", Day.WORKING_HOUR_FORMAT),
          to: Day.create("05:00 PM", Day.WORKING_HOUR_FORMAT),
        },
      ],
    };
  }, []);
  const onServiceClick = (serviceId: number) => {
    let selectedIds: number[] = getValues("serviceIds")
      ? getValues("serviceIds")
      : [];
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
      <h2>Seleccione su barbero</h2>
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
        />
        <label htmlFor="anyProvider" className="p-m-2">
          Eligelo por mi
        </label>
      </div>
      <div className="p-grid p-justify-start">
        {tenant.providers.map((provider) => (
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
      <h2>Escoja servicios</h2>
      {getValues("serviceIds")?.length === 0 && (
        <small className="p-error">{"Services Selection is required"}</small>
      )}

      <div className="p-row p-justify-start">
        {tenant.services.map((service) => (
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
