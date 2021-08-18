import { WorkingHoursDTO } from "./workingHoursDTO";

export interface ProviderDTO {
  id: string;
  name: string;
  serviceIds: number[];
  workingHours: WorkingHoursDTO[];
}
