import { ProviderDTO } from "./providerDTO";
import { ServiceDTO } from "./serviceDTO";
import { WorkingHoursDTO } from "./workingHoursDTO";

export interface TenantDTO{
    id: string;
    name: string
    providers: ProviderDTO[];
    services: ServiceDTO[];
    workingHours: WorkingHoursDTO[];
}