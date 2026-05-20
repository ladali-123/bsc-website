"use client";

import { useState } from "react";
import { Phone, MapPin } from "lucide-react";

export default function AdmissionSection() {

  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMsg("✅ Form submitted successfully!");

    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);
  };

  return (
    <div className="w-full bg-[#f4f6fb]">

      {/* Top Section */}
      <section
        className="bg-gradient-to-r from-red-600 to-red-500 text-white py-10 px-5 
        relative overflow-hidden"
      >

        {/* Background Shape */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">

          {/* Small Tag */}
          <span
            className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full
            text-sm font-bold shadow-lg"
          >
            ADMISSION OPEN 2025
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight">
            Start Your Journey <br />
            <span className="text-yellow-300">
              Towards Success
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-base md:text-lg text-white/90 mt-4 leading-relaxed">
            Trusted coaching institute for government and competitive exams.
            Get expert guidance, quality education, and complete preparation
            under one platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6">

            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-4
              rounded-xl flex items-center gap-3 shadow-2xl transition duration-300"
            >
              <Phone size={20} />
              Call Now : 97984 22296
            </button>

            <button
              className="border border-white/40 bg-white/10 backdrop-blur-md
              hover:bg-white hover:text-red-600 text-white font-semibold px-4 py-4
              rounded-xl flex items-center gap-3 transition duration-300"
            >
              <MapPin size={20} />
              Visit Our Campus
            </button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-5">
        <div className="max-w-6xl mx-auto">

          {/* Layout */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left Content */}
            <div className="pt-8">

              <span className="text-red-600 font-bold uppercase tracking-wider">
                Admission Form
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
                Apply For Your <br />
                Future Career
              </h2>

              <p className="text-gray-600 text-base md:text-lg mt-5 leading-relaxed max-w-lg">
                Fill out the admission form and our team will contact you
                shortly with complete course details, fees structure, and
                batch information.
              </p>

              {/* Line */}
              <div className="w-24 h-1 bg-red-600 rounded-full mt-8"></div>
            </div>

            {/* Right Form */}
            <div
              className="bg-white p-8 md:p-10 rounded-3xl
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              border border-gray-100"
            >

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    placeholder="Your Full Name"
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4
                    outline-none focus:border-red-600 focus:ring-2
                    focus:ring-red-100 transition"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4
                    outline-none focus:border-red-600 focus:ring-2
                    focus:ring-red-100 transition"
                  />
                </div>

                {/* Address */}
                <input
                  type="text"
                  placeholder="Your Address"
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4
                  outline-none focus:border-red-600 focus:ring-2
                  focus:ring-red-100 transition"
                />

                {/* Course */}
                <select
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4
                  outline-none focus:border-red-600 focus:ring-2
                  focus:ring-red-100 transition text-gray-600"
                >
                  <option value="">Select Course</option>
                  <option>BPSC</option>
                  <option>SSC</option>
                  <option>Banking</option>
                  <option>Railway</option>
                  <option>UPSC</option>
                  <option>Other</option>
                </select>

                {/* Message */}
                <textarea
                  rows="5"
                  placeholder="Write Your Message"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4
                  outline-none focus:border-red-600 focus:ring-2
                  focus:ring-red-100 transition resize-none"
                ></textarea>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold
                  px-10 py-4 rounded-xl transition duration-300
                  shadow-lg w-full md:w-auto"
                >
                  Submit Form
                </button>

                {/* Success Message */}
                {successMsg && (
                  <p className="text-green-600 font-semibold text-sm animate-pulse">
                    {successMsg}
                  </p>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}