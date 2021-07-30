import { left, right } from "../../../shared/core/Either";
import { Result } from "../../../shared/core/Result";
import { APIResponse } from "../../../shared/infra/services/ApiResponse";
import { BaseAPI } from "../../../shared/infra/services/BaseAPI";
import { IAuthService } from "../../users/services/authService";
import { Booking } from "../models/Booking";

export interface IAppointmentService {
  bookAppointment(booking: Booking): Promise<APIResponse<void>>;
}

export class AppointmentService extends BaseAPI implements IAppointmentService {
  public constructor(authService: IAuthService) {
    super(authService);
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
