import { FC } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import {
  EmailInput,
  PhoneNumberInput,
} from "../../../shared/components/text-input";
import {
  DeepMap,
  FieldError,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { useParams } from "@reach/router";

interface contactMethod {
  name: string;
  code: string;
}

interface FillGuestDetailsProps {
  register: UseFormRegister<any>;
  getValues: UseFormGetValues<any>;
  errors?: DeepMap<any, FieldError>;
}

const FillGuestDetails: FC<FillGuestDetailsProps> = ({
  register,
  errors,
  getValues,
}) => {
  const contactMethods: contactMethod[] = [
    { name: "Text Message", code: "SMS" },
    { name: "Email", code: "Email" },
    { name: "Call", code: "Call" },
  ];
  const NAME_REGEX = /['-\sa-zA-Z]/;
  return (
    <>
      <div className="p-fluid">
        <div className="p-field">
          <label
            htmlFor="firstName"
            className={`${errors?.firstName && "p-error"}`}
          >
            First Name
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
            Last Name
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
            Email
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
            Phone Number
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
            How can we reach you better?
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
