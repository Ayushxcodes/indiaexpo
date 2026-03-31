"use client"

import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

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

    <section className="py-24 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}

        <div className="mb-16">

          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-3">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            NCR's Most Trusted Venue
          </h2>

        </div>



        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* left features */}

          <div className="space-y-8">

            {features.map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5"
              >

                <div className="text-2xl">
                  {item.icon}
                </div>


                <div>

                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.desc}
                  </p>

                </div>


              </motion.div>

            ))}

          </div>



          {/* right award card */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >

            <p className="text-blue-600 font-semibold mb-2">
              National Tourism Award 2018–19
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              India's Best Standalone Convention Centre
            </h3>

            <p className="text-gray-600 leading-relaxed">
              A testament to two decades of excellence in event infrastructure,
              hospitality, and international standards.
            </p>


            <Separator className="my-6 bg-blue-100" />


            {/* certifications */}

            <div className="grid grid-cols-3 gap-4">

              {certifications.map((cert, i) => (

                <div
                  key={i}
                  className="text-center bg-blue-50 p-4 rounded-xl"
                >

                  <p className="font-semibold text-blue-700">
                    {cert.name}
                  </p>

                  <p className="text-xs text-gray-600">
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