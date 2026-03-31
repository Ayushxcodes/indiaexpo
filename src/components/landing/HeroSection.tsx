"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-blue-50 overflow-hidden">
      {/* SVG BG SHAPES */}
      <svg className="absolute left-[-120px] top-[-80px] w-[420px] h-[420px] opacity-30 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="200" fill="url(#hero-gradient1)" />
        <defs>
          <radialGradient id="hero-gradient1" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" stopOpacity="0.25" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg className="absolute right-[-100px] bottom-[-100px] w-[340px] h-[340px] opacity-20 -z-10" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="170" cy="170" rx="170" ry="170" fill="url(#hero-gradient2)" />
        <defs>
          <radialGradient id="hero-gradient2" cx="0" cy="0" r="1" gradientTransform="translate(170 170) scale(170)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" stopOpacity="0.18" />
            <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            SINCE 2006
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6 text-gray-900">
            INDIA'S PREMIER <br />
            <span className="text-blue-600">MICE DESTINATION</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
            Where the World <br /> Does Business.
          </h2>

          <p className="text-gray-600 max-w-xl mb-10 leading-relaxed">
            58 acres of world-class exhibition and convention infrastructure in
            Delhi NCR — connecting industries, governments, and global markets
            since 2006.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-blue-600 text-white px-7 py-3 rounded-xl shadow-md hover:bg-blue-700 transition font-medium">
              View Upcoming Events →
            </button>

            <button className="border border-blue-600 text-blue-600 px-7 py-3 rounded-xl hover:bg-blue-50 transition font-medium">
              Plan Your Event
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "58", label: "Acres Campus" },
              { num: "600+", label: "Events Hosted" },
              { num: "14", label: "Exhibition Halls" },
              { num: "170+", label: "Events / Year" }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-4 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-700">{item.num}</h3>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          {/* LOCATION */}
          <div className="mt-10 flex items-start gap-3 text-gray-600">
            <span className="text-xl">📍</span>
            <p>
              Knowledge Park II, Greater Noida <br />
              Delhi–NCR · Near Noida International Airport
            </p>
          </div>
        </div>


        {/* RIGHT IMAGE GRID */}
        <div className="relative">

          <div className="grid grid-cols-2 gap-4">

            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src="/hero_1.jpg"
              className="rounded-2xl shadow-lg h-64 w-full object-cover"
            />

            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              src="/hero_2.jpg"
              className="rounded-2xl shadow-lg h-64 w-full object-cover"
            />

            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src="/hero_3.jpg"
              className="rounded-2xl shadow-lg h-64 w-full object-cover"
            />

            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              src="/hero_4.jpg"
              className="rounded-2xl shadow-lg h-64 w-full object-cover"
            />

          </div>


          {/* BLUE BADGE */}
          <div className="absolute -top-8 -right-8 bg-blue-600 text-white w-28 h-28 rounded-full flex items-center justify-center text-center text-sm font-semibold shadow-xl">
            170+ Events
          </div>


          {/* DECOR SHAPE */}
          <div className="absolute -bottom-10 -left-10 opacity-20">
            <div className="w-64 h-64 border-2 border-blue-300 rounded-[40px] rotate-12"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
