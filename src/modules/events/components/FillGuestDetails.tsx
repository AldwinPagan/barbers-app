import { FC } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import {
  EmailInput,
  PhoneNumberInput,
} from "../../../shared/components/text-input";
import { useForm } from "react-hook-form";

interface contactMethod {
  name: string;
  code: string;
}

interface FillGuestDetailsFormValues {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  contactMethod: string;
}
const FillGuestDetails: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FillGuestDetailsFormValues>({ mode: "onTouched" });

  const onSubmit = (data: FillGuestDetailsFormValues) => {
    // TODO: Save on Redux Store
    console.log("FillGuestDetailsFormValues", data);
    // TODO: props.history.push("Next page") check reac-router-dom
  };
  const contactMethods: contactMethod[] = [
    { name: "Text Message", code: "SMS" },
    { name: "Email", code: "Email" },
    { name: "Call", code: "Call" },
  ];
  const NAME_REGEX = /['-\sa-zA-Z]/;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <small className="p-error">{"First Name required"}</small>
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
              <small className="p-error">{"First Name required"}</small>
            )}
          </div>

          <div className="p-field">
            <label
              htmlFor={"email"}
              className={`${errors?.email && "p-error"}`}
            >
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
      </form>
    </>
  );
};

export default FillGuestDetails;
