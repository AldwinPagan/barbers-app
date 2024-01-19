import { Booking } from "../models/Booking";
import { Tenant } from "../models/Tenant";

export interface TenantState {
  isFillingBookingForm: boolean;
  isBookingSuccess: boolean;
  isBookingFailure: boolean;

  isGettingTenantById: boolean;
  isGettingTenantByIdSuccess: boolean;
  isGettingTenantByIdFailure: boolean;

  bookingForm: Booking | {};
  tenant: Tenant | {};
  error: string;
}

const initialEventState: TenantState = {
  isFillingBookingForm: false,
  isBookingSuccess: false,
  isBookingFailure: false,

  isGettingTenantById: false,
  isGettingTenantByIdSuccess: false,
  isGettingTenantByIdFailure: false,
  bookingForm: {},
  tenant: {},
  error: "",
};

export default initialEventState;
