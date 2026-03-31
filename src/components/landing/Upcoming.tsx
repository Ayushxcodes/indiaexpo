"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function UpcomingEvents() {

  const events = [
    {
      title: "Sound & Light Asia 2026",
      desc: "The biggest exhibition on professional sound, lighting and event infrastructure across Asia.",
      img: "/hero_1.jpg"
    },
    {
      title: "UP International Trade Show 2026",
      desc: "Connecting UP manufacturers to global buyers — a flagship B2B & B2C showcase of India's most vibrant state economy.",
      img: "/hero_2.jpg"
    },
    {
      title: "INDIAWOOD 2027",
      desc: "Global woodworking brands, advanced machinery, material innovation and automation — the industry's flagship event.",
      img: "/hero_3.jpg"
    },
    {
      title: "electronica India 2026",
      desc: "South Asia's leading trade fair for electronic components, systems and solutions. B2B matchmaking across the value chain.",
      img: "/hero_4.jpeg"
    },
    {
      title: "RoadX India 2026",
      desc: "Multi-sector B2B exhibition covering road & transport technology, infrastructure machinery and innovations.",
      img: "/hero_5.png"
    },
    {
      title: "Fan Expo 2026",
      desc: "Premier B2B trade fair dedicated to the fan and air movement industry — innovations, networking, and growth.",
      img: "/hero_6.jpeg"
    }
  ]


  return (
    <section className="py-24 bg-gray-150">

      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="mb-14">

          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-3">
            UPCOMING EVENTS
          </p>

          <h2 className="text-4xl font-bold text-blue-600">
            Discover Global Exhibitions at IEML
          </h2>

        </div>



        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >

              <Card className="overflow-hidden rounded-2xl border-blue-100 hover:shadow-xl transition-all duration-300">

                {/* image */}
                <div className="h-52 overflow-hidden">

                  <img
                    src={event.img}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                </div>



                <CardContent className="p-6">

                  <h3 className="font-semibold text-lg text-blue-600 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.desc}
                  </p>

                </CardContent>

              </Card>

            </motion.div>

          ))}

        </div>


      </div>

    </section>
  )
}