import React from "react";
import img6 from "../assets/deepsoftnet-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function Address() {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 bg-[#0F0E0F] p-8">
        {/* Card 1 */}
        <div className="bg-[#0F0E0F] p-6 w-80 max-w-sm rounded-2xl font-[sans-serif] overflow-hidden border-2">
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex justify-center">
              Connect with Us
            </h3>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed mb-8 flex gap-2 justify-center">
            <FaPhoneAlt className="text-white"/>
            +91 9567843340
          </p>
          <p className="text-sm text-gray-200 leading-relaxed mb-8 flex gap-2 justify-center">
            <MdEmail className="text-white"/>
            info@deepnetsoft.com
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0F0E0F] p-6 w-80 max-w-sm rounded-2xl font-[sans-serif] overflow-hidden border-2 text-center">
          <div>
            <img src={img6} alt="Logo" className="mb-4 mx-auto" />
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <FaFacebook className="text-white text-xl hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="text-white text-xl hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="text-white text-xl hover:text-red-500  cursor-pointer" />
            <FaLinkedin className="text-white text-xl hover:text-blue-600 cursor-pointer" />
          </div>
          {/* Logo and social media icons */}
        </div>

        {/* Card 3 */}
        <div className="bg-[#0F0E0F] p-6 w-80 max-w-sm rounded-2xl font-[sans-serif] overflow-hidden border-2">
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex justify-center">Find us</h3>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed mb-1 flex gap-4 justify-center flex-nowrap"><FaLocationDot className="text-yellow-200"/>
            First floor, Geo infopark, Infopark EXPY, Kakkanad</p>
        </div>
      </div>
    </div>
  );
}

export default Address;
