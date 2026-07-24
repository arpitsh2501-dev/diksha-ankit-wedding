const moments = [
	{ title: "The first hello", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85" },
	{ title: "A thousand little things", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85" },
	{ title: "Our favourite people", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85" },
	{ title: "The next chapter", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=85" },
];

export default function Gallery() {
	return <section id="gallery" className="bg-[#efe5d5] px-6 py-24"><div className="mx-auto max-w-6xl"><p className="text-xs uppercase tracking-[0.3em] text-[#b36b4a]">A few favourite moments</p><h2 className="mt-3 font-serif text-6xl text-[#233b35]">Before the confetti</h2><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{moments.map((moment, index) => <div key={moment.title} className={`relative flex aspect-[4/5] items-end overflow-hidden bg-[#53665c] p-6 ${index % 2 ? "lg:translate-y-10" : ""}`} style={{ backgroundImage: `linear-gradient(0deg, rgba(35,59,53,.86), transparent 65%), url(${moment.image})`, backgroundPosition: "center", backgroundSize: "cover" }}><div><span className="font-serif text-5xl text-[#f9f6ef]/55">0{index + 1}</span><p className="mt-4 font-serif text-2xl text-[#f9f6ef]">{moment.title}</p></div></div>)}</div></div></section>;
}