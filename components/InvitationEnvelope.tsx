"use client";

import { useState } from "react";

export default function InvitationEnvelope() {
  const [opened, setOpened] = useState(false);
  return (
    <section className="bg-[#f9f6ef] px-6 py-24 text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b36b4a]">You are invited</p>
      <button onClick={() => setOpened(true)} className="group mx-auto block max-w-md text-left" aria-label="Open invitation">
        <div className={`relative border border-[#b36b4a]/40 bg-[#efe5d5] p-10 shadow-[12px_12px_0_#d9cbb8] transition-transform duration-500 ${opened ? "-rotate-1" : "rotate-1 group-hover:rotate-0"}`}>
          <span className="absolute right-5 top-4 text-xs uppercase tracking-[0.2em] text-[#b36b4a]">{opened ? "With love" : "Open me"}</span>
          <p className="font-serif text-5xl leading-none text-[#233b35]">Dear<br /><em>you,</em></p>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-[#53665c]">We saved you a seat at the table, a dance on the floor, and a little piece of our happiest day.</p>
          <div className={`mt-8 max-h-0 overflow-hidden text-sm text-[#b36b4a] transition-all duration-500 ${opened ? "max-h-20" : ""}`}>Come celebrate our forever with us.</div>
        </div>
      </button>
    </section>
  );
}