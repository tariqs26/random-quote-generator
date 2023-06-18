"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Poppins, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Quote({ quote }: { quote: Quote }) {
  const router = useRouter();
  const [fade, setFade] = useState(false);
  return (
    <section
      className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <button
        type="submit"
        className="p-3 mb-4 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-slate-200 hover:cursor-pointer hover:bg-white mt-6 transition-colors ease-in-out duration-300"
        onClick={() => {
          setFade(true);
          setTimeout(() => router.refresh(), 500);
          setTimeout(() => setFade(false), 700);
        }}
      >
        Refresh Quote
      </button>
      <div className="flex flex-col justify-center items-center">
        <p className={`text-2xl text-center mt-4 ${poppins.className}`}>
          <span className="font-bold text-[#ccc]">Category:</span>{" "}
          {quote.category}
        </p>
      </div>

      <div className="grow mt-10">
        <p
          className={`text-5xl text-center max-w-3xl leading-normal ${roboto.className}`}
        >
          <span>"</span>
          {quote.quote}
          <span>"</span> - <span className="italic">{quote.author}</span>
        </p>
      </div>
    </section>
  );
}
