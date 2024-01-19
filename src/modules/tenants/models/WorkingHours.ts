import { Day } from "../../../shared/utils/DateUtils";

export interface WorkingHours {
    dayNumber: number;
    from?: Day;
    to?: Day;
  }