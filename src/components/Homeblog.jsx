import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import mockblog from "../assets/mockblog.png"
import chslblog from "../assets/chslblog.png";
import cglblog from "../assets/cglblog.png";

export default function HomeBlogSection() {

 const blogs = [
  {
    id: 1,
    title: "Studying Alone Won't Crack SSC or Bank Exams: The Revise, Mock Test and Analyse Method That Actually Works",
    description:
      "Reading the syllabus is only the first half of preparation. Here's the study, revise, mock test and analysis cycle that helps SSC and bank aspirants turn long study hours into real marks, week after week...",
    image: mockblog,
    badge: "Study Tips",
    badgeColor: "bg-yellow-100 text-yellow-800",
    link: "/blog/how-to-prepare-revision-mock-test-analysis",
  },
  {
    id: 2,
    title: "SSC CGL 2026 Tier 1 Is Live: Smart Last-Phase Strategy and Your Tier 2 Roadmap",
    description:
      "SSC CGL 2026 Tier 1 is being held right now. Whether your exam date is still ahead or you have already appeared, here's a calm, practical plan: what to revise, how to attempt the paper, and how to start preparing for Tier 2...",
    image: cglblog,
    badge: "SSC Exams",
    badgeColor: "bg-red-100 text-red-800",
    link: "/blog/ssc-cgl-2026-tier-1-strategy-tier-2-roadmap",
  },
  {
    id: 3,
    title: "SSC CHSL 2026 Notification Out: How to Start Your Preparation Today",
    description:
      "SSC CHSL 2026 notification is officially out — here's a complete section-wise breakdown of Tier 1 & Tier 2 exam pattern, subject-wise strategy, a realistic study plan, and how BSC Academy's guidance can take you from aspirant to selected candidate...",
    image: chslblog,
    badge: "SSC Exams",
    badgeColor: "bg-red-100 text-red-800",
    link: "/blog/ssc-chsl-2026-preparation-guide",
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