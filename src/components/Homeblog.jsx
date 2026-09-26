import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bankingprep from "../assets/bankingprep.png";
import chslblog from "../assets/chslblog.png";
import govtjob from "../assets/govtjob.png";

export default function HomeBlogSection() {

    const blogs = [


       {
    id: 1,
    title: "SSC CHSL 2026 Notification Out: How to Start Your Preparation Today",
    description: "SSC CHSL 2026 notification is officially out — here's a complete section-wise breakdown of Tier 1 & Tier 2 exam pattern, subject-wise strategy, a realistic study plan, and how BSC Academy's guidance can take you from aspirant to selected candidate...",
    image: chslblog,
    badge: "SSC Exams",
    badgeColor: "bg-red-100 text-red-800",
    link: "/blog/ssc-chsl-2026-preparation-guide"
},
{
    id: 2,
    title: "How to Prepare for Banking Exams: A Step-by-Step Strategy Guide by BSC Academy Patna",
    description: "IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B — no matter which banking exam you're targeting, here's a complete section-wise breakdown of exam pattern, subject-wise strategy, a weekly timetable...",
    image: bankingprep,
    badge: "Banking Exams",
    badgeColor: "bg-blue-100 text-blue-800",
    link: "/blog/how-to-prepare-for-banking-exams"
},
{
    id: 3,
    title: "SSC CGL, IBPS PO, RRB NTPC & Bihar Govt Jobs 2026: One Blog, All Syllabus & Vacancy Updates",
    description: "Preparing for SSC CGL, IBPS PO, RRB NTPC, or BPSC/BSSC at the same time? Here's every upcoming exam stage, vacancy count, and syllabus you need to track right now — with nothing outdated...",
    image: govtjob,
    badge: "Govt Jobs 2026",
    badgeColor: "bg-green-100 text-green-800",
    link: "/blog/ssc-cgl-ibps-po-rrb-ntpc-bihar-jobs-2026"
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