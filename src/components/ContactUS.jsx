import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contact.jpg";

const ContactPage = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timeoutRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Show success message immediately
    setMessageSent(true);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // Send email in the background
      await emailjs.send(
        "service_x1hq018",
        "template_jvvheh8",
        templateParams,
        "iImLp3OhImP-BGcA7"
      );

      // On success: clear form and schedule hiding success message after 3s
      setFormData({
        name: "",
        phone: "",
        subject: "",
        message: "",
      });

      timeoutRef.current = setTimeout(() => {
        setMessageSent(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      // On error: hide success, show alert, keep form data for retry
      setMessageSent(false);
      alert("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white flex items-center justify-center px-6 py-14">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2C6A] uppercase mb-5">
            GET IN TOUCH WITH US
          </h2>

          <p className="text-gray-700 text-lg font-medium mb-8">
            Fill the form to get connected
          </p>

          {messageSent && (
            <div className="mb-5 bg-green-100 text-green-700 px-4 py-3 rounded-lg">
              Message Sent Successfully ✅
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full bg-transparent border border-transparent border-b-[#0B2C6A] rounded-md py-3 px-2 outline-none focus:border-b-[#8B005D] transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full bg-transparent border border-transparent border-b-[#0B2C6A] rounded-md py-3 px-2 outline-none focus:border-b-[#8B005D] transition"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full bg-transparent border border-transparent border-b-[#0B2C6A] rounded-md py-3 px-2 outline-none focus:border-b-[#8B005D] transition"
              />
            </div>

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full bg-transparent border border-transparent border-b-[#0B2C6A] rounded-md py-3 px-2 outline-none resize-none focus:border-b-[#8B005D] transition"
            />

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-3 rounded-lg transition duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "SENDING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src={contactImg}
            alt="Contact"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;