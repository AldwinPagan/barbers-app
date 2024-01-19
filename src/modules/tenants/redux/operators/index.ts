import { Booking } from "../../models/Booking";
import { submitBooking } from "./submitBooking";
import { updateBookingProviderAndServices } from "./updateBookingProviderAndServices";
import { updateBookingDateTime } from "./updateBookingDateTime";
import { getTenantById } from "./getTenantById";
export interface ITenantOperators {
  submitBooking: (booking: Booking) => void;
  updateBookingProviderAndServices: (booking: Booking) => void;
  updateBookingDateTime: (booking: Booking) => void;
  getTenantById: (tenantId: string) => void;
}
export {
  submitBooking,
  updateBookingProviderAndServices,
  updateBookingDateTime,
  
  getTenantById,
};
