"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  style: ["normal", "italic"],
  weight: ["400","500","600","700"]
});

export default function Hero() {

  return (

    <section className={`${playfair.variable} relative bg-[#0b2a55] overflow-hidden`}>

      {/* subtle radial glow */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">


        {/* LEFT CONTENT */}
        <div>

          {/* top label */}
          <div className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-500/10 text-blue-200 text-xs tracking-[0.22em] px-4 py-2 rounded-full mb-8">

            <span className="w-2 h-2 rounded-full bg-blue-400"></span>

            INDIA'S PREMIER MICE DESTINATION

          </div>



          {/* headline */}
          <h1 className="text-[52px] md:text-[70px] leading-[1.05] text-white mb-6 tracking-[-0.02em] [font-family:var(--font-heading)]">

            Where the World <br/>

            <span className="italic text-blue-300 font-medium tracking-tight">

              Does Business.

            </span>

          </h1>



          {/* description */}
          <p className="italic text-blue-100/80 text-lg leading-relaxed mb-10 max-w-xl">

            58 acres of world-class exhibition and convention infrastructure in
            Delhi NCR — connecting industries, governments, and global markets
            since 2006.

          </p>



          {/* buttons */}
          <div className="flex flex-wrap gap-4 mb-14">

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-xl font-medium shadow-md transition">

              View Upcoming Events →

            </button>

            <button className="border border-blue-300/40 text-blue-200 px-7 py-3 rounded-xl hover:bg-white/5 transition">

              Plan Your Event

            </button>

          </div>



          {/* stats */}
          


          {/* location */}
          <div className="mt-10 flex items-start gap-3 text-blue-100/70">

            <span className="text-lg">📍</span>

            <p className="italic leading-relaxed">

              Knowledge Park II, Greater Noida <br/>
              Delhi–NCR · Near Noida International Airport

            </p>

          </div>

        </div>



        {/* RIGHT IMAGES */}
        <div className="relative">

          <div className="grid grid-cols-2 gap-4">

            {[
              "hero_1.jpg",
              "hero_2.jpg",
              "hero_3.jpg",
              "hero_4.jpg"

            ].map((img, i) => (

              <motion.img

                key={i}

                initial={{ opacity: 0, y: 40 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.6 + i * 0.2 }}

                src={`/${img}`}

                className="rounded-2xl shadow-lg h-64 w-full object-cover"

              />

            ))}

          </div>



          {/* floating badge */}
          <div className="absolute -top-6 -right-6 bg-blue-500 text-white w-24 h-24 rounded-full flex items-center justify-center text-center text-xs font-medium shadow-xl">

            170+ Events

          </div>



          {/* subtle shape */}
          <div className="absolute -bottom-10 -left-10 opacity-20">

            <div className="w-64 h-64 border border-blue-300 rounded-[40px] rotate-12"></div>

          </div>

        </div>


      </div>

    </section>

  );

}