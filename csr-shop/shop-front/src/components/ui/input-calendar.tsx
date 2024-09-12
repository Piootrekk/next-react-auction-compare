import { useState } from "react";
import DatePicker from "./date-picker";
import { InputProps } from "./input";

type InputCalendarProps = InputProps & {
  datePickerClassName?: string;
};

const InputCalendar: React.FC<InputCalendarProps> = ({
  datePickerClassName,
  ...rest
}) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <>
      <DatePicker
        date={date}
        setDate={setDate}
        className={datePickerClassName}
      />
      <input
        type="hidden"
        value={date ? date.toISOString() : ""}
        required
        {...rest}
      />
    </>
  );
};

export default InputCalendar;
