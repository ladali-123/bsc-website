import { useState } from "react";
import about from "../assets/about.jpg";

const BranchJagdeo = () => {
  const [sent, setSent] = useState(false);

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

    const data = {
      access_key: "47c24c0a-5089-41c4-8f7d-4eb96bba1a2c",
      name: formData.name,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSent(true);

        setFormData({
          name: "",
          phone: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSent(false);
        }, 3000);
      } else {
        alert("Message send nahi hua.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="w-full bg-[#f8f9ff] py-12 px-5 md:px-16 lg:px-24">

      {/* HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1FA8]">
          Jagdeo Path Branch
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* SUCCESS MESSAGE */}
      {sent && (
        <div className="mb-6 text-center">
          <div className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-xl border border-green-300">
            Message Sent Successfully ✔
          </div>
        </div>
      )}

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <img
            src={about}
            alt="Branch"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">

          <h3 className="text-lg font-semibold text-[#0B1FA8] mb-5">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-red-600"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-red-600"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-red-600"
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-red-600 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-medium transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

      {/* MAP */}
      <div className="mt-10">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            title="Location"
            src="https://www.google.com/maps?q=Ambedkar+Path,+opp.+Ara+Garden,+Jagdeo+Path,+Rukanpura,+Patna,+Bihar+800014&output=embed"
            width="100%"
            height="380"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>

    </section>
  );
};

export default BranchJagdeo;