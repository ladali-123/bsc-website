"use client";

import { useState } from "react";
import { Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init("iImLp3OhImP-BGcA7");

export default function AdmissionSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    course: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const result = await emailjs.send(
        "service_x1hq018",        // Your Service ID
        "template_t1lti3w",       // Your Template ID
        {
          name: formData.name,    // ✅ CORRECTED: matches {{name}} in template
          phone: formData.phone,
          address: formData.address,
          course: formData.course,
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setSuccessMsg("✅ Form submitted successfully! We'll contact you soon.");
        setFormData({ name: "", phone: "", address: "", course: "", message: "" });
      } else {
        setErrorMsg("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrorMsg("❌ Failed to submit. Please check your network and try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSuccessMsg("");
        setErrorMsg("");
      }, 5000);
    }
  };

  return (
    <div className="w-full bg-[#f4f6fb]">
      {/* Top Section */}
      <section
        className="bg-gradient-to-r from-red-600 to-red-500 text-white py-10 px-5 
        relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span
            className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full
            text-sm font-bold shadow-lg"
          >
            ADMISSION OPEN 2025
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight">
            Start Your Journey <br />
            <span className="text-yellow-300">Towards Success</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-white/90 mt-4 leading-relaxed">
            Trusted coaching institute for government and competitive exams.
            Get expert guidance, quality education, and complete preparation
            under one platform.
          </p>

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

              <div className="w-24 h-1 bg-red-600 rounded-full mt-8"></div>
            </div>

            {/* Right Form */}
            <div
              className="bg-white p-8 md:p-10 rounded-3xl
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4
                  outline-none focus:border-red-600 focus:ring-2
                  focus:ring-red-100 transition"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4
                  outline-none focus:border-red-600 focus:ring-2
                  focus:ring-red-100 transition"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4
                  outline-none focus:border-red-600 focus:ring-2
                  focus:ring-red-100 transition"
                />

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4
                  outline-none focus:border-red-600 focus:ring-2
                  focus:ring-red-100 transition text-gray-600"
                >
                  <option value="">Select Course</option>
                  <option value="BPSC">BPSC</option>
                  <option value="SSC">SSC</option>
                  <option value="Banking">Banking</option>
                  <option value="Railway">Railway</option>
                  <option value="UPSC">UPSC</option>
                  <option value="Other">Other</option>
                </select>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-5 py-4
                  outline-none focus:border-red-600 focus:ring-2
                  focus:ring-red-100 transition resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold
                  px-10 py-4 rounded-xl transition duration-300
                  shadow-lg w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting..." : "Submit Form"}
                </button>

                {successMsg && (
                  <p className="text-green-600 font-semibold text-sm animate-pulse">
                    {successMsg}
                  </p>
                )}
                {errorMsg && (
                  <p className="text-red-600 font-semibold text-sm">
                    {errorMsg}
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