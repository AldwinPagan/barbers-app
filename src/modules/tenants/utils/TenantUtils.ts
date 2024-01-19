import { Day } from "../../../shared/utils/DateUtils";
import { TenantDTO } from "../dtos/tenantDTO";
import { Tenant } from "../models/Tenant";
import { WorkingHours } from "../models/WorkingHours";
import { Provider } from "../models/Provider";
import { Service } from "../models/Service";
import { WorkingHoursDTO } from "../dtos/workingHoursDTO";
import { ProviderDTO } from "../dtos/providerDTO";
import { ServiceDTO } from "../dtos/serviceDTO";

export class TenantUtils {
  public static workingHoursToViewModel(dto: WorkingHoursDTO): WorkingHours {
    return {
      dayNumber: dto.dayNumber,
      from: Day.create(dto.from, Day.WORKING_HOUR_FORMAT),
      to: Day.create(dto.to, Day.WORKING_HOUR_FORMAT),
    };
  }

  public static providerToViewModel(dto: ProviderDTO): Provider {
    return {
      ...dto,
      workingHours: dto.workingHours.map<WorkingHours>(
        TenantUtils.workingHoursToViewModel
      ),
    };
  }

  public static serviceToViewModel(dto: ServiceDTO): Service {
    return {
      ...dto,
    };
  }
  public static toViewModel(dto: TenantDTO): Tenant {
    return {
      id: dto.id,
      name: dto.name,
      providers: dto.providers.map<Provider>(TenantUtils.providerToViewModel),
      services: dto.services.map<Service>(TenantUtils.serviceToViewModel),
      workingHours: dto.workingHours.map(TenantUtils.workingHoursToViewModel),
    };
  }
}
