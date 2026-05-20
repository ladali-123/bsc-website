import banking from "../assets/banking.png";
import { Link } from "react-router-dom";
export default function HomeBlogSection() {
    return (
        <section className="w-full py-6 bg-[#f3eeee]">

            {/* Container */}
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Latest Blog
                    </h2>

                    <p className="text-gray-600 mt-2 text-base">
                        Read our latest updates and exam preparation guides
                    </p>
                </div>

                {/* Blog Card */}
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">

                    <div className="flex flex-col md:flex-row items-center">

                        {/* Left Image */}
                        <div className="md:w-[320px] w-full h-[220px] md:h-[240px] overflow-hidden">
                            <img
                                src={banking}
                                alt="Banking Coaching"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 p-8">

                            <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                                Banking Exam Preparation
                            </span>

                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                                Best Banking Coaching in Patna – BSC Academy
                            </h3>

                            <p className="text-gray-600 text-base mt-4 leading-relaxed max-w-2xl">
                                Looking for the best banking coaching in Patna? BSCAcademy offers expert
                                guidance for SBI PO, IBPS Clerk, RBI, SSC, and other competitive exams with
                                experienced faculty, mock tests,  . . .
                            </p>

                            {/* Button */}
                            <Link
                                to="/blog/best-banking-coaching-in-patna-bscacademy"
                                className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white 
                                px-6 py-3 rounded-xl font-semibold transition duration-300"
                            >
                                Read More
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}