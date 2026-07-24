"use client";

import React, { useEffect, useState, useRef } from "react";;

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
const sendRSVP = (response: string) => {

  const nameInput = document.getElementById("guestName") as HTMLInputElement;

  const name = nameInput.value;

  if (!name) {
    alert("Please enter your name");
    return;
  }


  const message = 
`Hello Ankit & Diksha,

I am ${name}.

My response:
${response}

Looking forward to celebrating with you!`;


  const whatsappURL =
    `https://wa.me/918867257280?text=${encodeURIComponent(message)}`;


  window.open(whatsappURL, "_blank");

};

  useEffect(() => {

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    },1000);


    return () => clearInterval(timer);

  },[]);



  return (

    <main className="min-h-screen bg-gray-50 text-gray-800">


      {/* HERO SECTION */}

      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
          "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000')"
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




      {/* COUNTDOWN SECTION */}

      <section className="py-20 bg-white text-center">


        <h2 className="text-4xl font-serif mb-12">
          The Countdown Begins
        </h2>



        <div className="flex justify-center gap-5 flex-wrap">


          <CountdownBox value={timeLeft.days} label="Days" />

          <CountdownBox value={timeLeft.hours} label="Hours" />

          <CountdownBox value={timeLeft.minutes} label="Minutes" />

          <CountdownBox value={timeLeft.seconds} label="Seconds" />


        </div>


      </section>






      {/* EVENTS SECTION */}


      <section className="py-20 bg-[#fdfbf7]">


        <h2 className="text-5xl text-center font-serif mb-12">
          Wedding Events
        </h2>



        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">



          <EventCard
            title="🌼  Golden Beginnings"
            date="04 December 2026"
            time="10:00 AM"
          />



          <EventCard
            title="🎶 A Night of Rhythm"
            date="04 December 2026"
            time="8:00 PM"
          />



          <EventCard
            title="🌸 The Marigold Morning"
            date="05 December 2026"
            time="11:00 AM | Phoolon Ki Haldi"
          />



          <EventCard
            title="💍 The Forever Promise"
            date="05 December 2026"
            time="8:00 PM"
          />


        </div>


      </section>



{/* PHOTO GALLERY */}

<section className="py-20 bg-white">

  <h2 className="text-5xl text-center font-serif mb-12">
    Our Beautiful Moments
  </h2>


  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">


    <img
      src="/images/photo1.jpeg"
      alt="Wedding Moment"
      className="rounded-2xl shadow-lg w-full h-80 object-cover"
    />


    <img
      src="/images/photo2.jpeg"
      alt="Wedding Moment"
      className="rounded-2xl shadow-lg w-full h-80 object-cover"
    />


    <img
      src="/images/photo3.jpeg"
      alt="Wedding Moment"
      className="rounded-2xl shadow-lg w-full h-80 object-cover"
    />


  </div>

</section>
{/* RSVP SECTION */}

<section className="py-20 bg-[#fdfbf7]">

  <h2 className="text-5xl text-center font-serif mb-12">
    Will You Join Us? ❤️
  </h2>


  <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 mx-6">


    <div className="mb-6">

      <label className="block mb-2 font-semibold">
        Your Name
      </label>

    <input
  id="guestName"
  type="text"
  placeholder="Enter your name"
  className="w-full border rounded-lg p-3"
/>

    </div>



    <div className="mb-6">

      <label className="block mb-4 font-semibold">
        Kindly let us know your response
      </label>


      <div className="flex flex-col md:flex-row gap-4">


        <button
          onClick={() => sendRSVP("Delighted to attend ")}

          className="bg-green-600 text-white px-6 py-3 rounded-full"
        >
          Delighted to attend 
        </button>


        <button
         onClick={() => sendRSVP(" Sadly missing out on the joy")}
          className="bg-rose-500 text-white px-6 py-3 rounded-full"
        >
           Sadly missing out on the joy
        </button>


      </div>


    </div>




    <button
      className="w-full bg-gray-900 text-white py-3 rounded-full"
    >
      Submit Response
    </button>


  </div>


</section>

      {/* VENUE SECTION */}


      <section className="py-20 bg-white text-center px-5">


        <h2 className="text-5xl font-serif mb-10">
          Wedding Venue
        </h2>



        <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow">


          <h3 className="text-3xl font-semibold mb-4">
            Hotel Shiva Inn
          </h3>


          <p className="text-lg leading-8">

            Parsada Raipur Road,
            <br/>
            Bodri,
            <br/>
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
  label
}:{
  value:number;
  label:string;
}){


  return (

    <div className="bg-rose-50 rounded-xl shadow p-6 w-28">

      <h3 className="text-4xl text-rose-600 font-bold">

        {String(value).padStart(2,"0")}

      </h3>


      <p className="mt-2">
        {label}
      </p>


    </div>

  );

}







function EventCard({
  title,
  date,
  time
}:{
  title:string;
  date:string;
  time:string;
}){


return (

<div className="bg-white rounded-2xl shadow p-8 text-center">


<h3 className="text-3xl font-semibold text-rose-600">

{title}

</h3>


<p className="mt-4 text-lg">

{date}

</p>


<p className="mt-2">

{time}

</p>


</div>

);


}