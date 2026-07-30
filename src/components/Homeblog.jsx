import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ibpss from "../assets/ibpss.png";
import cglp from "../assets/cglp.png";

import rail from "../assets/rail.png";
export default function HomeBlogSection() {

    const blogs = [

        {
            id: 1,
            title: "SSC CGL 2026 Preparation Strategy: Complete 45-Day Study Plan for Beginners in Patna",
            description: "SSC CGL 2026 Tier 1 exam is coming in August-September 2026. Get a simple, day-wise preparation plan, subject-wise tips, and expert guidance from BSC Academy Patna to boost your score.",
            image: cglp,
            badge: "SSC CGL 2026",
            badgeColor: "bg-purple-100 text-purple-800",
            link: "/blog/ssc-cgl-2026-preparation-strategy"
        },

        {
            id: 2,
            title: "BSC Academy Patna: Your Ultimate Guide to Cracking Government Exams in 2026",
            description: "Every year, lakhs of students from Bihar sit in front of their books, dreaming of the day they will walk into a government office. BSC Academy Patna has been the trusted name for over 24 years ...",
            image: rail,
            badge: "Government Exam Preparation",
            badgeColor: "bg-blue-100 text-blue-800",
            link: "/blog/bank-ssc-railway-exams-2026-complete-guide"
        },

        {
            id: 3,
            title: "IBPS PO 2026 Notification Out: Apply Online for 6,715 Vacancies, Check Exam Date",
            description: "The Institute of Banking Personnel Selection (IBPS) has released the official notification for the IBPS PO 2026 exam. A total of 6,715 vacancies ...",
            image: ibpss,
            badge: "IBPS PO 2026",
            badgeColor: "bg-green-100 text-green-800",
            link: "/blog/ibps-po-2026-notification-out-ibps-po-salary-2026"
        },

    ];

    return (
        <section className="w-full py-8 bg-[#f3eeee]">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="mb-5 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Latest Blog
                    </h2>

                    <p className="text-gray-600 mt-1 text-sm md:text-base">
                        Read our latest updates and exam preparation guides
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >

                            {/* Image */}
                            <div className="overflow-hidden h-[210px]">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">

                                {/* Badge */}
                                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${blog.badgeColor}`}>
                                    {blog.badge}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 leading-snug line-clamp-2">
                                    {blog.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mt-3 line-clamp-3">
                                    {blog.description}
                                </p>

                                {/* Read More */}
                                <Link
                                    to={blog.link}
                                    className="inline-flex items-center gap-2 mt-5 text-red-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
                                >
                                    Read More
                                    <ArrowRight size={16} />
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}