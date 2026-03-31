"use client"

import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Playfair_Display, Inter } from "next/font/google"

const playfair = Playfair_Display({
  subsets:["latin"],
  style:["normal","italic"],
  weight:["400","500","600","700"],
  variable:"--font-heading"
})

const inter = Inter({
  subsets:["latin"],
  weight:["300","400","500"],
  variable:"--font-body"
})

export default function Facilities() {

  const facilities = [
    {
      icon: "🏟",
      title: "Exhibition Halls",
      desc: "14 pillarless, climate-controlled halls with flexible layouts — from boutique B2Bs to international expos of 50,000+ visitors.",
      stat: "73,308 m²"
    },
    {
      icon: "🎙",
      title: "Convention Facilities",
      desc: "Multi-purpose conference halls, 29+ breakout rooms, VIP suites, and dedicated media zones — fully tech-equipped.",
      stat: "29+ Rooms"
    },
    {
      icon: "🚁",
      title: "Logistics & Access",
      desc: "4,000+ parking bays, freight access, warehousing, 10 Gbps internet backbone, and an on-campus helipad for VVIP guests.",
      stat: "4,000+ Bays"
    },
    {
      icon: "🛡",
      title: "Safety & Security",
      desc: "24/7 CCTV monitoring, advanced fire safety, ISO 45001 certified OHS, and trained rapid response teams on-site.",
      stat: "ISO 45001"
    }
  ]


  return (

    <section className={`${playfair.variable} ${inter.variable} py-24 bg-[#0b2a55]`}>

      <div className="max-w-6xl mx-auto px-6">


        {/* heading */}

        <div className="mb-16">

          <p className="[font-family:var(--font-body)] text-blue-600 font-medium tracking-[0.28em] text-xs mb-3">
            FACILITIES
          </p>

          <h2 className="[font-family:var(--font-heading)] text-[38px] md:text-[46px] leading-[1.15] text-gray-100 tracking-[-0.02em]">

            World-Class <span className="italic text-blue-600">Infrastructure</span>

          </h2>

        </div>



        {/* facility rows */}

        <div className="space-y-10">

          {facilities.map((item, i) => (

            <div key={i}>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="grid md:grid-cols-[80px_1fr_auto] gap-6 items-start group"
              >

                {/* icon */}

                <div className="text-3xl bg-white border border-blue-100 w-14 h-14 flex items-center justify-center rounded-xl shadow-sm group-hover:border-blue-500 transition">

                  {item.icon}

                </div>



                {/* text */}

                <div>

                  <h3 className="[font-family:var(--font-heading)] italic text-xl text-gray-100 mb-2 group-hover:text-blue-700 transition">

                    {item.title}

                  </h3>


                  <p className="[font-family:var(--font-body)] font-light text-gray-100 leading-relaxed max-w-2xl">

                    {item.desc}

                  </p>

                </div>



                {/* stat */}

                <div className="[font-family:var(--font-heading)] italic text-blue-600 font-medium text-lg whitespace-nowrap">

                  {item.stat}

                </div>


              </motion.div>



              {i !== facilities.length - 1 && (
                <Separator className="mt-10 bg-blue-100" />
              )}

            </div>

          ))}

        </div>



        {/* video section */}

        <div className="mt-24">

          <p className="[font-family:var(--font-body)] text-white font-medium tracking-[0.28em] text-xs mb-3">
            VENUE FILM
          </p>


          <h3 className="[font-family:var(--font-heading)] text-[32px] italic text-gray-100 mb-6">

            Experience IEML Virtually

          </h3>


          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-100">

            <video
              controls
              autoPlay
              loop
              className="w-full h-[420px] object-cover"
            >

              <source src="/video_1.mp4" type="video/mp4" />

            </video>

          </div>

        </div>


      </div>

    </section>

  )

}