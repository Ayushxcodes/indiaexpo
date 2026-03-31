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

export default function WhyChooseUs() {

  const features = [
    {
      icon: "🌍",
      title: "Global Standard",
      desc: "Among the world's best for exhibitions, conferences, and large-format events."
    },
    {
      icon: "🏛",
      title: "Government Preferred",
      desc: "Venue of choice for ministries, statutory bodies, and global agencies."
    },
    {
      icon: "📡",
      title: "Full Connectivity",
      desc: "Wi-Fi across all zones, PA systems, LED displays, and 10 Gbps backbone."
    },
    {
      icon: "✈️",
      title: "Airport Proximity",
      desc: "Minutes from Noida International Airport — seamless global delegate access."
    }
  ]


  const certifications = [
    { name: "ISO 9001", label: "Quality Management" },
    { name: "ISO 14001", label: "Environmental Mgmt" },
    { name: "ISO 45001", label: "OHS Standard" }
  ]


  return (

    <section className={`${playfair.variable} ${inter.variable} py-16 md:py-24 bg-blue-50`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* heading */}

        <div className="mb-10 md:mb-16">
          <p className="[font-family:var(--font-body)] text-blue-600 font-medium tracking-[0.28em] text-xs mb-3">
            WHY CHOOSE US
          </p>
          <h2 className="[font-family:var(--font-heading)] text-2xl sm:text-3xl md:text-[38px] lg:text-[46px] leading-[1.15] text-gray-900 tracking-[-0.02em]">
            NCR's Most <span className="italic text-blue-600">Trusted Venue</span>
          </h2>
        </div>



        <div className="grid gap-10 md:gap-16 md:grid-cols-2 items-start">


          {/* features */}

          <div className="space-y-8">

            {features.map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 sm:gap-5 group"
              >

                {/* icon */}

                <div className="text-xl bg-white border border-blue-100 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg shadow-sm group-hover:border-blue-500 transition">

                  {item.icon}

                </div>



                <div>

                  <h3 className="[font-family:var(--font-heading)] text-base sm:text-lg text-gray-900 mb-1 group-hover:text-blue-700 transition">

                    {item.title}

                  </h3>


                  <p className="[font-family:var(--font-body)] font-light text-gray-600 leading-relaxed text-sm sm:text-base">

                    {item.desc}

                  </p>

                </div>


              </motion.div>

            ))}

          </div>



          {/* award card */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-5 sm:p-8 rounded-2xl shadow-md border border-blue-100"
          >

            <p className="[font-family:var(--font-body)] text-blue-600 font-medium mb-2 tracking-wide">

              National Tourism Award 2018–19

            </p>


            <h3 className="[font-family:var(--font-heading)] italic text-lg sm:text-2xl text-gray-900 mb-4">

              India's Best Standalone Convention Centre

            </h3>


            <p className="[font-family:var(--font-body)] font-light text-gray-600 leading-relaxed text-sm sm:text-base">

              A testament to two decades of excellence in event infrastructure,
              hospitality, and international standards.

            </p>



            <Separator className="my-4 sm:my-6 bg-blue-100" />



            {/* certifications */}

            <div className="grid grid-cols-3 gap-2 sm:gap-4">

              {certifications.map((cert, i) => (

                <div
                  key={i}
                  className="text-center bg-blue-50 p-4 rounded-xl border border-blue-100"
                >

                  <p className="[font-family:var(--font-heading)] italic text-blue-700 text-xs sm:text-base">

                    {cert.name}

                  </p>


                  <p className="[font-family:var(--font-body)] text-[10px] sm:text-xs font-light text-gray-600">

                    {cert.label}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>


        </div>

      </div>

    </section>

  )
}