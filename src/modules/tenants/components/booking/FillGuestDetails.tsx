import { FC } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import {
  EmailInput,
  PhoneNumberInput,
} from "../../../../shared/components/text-input";
import {
  DeepMap,
  FieldError,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { useParams } from "@reach/router";
import { Booking } from "../../models/Booking";

interface contactMethod {
  name: string;
  code: string;
}

interface FillGuestDetailsProps<T> {
  register: UseFormRegister<T>;
  getValues: UseFormGetValues<T>;
  setValue: UseFormSetValue<T>;
  watch: UseFormWatch<T>;
  errors?: DeepMap<T, FieldError>;
}

const FillGuestDetails: FC<FillGuestDetailsProps<Booking>> = ({
  register,
  errors,
  getValues,
  setValue,
  watch
  
}) => {
  const contactMethods: contactMethod[] = [
    { name: "Mensaje de texto", code: "SMS" },
    { name: "Correo electrónico", code: "Email" },
    { name: "Llamada", code: "Call" },
  ];
  const NAME_REGEX = /['-\sa-zA-Z]/;

  const onContactMethodChange = (e: Dropdown.ChangeParams) =>{
    setValue("contactMethod", e.value);
  }
  return (
    <>
      <h2>Complete los datos personales</h2>
      <div className="p-fluid">
        <div className="p-field">
          <label
            htmlFor="firstName"
            className={`${errors?.firstName && "p-error"}`}
          >
            Nombre
          </label>
          <InputText
            id="firstName"
            type="text"
            keyfilter={NAME_REGEX}
            placeholder="First Name"
            className={`${errors?.firstName && "p-invalid"}`}
            {...register("firstName", {
              required: "First Name is required",
            })}
          />
          {errors?.firstName && (
            <small className="p-error">{errors?.firstName.message}</small>
          )}
        </div>
        <div className="p-field">
          <label
            htmlFor={"lastName"}
            className={`${errors?.lastName && "p-error"}`}
          >
            Apellido(s)
          </label>
          <InputText
            id="lastName"
            type="text"
            keyfilter={NAME_REGEX}
            placeholder="Last Name"
            className={`${errors?.lastName && "p-invalid"}`}
            {...register("lastName", {
              required: "Last Name is required",
            })}
          />
          {errors?.lastName && (
            <small className="p-error">{errors?.lastName.message}</small>
          )}
        </div>

        <div className="p-field">
          <label htmlFor={"email"} className={`${errors?.email && "p-error"}`}>
            Correo electrónico
          </label>
          <EmailInput
            label={"email"}
            register={register}
            errors={errors?.email}
            required={getValues("contactMethod") === "Email"}
          />
        </div>
        <div className="p-field">
          <label
            htmlFor={"phoneNumber"}
            className={`${errors?.phoneNumber && "p-error"}`}
          >
            Número de telefono
          </label>
          <PhoneNumberInput
            label={"phoneNumber"}
            register={register}
            errors={errors?.phoneNumber}
            required={getValues("contactMethod") !== "Email"}
          />
        </div>
        <div className="p-field">
          <label
            htmlFor={"contactMethod"}
            className={`${errors?.contactMethod && "p-error"}`}
          >
            ¿Cómo prefiere ser contactado?
          </label>
          <Dropdown
            id={"contactMethod"}
            placeholder="Select One"
            optionLabel="name"
            optionValue="code"
            options={contactMethods}
            className={`${errors?.contactMethod && "p-invalid"}`}
            {...register("contactMethod", {
              required: "Contact Method is required",
            })}
            onChange={onContactMethodChange}
            value={watch("contactMethod")}
          />
          {errors?.contactMethod && (
            <small className="p-error">{errors?.contactMethod.message}</small>
          )}
        </div>
      </div>
    </>
  );
};

export default FillGuestDetails;
