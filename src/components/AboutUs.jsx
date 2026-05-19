import about from '../assets/about.jpg';
const AboutUs = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-10 px-6 md:px-24">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1FA8]">
          About US
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

        {/* Left Side */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0B1FA8] leading-snug mb-6">
            Patna’s Trusted Coaching Institute for SSC,
            Banking & Railway Exams
          </h3>

          <p className="text-gray-700 text-lg leading-8 mb-8 text-justify">
            BSC Academy Patna has been a trusted name for over 24 years in
            preparing students for SSC, Banking, Railway, and other government
            exams. Our mission is to provide quality education, expert guidance,
            and result-oriented preparation to help students achieve their dream
            government jobs.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {[
              "24+ Years Experience",
              "Thousands of Successful Students",
              "Expert Faculty Team",
              "Offline Classroom Training",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-2xl text-black">✓</span>
                <p className="text-lg font-medium text-black">{item}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-red-600 hover:bg-red-700 transition-all duration-300
           text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 font-semibold">
            Enroll Now
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)] transition-all duration-500 transform hover:-translate-y-3">
            <img
              src={about}
              alt="About Us"
              className="w-full max-w-[600px] h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;