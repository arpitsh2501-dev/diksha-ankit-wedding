"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string;
};

export default function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <h2>The Countdown Begins</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h1>{timeLeft.days}</h1>
          <p>Days</p>
        </div>

        <div>
          <h1>{timeLeft.hours}</h1>
          <p>Hours</p>
        </div>

        <div>
          <h1>{timeLeft.minutes}</h1>
          <p>Mins</p>
        </div>

        <div>
          <h1>{timeLeft.seconds}</h1>
          <p>Secs</p>
        </div>
      </div>
    </div>
  );
}