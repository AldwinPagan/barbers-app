import { FC, FormEvent, useState } from "react";
import { Button } from "primereact/button";
import * as eventOperators from "../redux/operators";
import { EventState } from "../redux/states";
import { SubmitButton } from "../../../shared/components/buttons";
import { RouteComponentProps, useNavigate } from "@reach/router";

interface DateAndTimeSelectionProps
  extends eventOperators.IEventOperators {
  events: EventState;
}
const DateAndTimeSelection: FC<DateAndTimeSelectionProps> = (props) => {
  // const navigate = useNavigate();
  const [month, setMonth] = useState<string | null>(null);
  const [dateOfMonth, setDateOfMonth] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);

  const months: string[] = ["April", "May", "June", "July"];
  const dates: { dateOfMonth: number; weekDay: string }[] = [
    { dateOfMonth: 21, weekDay: "Tuesday" },
    // { dateOfMonth: 22, weekDay: "Wednesday" },
    { dateOfMonth: 23, weekDay: "Thursday" },
    { dateOfMonth: 24, weekDay: "Friday" },
    { dateOfMonth: 25, weekDay: "Saturday" },
  ];
  const dateTimes: string[] = [
    "9:00 AM",
    "10:15 AM",
    "12:00 PM",
    "1:00 PM",
    "2:30 PM",
    "2:45 PM",
    "3:00 PM",
    "5:00 PM",
  ];

  const isSelected = (value: boolean): string => {
    return value
      ? "p-button-plain p-button-text"
      : "p-button-rounded p-shadow-12";
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = {
      ...props.events.bookingForm,
      startTime: "2021-06-08T6:00:00Z",
    };
    props.updateBookingDateTime(form);
    // navigate(`fill-guest-details`);
    // props.history.push("fill-guest-details");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>Select Month</h3>
        {months.map((value) => (
          <Button
            key={value}
            label={value}
            value={value}
            onClick={(e) => setMonth(e.currentTarget.value)}
            className={`${isSelected(month !== value)} p-button-lg p-m-2`}
          />
        ))}

        <h3>Select Date</h3>
        {dates.map((date) => (
          <Button
            key={date.dateOfMonth}
            value={date.dateOfMonth}
            onClick={(e) =>
              setDateOfMonth(Number.parseInt(e.currentTarget.value))
            }
            className={`${isSelected(dateOfMonth !== date.dateOfMonth)} p-m-2`}
          >
            <div className="p-button-text">
              <span>{date.weekDay.substring(0, 3)}</span>
              <br />
              <span>{date.dateOfMonth}</span>
            </div>
          </Button>
        ))}

        <h3>Select Time</h3>

        {dateTimes.map((value) => (
          <Button
            key={value}
            label={value}
            value={value}
            onClick={(e) => setTime(e.currentTarget.value)}
            className={`${isSelected(time !== value)} p-m-2`}
          />
        ))}
        {/* <SubmitButton text="Submit" /> */}
      </form>
    </>
  );
};

export default DateAndTimeSelection;
