import { AppointmentService } from "./appointmentService";
import { authService } from "../../users/services";

const appointmentService = new AppointmentService(authService);

export {
    appointmentService
}
