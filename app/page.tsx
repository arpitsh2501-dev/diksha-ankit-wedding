"use client";

import React, { useEffect, useState } from "react";

export default function WeddingInvitation() {
  const weddingDate = new Date("2026-12-05T12:30:00").getTime();

  const calculateTimeLeft = () => {
    const difference = weddingDate - new Date().getTime();

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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-6">

          <p className="uppercase tracking-widest text-sm mb-6">
            Together with their families
          </p>

          <h1 className="text-6xl md:text-8xl font-serif mb-6">
            Ankit ❤️ Diksha
          </h1>

          <p className="text-2xl italic mb-8">
            Are getting married
          </p>

          <div className="border-y border-white/50 py-5 px-8 inline-block">
            <h2 className="text-2xl">
              05 December 2026
            </h2>

            <p className="mt-2">
              12:30 PM
            </p>
          </div>

        </div>
      </section>


      {/* COUNTDOWN */}
      <section className="py-20 bg-white text-center">

        <h2 className="text-4xl font-serif mb-12">
          The Countdown Begins
        </h2>

        <div className="flex justify-center gap-5 flex-wrap">

          <CountdownBox value={timeLeft.days} label="Days" />

          <CountdownBox value={timeLeft.hours} label="Hours" />

          <CountdownBox value={timeLeft.minutes} label="Minutes" />

          <CountdownBox
            value={timeLeft.seconds}
            label="Seconds"
          />

        </div>

      </section>


      {/* VENUE */}
      <section className="py-20 bg-[#fdfbf7] text-center px-5">

        <h2 className="text-5xl font-serif mb-10">
          Wedding Venue
        </h2>

        <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow">

          <h3 className="text-3xl font-semibold mb-4">
            Hotel Shiva Inn
          </h3>

          <p className="text-lg leading-8">
            Parsada Raipur Road,
            <br />
            Bodri,
            <br />
            Bilaspur, Chhattisgarh
          </p>


          <a
            href="https://maps.google.com/?q=Hotel+Shiva+Inn+Bodri+Bilaspur"
            target="_blank"
            className="inline-block mt-8 bg-rose-500 text-white px-8 py-3 rounded-full"
          >
            Open Google Maps
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-8">

        <h3 className="text-2xl">
          We Can't Wait To Celebrate With You ❤️
        </h3>

        <p className="mt-3">
          Ankit & Diksha
        </p>

      </footer>

    </main>
  );
}


function CountdownBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="bg-rose-50 rounded-xl shadow p-6 w-28">

      <h3 className="text-4xl text-rose-600 font-bold">
        {String(value).padStart(2, "0")}
      </h3>

      <p className="text-sm mt-2">
        {label}
      </p>

    </div>
  );
}