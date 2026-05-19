import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#2c29b8] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <img
              src={logo}
              alt="BSC Academy"
              className="w-72 rounded-xl shadow-lg"
            />

            <p className="mt-6 text-gray-200 leading-8 text-lg">
              Join BSC Academy and take the first step towards a secure and
              successful future.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {["facebook", "instagram", "youtube"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 border border-white/20 rounded-md flex items-center justify-center hover:bg-white hover:text-[#2E2BBF] transition duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    {item === "facebook" && (
                      <path d="M22 12.07C22 6.477 17.523 2 11.93 2S1.86 6.477 1.86 12.07c0 5.018 3.657 9.182 8.438 9.93v-7.03H7.898v-2.9h2.4V9.845c0-2.37 1.41-3.68 3.57-3.68 1.034 0 2.115.185 2.115.185v2.33h-1.192c-1.175 0-1.54.73-1.54 1.48v1.776h2.62l-.42 2.9h-2.2V22c4.78-.748 8.438-4.912 8.438-9.93z" />
                    )}
                    {item === "instagram" && (
                      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5c2.183 0 3.95 1.767 3.95 3.95v8.5c0 2.183-1.767 3.95-3.95 3.95h-8.5c-2.183 0-3.95-1.767-3.95-3.95v-8.5c0-2.183 1.767-3.95 3.95-3.95zm8.95 1.35a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zM12 7a5 5 0 100 10 5 5 0 000-10z" />
                    )}
                    {item === "youtube" && (
                      <path d="M21.8 8.001a2.75 2.75 0 00-1.936-1.946C18.137 5.5 12 5.5 12 5.5s-6.137 0-7.864.555A2.75 2.75 0 002.2 8c-.545 1.728-.545 5.333-.545 5.333s0 3.605.545 5.333a2.75 2.75 0 001.936 1.946C5.863 21.167 12 21.167 12 21.167s6.137 0 7.864-.555a2.75 2.75 0 001.936-1.946c.545-1.728.545-5.333.545-5.333s0-3.605-.545-5.332zM10 15.5v-5l4.5 2.5L10 15.5z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
            <ul className="space-y-4 text-lg">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Blog & News</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Branch 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Jagdeo Path - Branch</h2>

            <div className="space-y-5 text-lg">

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-8 flex justify-center">
                  <svg className="w-5 h-5 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1z"/>
                  </svg>
                </div>
                <p>97984 22296</p>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-8 flex justify-center">
                  <svg className="w-5 h-5 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.236l7.386 6.158a1 1 0 001.228 0L20 8.236V18H4z"/>
                  </svg>
                </div>
                <p className="break-all">bscacademypatna4@gmail.com</p>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-start">
                <div className="w-8 flex justify-center">
                  <svg className="w-5 h-5 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/>
                  </svg>
                </div>
                <p>
                  Ambedkar Path, opp. Ara Garden, Jagdeo Path,
                  Rukanpura, Patna, Bihar 800014
                </p>
              </div>

            </div>
          </div>

          {/* Branch 2 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Rajendra Nagar - Branch</h2>

            <div className="space-y-5 text-lg">
              <p>9798422292</p>
              <p>bscacademypatna4@gmail.com</p>
              <p>
                Grand Arya Complex, Ground Floor, Behind Kotak Mahindra Bank,
                Arya Kumar Road, Rajendra Nagar, Patna - 800016
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <p className="text-center text-gray-200 text-base md:text-lg">
            Copyright © 2026 All Right Reserved BSC Academy Patna
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;