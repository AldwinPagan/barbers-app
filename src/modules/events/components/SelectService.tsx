import { createRef, FC, forwardRef, RefObject } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Service } from "../models/Service";
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectServiceProps {
  service: Service;
  selectedService?: boolean;
  onClick: (serviceId: number) => void;
}
const SelectService: FC<SelectServiceProps> = ({
  service: { id, name },
  selectedService = false,
  onClick,
}) => {
  const header: Card.TemplateTypes = (serviceId: string) => (
    <div className="p-field-checkbox" key={serviceId}>
      <Checkbox
        inputId={`service-${serviceId}`}
        value={serviceId}
        key={serviceId}
        checked={selectedService}
      />
    </div>
  );

  return (
    <>
      <Button
        className=" p-button-text"
        type="button"
        onClick={() => {
          onClick(id);
        }}
      >
        <Card
          style={{ width: "15rem", marginBottom: "2em" }}
          header={header}
          className={`${
            selectedService ? "p-shadow-12" : "p-shadow-3"
          } p-m-3 p-col-12 p-lg-3 p-xl-3`}
          key={id}
        >
          <div className="p-card-title" style={{ textAlign: "start" }}>
            {name}
          </div>
        </Card>
      </Button>
      {/* <ForwardRefSelectService onClick={onClick} service={service} ref={ref} /> */}
    </>
  );
};

// const ForwardRefSelectService = forwardRef<UseFormRegisterReturn, SelectServiceProps>(
//   ({ onClick, service: { id, name }, selectedService }, ref) => (
//     <Button
//       className=" p-button-text"
//       type="button"
//       onClick={() => onClick(id)}
//       {...ref}
//     >
//       <Card
//         style={{ width: "15rem", marginBottom: "2em" }}
//         className={`${
//           selectedService ? "p-shadow-12" : "p-shadow-3"
//         } p-m-3 p-col-12 p-lg-3 p-xl-3`}
//         key={id}
//       >
//         <div className="p-card-header">
//           <div className="p-d-flex p-ai-center p-flex-wrap">
//             <div className="p-field-checkbox" key={id}>
//               <Checkbox
//                 inputId={`service-${id}`}
//                 value={id}
//                 key={id}
//                 checked={selectedService}
//                 className="p-align-center"
//               />
//             </div>
//             <div className="p-ml-5 p-card-title" style={{ textAlign: "start" }}>
//               {name}
//             </div>
//           </div>
//         </div>
//       </Card>
//     </Button>
//   )
// );

export default SelectService;
