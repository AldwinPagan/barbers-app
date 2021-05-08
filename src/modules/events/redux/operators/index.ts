import { Booking } from "../../models/Booking";
import { submitBooking } from "./submitBooking";
import { updateBookingProviderAndServices } from "./updateBookingProviderAndServices";
import { updateBookingDateTime } from "./updateBookingDateTime";
export interface IEventOperators {
  submitBooking: (booking: Booking) => void;
  updateBookingProviderAndServices: (booking: Booking ) => void;
  updateBookingDateTime: (booking: Booking) => void;
}
export {
  submitBooking,
  updateBookingProviderAndServices,
  updateBookingDateTime,
};
