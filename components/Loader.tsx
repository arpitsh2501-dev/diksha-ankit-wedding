"use client";

import { useEffect, useState } from "react";
export default function Loader() { const [visible, setVisible] = useState(true); useEffect(() => { const timer = setTimeout(() => setVisible(false), 700); return () => clearTimeout(timer); }, []); if (!visible) return null; return <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#233b35] text-[#f9f6ef]"><p className="font-serif text-4xl">D <em className="text-[#e7b895]">&</em> A</p></div>; }