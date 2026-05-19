import { useState } from "react";
import contactImg from "../assets/contact.jpg";

const ContactPage = () => {

  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // message show
    setMessageSent(true);

    // 3 second baad hide ho jayega
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
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

          {/* Success Message */}
          {messageSent && (
            <div className="mb-5 bg-green-100 text-green-700 px-4 py-3 rounded-lg">
              Message Sent Successfully ✅
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border border-transparent border-b-[#0B2C6A] rounded-md py-3 px-2 outline-none focus:border-b-[#8B005D] transition"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-transparent border-b-[#0B2C6A] rounded-md py-3 px-2 outline-none focus:border-b-[#8B005D] transition"
              />
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Phone"
                className="w-full bg-transparent border border-transparent border-b-[#0B2C6A] rounded-md py-3 px-2 outline-none focus:border-b-[#8B005D] transition"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border border-transparent border-b-[#0B2C6A] rounded-md py-3 px-2 outline-none focus:border-b-[#8B005D] transition"
              />
            </div>

            {/* Message Box */}
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full bg-transparent border border-transparent border-b-[#0B2C6A] rounded-md py-3 px-2 outline-none resize-none focus:border-b-[#8B005D] transition"
            ></textarea>

            {/* Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-3 rounded-lg transition duration-300"
              >
                SUBMIT
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