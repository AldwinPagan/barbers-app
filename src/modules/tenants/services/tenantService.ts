import { left, right } from "../../../shared/core/Either";
import { Result } from "../../../shared/core/Result";
import { APIResponse } from "../../../shared/infra/services/ApiResponse";
import { BaseAPI } from "../../../shared/infra/services/BaseAPI";
import { IAuthService } from "../../users/services/authService";
import { Booking } from "../models/Booking";
import { Tenant } from "../models/Tenant";
import { TenantUtils } from "../utils/TenantUtils";

export interface ITenantService {
  getTenant(tenantId: string): Promise<APIResponse<Tenant>>;
}

export class TenantService extends BaseAPI implements ITenantService {
  public constructor(authService: IAuthService) {
    super(authService);
  }
  public async getTenant(tenantId: string): Promise<APIResponse<Tenant>> {
    try {
      const response = await this.get(`/tenant/${tenantId}`);

      return right(
        Result.ok<Tenant>(TenantUtils.toViewModel(response.data))
      );
    } catch (err) {
      return left(
        err.response ? err.response.data.message : "Connection failed"
      );
    }
  }
  public async bookAppointment(booking: Booking): Promise<APIResponse<void>> {
    try {
      console.log(booking);
      await this.post("event/createAppointment", booking);
      return right(Result.ok<void>());
    } catch (error) {
      return left(
        error.response ? error.response.data.message : "Connection failed"
      );
    }
  }
}
