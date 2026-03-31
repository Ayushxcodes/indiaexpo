"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal","italic"],
  weight: ["400","500","600","700"],
  variable: "--font-heading"
});

export default function AboutIEML() {

  return (

    <section className={`${playfair.variable} bg-[#f5f7fb] py-24`}>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">


        {/* LEFT IMAGE CARD */}
        <div className="relative">
          <img
            src="/about.jpg"
            alt="About IEML"
            className="h-[420px] w-full object-cover rounded-[26px]"
          />
          {/* floating badge */}
          <div className="absolute -bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl">
            <p className="[font-family:var(--font-heading)] text-2xl italic">
              Est.
            </p>
            <p className="text-xs tracking-[0.25em] mt-1 opacity-80">
              2006
            </p>
          </div>
        </div>



        {/* RIGHT CONTENT */}
        <div>

          {/* label */}
          <p className="text-xs tracking-[0.28em] text-blue-600 font-medium mb-4">

            ABOUT IEML

          </p>


          {/* heading */}
          <h2 className="[font-family:var(--font-heading)] text-[40px] md:text-[54px] leading-[1.15] text-slate-800 tracking-[-0.02em] mb-6">

            India's First Round O'Clock <br/>

            <span className="italic text-blue-600 font-medium">
              International Mart
            </span>

          </h2>


          {/* description */}
          <p className="[font-family:var(--font-heading)] text-slate-600 leading-relaxed mb-6 max-w-xl">

            Inaugurated by India's Prime Minister, IEML has grown into one of India's top 3 integrated exhibition and convention venues — a landmark for global trade and enterprise.

          </p>


          <p className="[font-family:var(--font-heading)] text-slate-600 leading-relaxed mb-10 max-w-xl">

            Spanning 58 acres in Greater Noida, IEML is the preferred venue for India's most prestigious trade associations, global corporations, and government bodies.

          </p>



          {/* highlights */}
          <div className="space-y-4">

            <div className="flex items-center gap-3 bg-slate-100 px-4 py-3 rounded-lg">

              <span>🏅</span>

              <p className="text-slate-700">
                National Tourism Award 2018–19 — India's Best Convention Centre
              </p>

            </div>


            <div className="flex items-center gap-3 bg-slate-100 px-4 py-3 rounded-lg">

              <span>🌐</span>

              <p className="text-slate-700">
                Host to UNCCD COP-14, Auto Expo, World Dairy Congress & 600+ global events
              </p>

            </div>


            <div className="flex items-center gap-3 bg-slate-100 px-4 py-3 rounded-lg">

              <span>⚡</span>

              <p className="text-slate-700">
                10 Gbps backbone · 24/7 surveillance · Helipad on-campus
              </p>

            </div>

          </div>

        </div>


      </div>

    </section>

  );

}