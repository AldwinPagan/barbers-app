import { Booking } from "../models/Booking";

export interface EventState {
  isFillingBookingForm: boolean;
  isBookingSuccess: boolean;
  isBookingFailure: boolean;

  bookingForm: Booking | {};
  error: string;
}

const initialEventState: EventState = {
  isFillingBookingForm: false,
  isBookingSuccess: false,
  isBookingFailure: false,
  bookingForm: {},
  error: "",
};

export default initialEventState;
