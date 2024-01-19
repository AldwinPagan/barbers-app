import { WorkingHours } from "./WorkingHours";

export interface Provider {
  id: string;
  name: string;
  serviceIds: number[];
  workingHours: WorkingHours[];
}
