"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
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

export default function SectorsWeServe() {

  const sectors = [
    { icon: "⚙️", name: "Engineering & Manufacturing" },
    { icon: "🏥", name: "Healthcare & MedTech" },
    { icon: "🏠", name: "Home, Lifestyle & Handicrafts" },
    { icon: "🚗", name: "Auto & Mobility" },
    { icon: "⚡", name: "Energy & Sustainability" },
    { icon: "👗", name: "Textiles & Garments" },
    { icon: "📦", name: "Print, Pack & Allied" },
    { icon: "💻", name: "Electronics & Tech" },
    { icon: "🌿", name: "Ayurveda & Wellness" },
    { icon: "🎓", name: "Education & Training" },
    { icon: "🍶", name: "Food & Dairy" },
    { icon: "🏗", name: "Infrastructure & Real Estate" }
  ]


  return (

    <section className={`${playfair.variable} ${inter.variable} py-24 bg-gradient-to-b from-blue-50 to-white`}>

      <div className="max-w-7xl mx-auto px-6">


        {/* heading */}

        <div className="mb-16">

          <p className="[font-family:var(--font-body)] text-blue-600 font-medium tracking-[0.28em] text-xs mb-3">

            SECTORS WE SERVE

          </p>


          <h2 className="[font-family:var(--font-heading)] text-[38px] md:text-[46px] leading-[1.15] tracking-[-0.02em] text-gray-900">

            Industries We <span className="italic text-blue-600">Connect</span>

          </h2>

        </div>



        {/* grid */}


        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-20">

          {sectors.map((sector, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="group bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-sm border border-blue-100 hover:shadow-md hover:-translate-y-1.5 hover:border-blue-500 hover:bg-blue-50/70 transition-all duration-200 cursor-pointer"
            >

              {/* icon */}

              <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 group-hover:border-blue-500 group-hover:bg-white text-2xl shadow-sm transition-all mb-4">

                {sector.icon}

              </span>



              {/* text */}

              <p className="[font-family:var(--font-heading)] text-gray-900 text-center group-hover:text-blue-700 transition">

                {sector.name}

              </p>


            </motion.div>

          ))}

        </div>



        {/* CTA */}

        <div className="bg-white rounded-3xl p-12 shadow-md border border-blue-100 text-center">

          <h3 className="[font-family:var(--font-heading)] text-[30px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-gray-900 mb-5">

            Ready to Host Your <br />

            <span className="italic text-blue-600">

              Next Big Event?

            </span>

          </h3>



          <p className="[font-family:var(--font-body)] font-light text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">

            From intimate conferences to 50,000-visitor international expos —
            IEML delivers the space, infrastructure, and expertise to make it world-class.

          </p>



          <div className="flex flex-wrap justify-center gap-4">


            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-sm tracking-wide">

              Book a Venue →

            </Button>



            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 px-8 py-6 text-sm tracking-wide hover:bg-blue-50"
            >

              Request a Callback

            </Button>


          </div>

        </div>


      </div>

    </section>

  )
}