"use client";

import { wedding } from "@/data/wedding";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-pink-100 to-white px-6">

      {/* Invitation Text */}
      <p className="text-lg text-gray-600">
        Together with their families
      </p>


      {/* Couple Names */}
      <h1 className="text-5xl md:text-7xl font-bold mt-5 text-pink-700">
        {wedding.groom}

        <span className="mx-4 text-red-600">
          ❤️
        </span>

        {wedding.bride}
      </h1>


      {/* Wedding Message */}
      <p className="mt-6 text-xl text-gray-700">
        Are getting married
      </p>


      {/* Date */}
      <p className="mt-4 text-2xl font-semibold text-gray-800">
        {wedding.weddingDate}
      </p>


      {/* Time */}
      <p className="mt-2 text-lg text-gray-700">
        {wedding.time}
      </p>


      {/* Countdown */}
      <div className="mt-8 text-xl font-semibold text-red-600">
        <Countdown />
      </div>


      {/* Venue */}
      <div className="mt-10 bg-white shadow-xl rounded-2xl p-8 max-w-md">

        <h2 className="text-3xl font-semibold text-pink-600">
          Venue
        </h2>


        <p className="mt-4 text-xl font-medium text-gray-800">
          {wedding.venue.name}
        </p>


        <p className="mt-2 text-gray-600">
          {wedding.venue.address}
        </p>

      </div>


    </section>
  );
}