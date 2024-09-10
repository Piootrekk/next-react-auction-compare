"use client";

import { useState, useEffect } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

type TimerProps = {
  time: string;
};

const Timer: React.FC<TimerProps> = ({ time }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const calculateTimeLeft = () => {
    const targetDate = new Date(time);
    const now = new Date();

    const days = differenceInDays(targetDate, now);
    const hours = differenceInHours(targetDate, now) % 24;
    const minutes = differenceInMinutes(targetDate, now) % 60;
    const seconds = differenceInSeconds(targetDate, now) % 60;

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  if (timeLeft === null) {
    return null;
  }

  if (
    timeLeft.days <= 0 &&
    timeLeft.hours <= 0 &&
    timeLeft.minutes <= 0 &&
    timeLeft.seconds <= 0
  ) {
    return <h2 className="text-xl font-semibold">Auction Ended</h2>;
  }

  return (
    <h2 className="text-xl font-semibold">
      Time Left:{" "}
      <span className="font-normal">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </span>
    </h2>
  );
};

export default Timer;
