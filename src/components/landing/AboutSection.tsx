"use client";
import { motion } from "framer-motion";

export default function AboutIEML() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="/about.jpg"
            className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
          />

          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-100 rounded-[40px] blur-3xl opacity-60 -z-10"></div>
        </div>


        {/* RIGHT CONTENT */}
        <div>
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-4">
            ABOUT IEML
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            India's First Round O'Clock <br />
            <span className="text-blue-600">International Mart</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Inaugurated by India's Prime Minister, IEML has grown into one of
            India's top 3 integrated exhibition and convention venues — a
            landmark for global trade and enterprise.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            Spanning 58 acres in Greater Noida, IEML is the preferred venue for
            India's most prestigious trade associations, global corporations,
            and government bodies.
          </p>


          <div className="space-y-5">

            <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <div className="text-xl">🏅</div>
              <p className="text-gray-700">
                National Tourism Award 2018–19 — India's Best Convention Centre
              </p>
            </div>

            <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <div className="text-xl">🌐</div>
              <p className="text-gray-700">
                Host to UNCCD COP-14, Auto Expo, World Dairy Congress & 600+ global events
              </p>
            </div>

            <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <div className="text-xl">⚡</div>
              <p className="text-gray-700">
                10 Gbps backbone · 24/7 surveillance · Helipad on-campus
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
