const blogs = [
  {
    id: 1,
    title: "How To Prepare For BPSC Exam",
    desc: "Complete strategy and preparation tips to crack BPSC exam in first attempt.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    date: "12 July 2025",
  },
  {
    id: 2,
    title: "Best SSC Preparation Tips",
    desc: "Learn smart study techniques and time management for SSC exams.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    date: "15 July 2025",
  },
  {
    id: 3,
    title: "Railway Exam Complete Guide",
    desc: "Everything you need to know about railway exam syllabus and pattern.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    date: "18 July 2025",
  },
];

function Blogs() {
  return (
    <div className="w-full bg-[#f4f6fb] py-16 px-5">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center">

        <span className="text-red-600 font-bold uppercase tracking-widest">
          Our Blogs
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
          Latest Education Blogs
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 mt-5 text-lg leading-relaxed">
          Explore preparation strategies, exam updates, study tips, and
          guidance blogs to boost your learning journey.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
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
              <h2 className="text-2xl font-bold text-gray-900 mt-3 leading-snug group-hover:text-red-600 transition">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mt-4 leading-relaxed">
                {blog.desc}
              </p>

              {/* Button */}
              <button
                className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
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