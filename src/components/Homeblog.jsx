import sbi from "../assets/sbi.png";
import jagd from "../assets/jagd.png";
import { Link } from "react-router-dom";
import whybsc from "../assets/whybsc.png";
import { ArrowRight } from "lucide-react";

export default function HomeBlogSection() {

    const blogs = [
        {
            id: 1,
            title: "From Preparation to Selection: How BSC Academy Supports Banking Aspirants",
            description:
                "Every year, millions of young Indians sit for competitive banking exams like IBPS PO, SBI Clerk, RBI Grade B, NABARD, and RRB ....",
            image: whybsc,
            badge: "Banking Exam Preparation",
            badgeColor: "bg-red-100 text-red-600",
            link: "/blog/from-preparation-to-selection",
        },
        {
            id: 2,
            title: "SBI Apprentice Recruitment 2026 – 7,150 Vacancies, Apply Online, Stipend, Exam Date",
            description:
                "SBI has released the official notification for 7,150 Apprentice posts across India. Apply online from May 19 to June 8, 2026. Monthly stipend ₹15,000. Check eligibility details and exam information.",
            image: sbi,
            badge: "SBI Recruitment 2026",
            badgeColor: "bg-blue-100 text-blue-600",
            link: "/blog/sbi-apprentice-recruitment-2026",
        },
        {
            id: 3,
            title: "Best Banking Coaching in Jagdeo Path, Patna: BSC Academy – Your Launchpad to a Successful Banking Career",
            description: "Looking for the best banking coaching in Jagdeo Path, Patna? Discover why BSC Academy is a top choice for IBPS PO, SBI Clerk, RBI Grade B, and other banking exams along with the best preparation books and strategies.",
            image: jagd,
            badge: "Banking Coaching in Jagdeo Path",
            badgeColor: "bg-green-100 text-green-600",
            link: "/blog/best-banking-coaching-in-jagdeo-path-patna",
        }
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