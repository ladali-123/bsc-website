import banking from "../assets/banking.png";
import sbi from "../assets/sbi.png";
import jagd from "../assets/jagd.png";
import whybsc from "../assets/whybsc.png"
import constImg from "../assets/const.png"
import sarkImg from "../assets/sark.png"
import guide from "../assets/guide.png";
import best from "../assets/best.png";
import ibpss from "../assets/ibpss.png";
import rail from "../assets/rail.png";
import cglp from "../assets/cglp.png";
import topper from "../assets/topper.png";
import govtjob from "../assets/govtjob.png";

const blogs = [

  {
    id: 1,
    title: "From Preparation to Selection: How BSC Academy Supports Banking Aspirants",
    desc:"Every year, millions of young Indians sit for competitive banking exams like IBPS PO, SBI Clerk, RBI Grade B, NABARD, and RRB ....",
    image: whybsc,
    badge: "Banking Exam Preparation",
    badgeColor: "bg-red-100 text-red-600",
    link: "/blog/from-preparation-to-selection",
  },
  {
    id: 2,
    title: "Best Banking Coaching in Patna – Why BSCAcademy is the Right Choice for Banking Exam Preparation",
    desc: "Looking for the best banking coaching in Patna? BSCAcademy offers expert guidance for SBI PO, IBPS Clerk, RBI ...",
    image:
      banking,
    date: "18 May 2026",
    link: "/blog/best-banking-coaching-in-patna-bscacademy",
  },
  {
    id: 3,
    title: "SBI Apprentice Recruitment 2026 – 7,150 Vacancies, Apply Online, Stipend, Exam Date",
    desc: "SBI has released the official notification for 7,150 Apprentice posts across India. Apply online from May 19 to June 8, 2026 ...",
    image:
      sbi,
    date: "22 May 2026",
    link: "/blog/sbi-apprentice-recruitment-2026",
  },
  {
    id: 4,
    title: "Best Banking Coaching in Saguna More, Patna: BSC Academy – Your Launchpad to a Successful Banking Career",
    desc: "Looking for the best banking coaching in Saguna More, Patna? Discover why BSC Academy is a top choice for IBPS PO, SBI Clerk ...",
    image: jagd,
    date: "26 May 2026",
    link: "/blog/best-banking-coaching-in-saguna-more-patna",
  },
  {
    id: 5,
    title: "The Real Secret to Success Is Consistency and BSC Academy Helps You Build It",
    desc: "Every year, thousands of students prepare for government exams, but only a fraction succeed. The difference is consistency.",
    image: constImg,
    date: "30 May 2026",
    link: "/blog/the-realsecret-to-success-in-banking-exams-consistency",
  },

  {
    id: 6,
    title: "BSC Academy Patna — Your Ultimate Guide to Cracking Government Exams in 2026",
    desc: "Every year, lakhs of students from Bihar sit in front of their books, dreaming of the day they will walk into a government office ",
    image: sarkImg,
    date: "6 June 2026",
    link: "/blog/bsc-academy-patna-guide-2026",
  },

  {
    id: 7,
    title: "BSC Academy Patna: More Than Just Coaching – How Discipline & Guidance Shape Success",
    desc: "Every serious banking or government exam aspirant needs structure. Discover how BSC Academy Patna builds daily routines, mentorship",
    image: guide,
    date: "12 june 2026",
    link: "/blog/bsc-academy-patna-discipline-guidance"
  },

  {
    id: 8,
    title: "Why BSC Academy Patna Is the Best Choice to Crack Your Government Job in 2026",
    desc: "Every year, lakhs of students in Bihar prepare for SSC, Banking, and Railways exams. BSC Academy Patna has been the trusted name for over 24 years ...",
    image: best,
    date: "27 june 2026",
    link: "/blog/why-bsc-academy-patna-best-choice-for-government-job-2026"
  },

  {
    id: 9,
    title: "IBPS PO 2026 Notification Out: Apply Online for 6,715 Vacancies, Check Exam Date",
    desc: "The Institute of Banking Personnel Selection (IBPS) has released the official notification for the IBPS PO 2026 exam. A total of 6,715 vacancies ...",
    image: ibpss,
    date: "1 July 2026",
    link: "/blog/ibps-po-2026-notification-out-ibps-po-salary-2026"
  },

  {
    id: 10,
    title: "BSC Academy Patna: Your Ultimate Guide to Cracking Government Exams in 2026",
    desc: "Every year, lakhs of students from Bihar sit in front of their books, dreaming of the day they will walk into a government office. BSC Academy Patna has been the trusted name for over 24 years ...",
    image: rail,
    date: "13 July 2026",
    link: "/blog/bank-ssc-railway-exams-2026-complete-guide"
  },

  {
    id: 11,
    title: "SSC CGL 2026 Preparation Strategy: Complete 45-Day Study Plan for Beginners in Patna",
    desc: "SSC CGL 2026 Tier 1 exam is coming in August-September 2026. Get a simple, day-wise preparation plan, subject-wise tips, and expert guidance from BSC Academy Patna to boost your score.",
    image: cglp,
    date: "25 July 2026",
    link: "/blog/ssc-cgl-2026-preparation-strategy"
  },

  {
    id: 12,
    title : "Self-Study Isn't Working? Here's Why Toppers Choose BSC Academy Patna",
    desc : "Preparing for SSC, Railway, or Banking exams alone can only take you so far. Here's how mock tests, doubt sessions, experienced teachers, and dedicated branches at BSC Academy Patna help...",
    image : topper,
    date : "7 August 2026",
    link : "/blog/self-study-vs-bsc-academy-patna"
  },

  {
    id: 13,
    title: "SSC CGL, IBPS PO, RRB NTPC & Bihar Govt Jobs 2026: One Blog, All Syllabus & Vacancy Updates",
    desc: "Preparing for SSC CGL, IBPS PO, RRB NTPC, or BPSC/BSSC at the same time? Here's every upcoming exam stage, vacancy count, and syllabus you need to track right now — with nothing outdated...",
    image: govtjob,
    date: "5 September 2026",
    link: "/blog/ssc-cgl-ibps-po-rrb-ntpc-bihar-jobs-2026"
  }

];

function Blogs() {
  return (
    <div className="w-full bg-[#f4f6fb] py-8 md:mb-16 px-5">

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">

        <span className="text-red-600 font-bold uppercase tracking-widest">
          Our Blogs
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
          Latest Education Blogs
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 mt-3 text-lg leading-relaxed">
          Explore preparation strategies, exam updates, study tips, and
          guidance blogs to boost your learning journey.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-4">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl 
            transition duration-300 group"
          >

            {/* Image */}
            <div className="overflow-hidden h-60">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              {/* Date */}
              <span className="text-sm text-red-600 font-semibold">
                {blog.date}
              </span>

              {/* Title */}
              <h2 className="text-xl  text-justify font-bold text-gray-900 mt-3 leading-snug
               group-hover:text-red-600 transition">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mt-4 leading-relaxed">
                {blog.desc}
              </p>

              {/* Button */}
              <button
                onClick={() => (window.location.href = blog.link)}
                className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl
                 font-semibold transition duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;