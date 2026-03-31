"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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

    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-6">


        {/* heading */}

        <div className="mb-16">

          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-3">
            SECTORS WE SERVE
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Industries We Connect
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
              className="group bg-white rounded-2xl p-3 md:p-6 flex flex-col items-center justify-center shadow-sm border border-blue-100 hover:shadow-lg hover:-translate-y-1.5 hover:border-blue-400 hover:bg-blue-50/60 transition-all duration-200 cursor-pointer relative overflow-hidden"
            >
              <span className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-blue-50 border-2 border-blue-200 group-hover:border-blue-500 text-2xl md:text-3xl mb-2 md:mb-3 shadow-sm transition-all">
                {sector.icon}
              </span>
              <p className="text-gray-800 font-semibold text-sm md:text-base text-center group-hover:text-blue-700 transition-all">
                {sector.name}
              </p>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 md:w-2/3 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 opacity-0 group-hover:opacity-80 rounded-full transition-all duration-300"></span>
            </motion.div>
          ))}
        </div>



        {/* CTA */}

        <div className="bg-white rounded-3xl p-10 shadow-md text-center">

          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Host Your <br /> Next Big Event?
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            From intimate conferences to 50,000-visitor international expos —
            IEML delivers the space, infrastructure, and expertise to make it world-class.
          </p>


          <div className="flex flex-wrap justify-center gap-4">

            <Button className="bg-blue-600 hover:bg-blue-700 px-7">
              Book a Venue →
            </Button>

            <Button variant="outline" className="border-blue-600 text-blue-600">
              Request a Callback
            </Button>

          </div>

        </div>


      </div>

    </section>

  )
}