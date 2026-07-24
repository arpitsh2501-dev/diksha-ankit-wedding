"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const weddingDate = new Date(wedding.date).getTime();
      const now = new Date().getTime();

      const difference = weddingDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {timeLeft.days} Days : {timeLeft.hours} Hours :{" "}
      {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds
    </div>
  );
}