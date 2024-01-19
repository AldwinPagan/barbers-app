import dayjs from "dayjs";

export class Day {
  public static WORKING_HOUR_FORMAT = "hh:mm A";
  public static create(config: dayjs.ConfigType, format?: dayjs.OptionType) {
    return format ? dayjs(config, format) : new dayjs.Dayjs(config);
  }
}
