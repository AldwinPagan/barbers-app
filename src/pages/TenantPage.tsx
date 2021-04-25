import { FC, useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { SelectMember, SelectService } from "../modules/events/components";
import { ServiceProps } from "../modules/users/components/UserCard";
import { Checkbox } from "primereact/checkbox";

interface PersonnelProps {
  memberId: string;
  name: string;
  services: ServiceProps[];
}
const TenantPage: FC<PersonnelProps[]> = () => {
  const tenantServices = useMemo<ServiceProps[]>(
    () => [
      { serviceId: 0, service: "Service 1" },
      { serviceId: 1, service: "Service 2" },
      { serviceId: 2, service: "Service 3" },
      { serviceId: 3, service: "Service 4" },
      { serviceId: 4, service: "Service 5" },
    ],
    []
  );
  const personnel = useMemo<PersonnelProps[]>(
    () => [
      {
        memberId: "a0da388a-5010-4349-bc8b-d97db90f651d",
        name: "Arlon",
        services: [
          { serviceId: 0, service: "Service 1", time: 10 },
          { serviceId: 1, service: "Service 2", time: 20 },
          { serviceId: 2, service: "Service 3", time: 15 },
          { serviceId: 3, service: "Service 4", time: 60 },
          { serviceId: 4, service: "Service 5", time: 45 },
        ],
      },
      {
        memberId: "0789825a-1497-41cb-a9db-7711e905b4c2",
        name: "Peter",
        services: [
          { serviceId: 2, service: "Service 3", time: 15 },
          { serviceId: 3, service: "Service 4", time: 60 },
          { serviceId: 4, service: "Service 5", time: 45 },
        ],
      },
    ],
    []
  );
  let { tenantId } = useParams<{ tenantId: string }>();
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [selectedAnyMember, setSelectedAnyMember] = useState<boolean>(false);
  const [services, setServices] = useState<ServiceProps[]>([]);
  const [selectedServiceIds, setselectedServiceIds] = useState<number[]>([]);
  useEffect(() => {
    setServices([...tenantServices]);
  }, [tenantServices]);
  console.log("services", services);
  console.log(selectedServiceIds);

  const onServiceChange = (serviceId: number) => {
    let selectedIds = [...selectedServiceIds];

    if (!selectedIds.includes(serviceId)) selectedIds.push(serviceId);
    else selectedIds.splice(selectedIds.indexOf(serviceId), 1);

    setselectedServiceIds(selectedIds);
  };

  return (
    <>
      <img
        src="https://via.placeholder.com/2040x250?text=Page+Header+Image"
        alt="header"
        style={{ height: "100%", width: "100%" }}
      />
      <h3>{`tenantId: ${tenantId}`}</h3>
      <h2>Choose Services</h2>
      <div className="p-grid p-justify-start">
        {services.map((service) => (
          <SelectService
            {...service}
            key={service.serviceId}
            selectedService={selectedServiceIds.includes(service.serviceId)}
            onClick={() => onServiceChange(service.serviceId)}
          />
        ))}
      </div>

      <h2>Choose Employee</h2>
      <div className="p-field-checkbox">
        <Checkbox
          onChange={(e: Checkbox.ChangeParams) => {
            setSelectedAnyMember(e.checked);
            setSelectedMemberId(null);
          }}
          checked={selectedAnyMember}
          inputId="selectAny"
          name="selectAny"
        ></Checkbox>
        <label htmlFor="selectAny" className="p-m-2">
          Select Employee for me
        </label>
      </div>

      <div className="p-grid p-justify-start">
        {personnel.map((member) => (
          <SelectMember
            {...member}
            key={member.memberId}
            selectedMember={selectedMemberId === member.memberId}
            onClick={() => {
              setSelectedMemberId(member.memberId);
              setSelectedAnyMember(false);
            }}
            disabled={selectedAnyMember}
          />
        ))}
      </div>
    </>
  );
};

export default TenantPage;
