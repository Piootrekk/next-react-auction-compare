"use client";
import { useState } from "react";
import DatePicker from "./date-picker";

type InputCalendarProps = {
  name: string;
  className?: string;
};

const InputCalendar: React.FC<InputCalendarProps> = ({ name, className }) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <>
      <DatePicker date={date} setDate={setDate} className={className} />
      <input
        type="hidden"
        name={name}
        value={date ? date.toISOString() : ""}
        required
      />
    </>
  );
};

export default InputCalendar;
