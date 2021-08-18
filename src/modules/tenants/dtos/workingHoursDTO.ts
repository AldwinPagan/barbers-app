import { Dayjs } from "dayjs";

export interface WorkingHoursDTO {
  dayNumber: number;
  from?: Dayjs;
  to?: Dayjs;
}
