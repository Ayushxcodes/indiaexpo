"use client"

import { Separator } from "@/components/ui/separator"

export default function Footer() {

  return (

    <footer className="bg-[#0b2a55] border-t border-blue-100">

      <div className="max-w-7xl mx-auto px-6 py-16">


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* brand */}

          <div>

            <h3 className="text-lg font-semibold text-gray-100 mb-3">
              India Expo Centre & Mart
            </h3>

            <p className="text-sm text-gray-100 mb-4">
              IEML · Greater Noida
            </p>

            <p className="text-sm text-gray-100 leading-relaxed">
              Plot No. 25–29, Knowledge Park II,<br/>
              Greater Noida, UP — 201306
            </p>

          </div>



          {/* venue */}

          <div>

            <h4 className="font-semibold text-gray-100 mb-4">
              Venue
            </h4>

            <ul className="space-y-2 text-sm text-gray-100">

              <li className="hover:text-blue-600 cursor-pointer">
                Exhibition Halls
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Conference Rooms
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Meeting Rooms
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Open Grounds
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Hotel & Dining
              </li>

            </ul>

          </div>



          {/* events */}

          <div>

            <h4 className="font-semibold text-gray-100 mb-4">
              Events
            </h4>

            <ul className="space-y-2 text-sm text-gray-100">

              <li className="hover:text-blue-600 cursor-pointer">
                Upcoming Events
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Past Events
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Trade Fairs
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Conferences
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Virtual Events
              </li>

            </ul>

          </div>



          {/* company */}

          <div>

            <h4 className="font-semibold text-gray-100 mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-sm text-gray-100">

              <li className="hover:text-blue-600 cursor-pointer">
                About IEML
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Awards & Certs
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                CSR Initiatives
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Media Gallery
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Contact Us
              </li>

            </ul>

          </div>


        </div>



        <Separator className="my-10 bg-blue-100" />


        {/* bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-100">

          <p>
            © 2026 India Exposition Mart Limited. All rights reserved.
          </p>


          <div className="flex gap-6">

            <span className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-blue-600 cursor-pointer">
              Terms
            </span>

          </div>

        </div>


      </div>

    </footer>

  )
}