"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Playfair_Display, Inter } from "next/font/google"

import {
  Speaker,
  Building2,
  Hammer,
  Cpu,
  Truck,
  Fan
} from "lucide-react"


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


export default function UpcomingEvents() {

  const events = [
    {
      title: "Sound & Light Asia 2026",
      desc: "The biggest exhibition on professional sound, lighting and event infrastructure across Asia.",
      img: "/hero_1.jpg",
      icon: Speaker,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "UP International Trade Show 2026",
      desc: "Connecting UP manufacturers to global buyers — a flagship B2B & B2C showcase of India's most vibrant state economy.",
      img: "/hero_2.jpg",
      icon: Building2,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "INDIAWOOD 2027",
      desc: "Global woodworking brands, advanced machinery, material innovation and automation.",
      img: "/hero_3.jpg",
      icon: Hammer,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "electronica India 2026",
      desc: "South Asia's leading trade fair for electronic components, systems and solutions.",
      img: "/hero_4.jpeg",
      icon: Cpu,
      color: "text-cyan-600 bg-cyan-50"
    },
    {
      title: "RoadX India 2026",
      desc: "Multi-sector B2B exhibition covering road & transport technology and infrastructure machinery.",
      img: "/hero_5.png",
      icon: Truck,
      color: "text-slate-700 bg-slate-100"
    },
    {
      title: "Fan Expo 2026",
      desc: "Premier B2B trade fair dedicated to the fan and air movement industry.",
      img: "/hero_6.jpeg",
      icon: Fan,
      color: "text-purple-600 bg-purple-50"
    }
  ]


  return (

    <section className={`${playfair.variable} ${inter.variable} py-24 bg-gray-50`}>

      <div className="max-w-7xl mx-auto px-6">


        {/* heading */}
        <div className="mb-14">

          <p className="[font-family:var(--font-body)] text-blue-600 font-medium tracking-[0.28em] text-xs mb-3">
            UPCOMING EVENTS
          </p>


          <h2 className="[font-family:var(--font-heading)] text-[38px] md:text-[46px] leading-[1.15] text-slate-800 tracking-[-0.02em]">

            Discover Global Exhibitions at <br/>

            <span className="italic text-blue-600 font-medium">
              IEML
            </span>

          </h2>

        </div>



        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event, i) => {

            const Icon = event.icon

            return (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >

                <Card className="group overflow-hidden rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-white">


                  {/* image */}
                  <div className="h-52 overflow-hidden relative">

                    <img
                      src={event.img}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />


                    {/* icon */}
                    <div className={`absolute top-4 left-4 p-2 rounded-lg shadow ${event.color}`}>

                      <Icon size={18} />

                    </div>

                  </div>



                  <CardContent className="p-6">

                    <h3 className="[font-family:var(--font-heading)] italic text-lg text-slate-800 mb-2 group-hover:text-blue-700 transition">

                      {event.title}

                    </h3>


                    <p className="[font-family:var(--font-body)] font-light text-slate-600 text-sm leading-relaxed">

                      {event.desc}

                    </p>

                  </CardContent>


                </Card>

              </motion.div>

            )

          })}

        </div>


      </div>

    </section>

  )

}