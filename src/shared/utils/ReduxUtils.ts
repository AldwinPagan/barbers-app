export class ReduxUtils {
  public static reportEventStatus(eventName: string, eventSuccess?: boolean) {
    switch (eventSuccess) {
      case true:
        return {
          [eventName]: false,
          [eventName + "Success"]: true,
          [eventName + "Failure"]: false,
        };
      case false:
        return {
          [eventName]: false,
          [eventName + "Success"]: false,
          [eventName + "Failure"]: true,
        };
      default:
        return {
          [eventName]: true,
          [eventName + "Success"]: false,
          [eventName + "Failure"]: false,
        };
    }
  }
}
