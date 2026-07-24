"use client";

import { useState } from "react";

const links = [
	["Story", "story"],
	["Events", "events"],
	["Gallery", "gallery"],
	["RSVP", "rsvp"],
] as const;

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="fixed inset-x-0 top-0 z-40 border-b border-stone-900/10 bg-[#f9f6ef]/85 px-6 py-4 backdrop-blur-md">
			<div className="mx-auto flex max-w-6xl items-center justify-between">
				<a href="#top" className="font-serif text-xl tracking-tight text-[#233b35]">
					D <span className="text-[#b36b4a]">&</span> A
				</a>
				<button className="text-sm text-[#233b35] md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
					{open ? "Close" : "Menu"}
				</button>
				<div className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 border-b border-stone-900/10 bg-[#f9f6ef] px-6 py-5 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
					{links.map(([label, href]) => (
						<a key={href} href={`#${href}`} onClick={() => setOpen(false)} className="text-xs uppercase tracking-[0.2em] text-[#53665c] transition-colors hover:text-[#b36b4a]">
							{label}
						</a>
					))}
					<a href="#rsvp" className="border border-[#b36b4a] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#b36b4a] transition-colors hover:bg-[#b36b4a] hover:text-white">
						Join us
					</a>
				</div>
			</div>
		</nav>
	);
}
