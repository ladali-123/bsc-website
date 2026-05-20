import banking from "../assets/banking.png";
const blogs = [
  {
    id: 1,
    title: "Best Banking Coaching in Patna – Why BSCAcademy is the Right Choice for Banking Exam Preparation",
    desc: "Looking for the best banking coaching in Patna? BSCAcademy offers expert guidance for SBI PO, IBPS Clerk, RBI ...",
    image:
      banking,
    date: "12 July 2025",
    link: "/blog/best-banking-coaching-in-patna-bscacademy",
  },
  // {
  //   id: 2,
  // title: "Best SSC Preparation Tips",
  //   desc: "Learn smart study techniques and time management for SSC exams.",
  // image:
  //   "https://images.unsplash.com/photo-1513258496099-48168024aec0",
  // date: "15 July 2025",
  // },
  // {
  //  id: 3,
  //  title: "Railway Exam Complete Guide",
  //  desc: "Everything you need to know about railway exam syllabus and pattern.",
  //  image:
  //    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  //  date: "18 July 2025",
  // },
];

function Blogs() {
  return (
    <div className="w-full bg-[#f4f6fb] py-8 px-5">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center">

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
      <div className="max-w-7xl mx-auto mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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