"use client"

import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

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
    <section className="py-24 bg-blue-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* heading */}

        <div className="mb-16">

          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-3">
            FACILITIES
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            World-Class Infrastructure
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
                className="grid md:grid-cols-[80px_1fr_auto] gap-6 items-start"
              >

                {/* icon */}
                <div className="text-3xl">
                  {item.icon}
                </div>


                {/* text */}
                <div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>

                </div>



                {/* stat */}
                <div className="text-blue-600 font-semibold text-lg whitespace-nowrap">
                  {item.stat}
                </div>


              </motion.div>


              {/* divider */}

              {i !== facilities.length - 1 && (
                <Separator className="mt-10 bg-blue-100" />
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}