"use client";
export default function StatsTicker() {
  const stats = [
    { value: "2,34,453", label: "sq.m Built-Up Area" },
    { value: "73,308", label: "sq.m Exhibition Space" },
    { value: "29+", label: "Conference Rooms" },
    { value: "4,000+", label: "Vehicle Parking" },
    { value: "10 Gbps", label: "Internet Backbone" }
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 border-y border-blue-100">

      <div className="max-w-9xl mx-auto overflow-hidden">

        <div className="flex gap-10 animate-scroll whitespace-nowrap">

          {stats.concat(stats).map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-8 py-4 bg-white rounded-xl shadow-sm border border-blue-100 min-w-[180px]"
            >
              <h3 className="text-xl font-bold text-blue-700">
                {item.value}
              </h3>

              <p className="text-sm text-gray-600 text-center">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>


      {/* animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}