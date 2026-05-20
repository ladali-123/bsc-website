import {
  FileText,
  Landmark,
  TrainFront,
  BriefcaseBusiness,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "SSC Coaching",
    desc: "Complete preparation for SSC CGL, CHSL, MTS, GD and other SSC exams.",
    icon: <FileText size={24} />,
    border: "border-blue-600",
    points: [
      "Tier 1 & 2 Preparation",
      "PYQ Practice",
      "Mock Tests",
    ],
  },
  {
    title: "Banking Exams",
    desc: "Expert coaching for IBPS PO, Clerk, SBI, RBI and other banking sector examinations.",
    icon: <Landmark size={24} />,
    border: "border-red-600",
    points: [
      "Reasoning Classes",
      "English Practice",
      "Banking Awareness",
    ],
  },
  {
    title: "Railway Exams",
    desc: "Specialized preparation for RRB NTPC, Group D and railway recruitment exams.",
    icon: <TrainFront size={24} />,
    border: "border-blue-600",
    points: [
      "RRB NTPC",
      "Current Affairs",
      "Technical Classes",
    ],
  },
  {
    title: "Other Exams",
    desc: "Preparation for Bihar Police, Teaching, State Level and other government job exams.",
    icon: <BriefcaseBusiness size={24} />,
    border: "border-red-600",
    points: [
      "Police Exams",
      "Teaching Jobs",
      "State Level Exams",
    ],
  },
];

const CoursesSection = () => {
  return (
    <section className="w-full bg-[#f0ebeb] py-10 px-4 md:px-24">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <span className="bg-red-100 text-[#0B1FA8] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
          Our Courses
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-5">
          <span className="text-black">Course </span>
          <span className="text-[#0B1FA8]">We Offer</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-7">
          Comprehensive coaching solutions designed to help students succeed in
          SSC, Banking, Railway and other government examinations.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`
              bg-white rounded-[22px] p-5 border-t-[4px]
              ${course.border}
              shadow-[0_8px_25px_rgba(0,0,0,0.10)]
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]
              hover:-translate-y-2
              transition-all duration-500
              group
              relative overflow-hidden
            `}
          >
            {/* Background Glow */}
            <div className="absolute -right-10 -top-10 w-28 h-28 bg-red-50 rounded-full opacity-70 group-hover:scale-125 transition-all duration-500"></div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-yellow-500 text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-all duration-300 relative z-10">
              {course.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#0B1FA8] mb-3 relative z-10">
              {course.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-6 mb-5 relative z-10">
              {course.desc}
            </p>

            {/* Points */}
            <div className="space-y-3 mb-6 relative z-10">
              {course.points.map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle
                    size={15}
                    className="text-red-600 flex-shrink-0"
                  />
                  <p className="text-gray-700 text-sm leading-5">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              to="/admission"
              className="w-full bg-[#0B1FA8] hover:bg-red-600 text-white py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300 relative z-10 text-center block"
            >
              Admission Open
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;

