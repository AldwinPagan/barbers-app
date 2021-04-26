import { Service } from "./Service";

export interface Provider {
  id: string;
  name: string;
  services: Service[];
}
