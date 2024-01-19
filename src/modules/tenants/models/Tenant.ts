import { Provider } from "./Provider";
import { Service } from "./Service";
import { WorkingHours } from "./WorkingHours";

export interface Tenant {
  id: string;
  name: string;
  providers: Provider[];
  services: Service[];
  workingHours: WorkingHours[];
}
