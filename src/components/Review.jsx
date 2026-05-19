import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Rahul Kumar",
    role: "Banking Aspirant",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    review:
      "BSC Academy is one of the best institutes for SSC and Banking preparation. Classes are very disciplined and helpful.",
  },

  {
    name: "Sneha Singh",
    role: "SSC Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    review:
      "Best coaching institute in Patna for Banking and SSC preparation. Faculty support is excellent.",
  },

  {
    name: "Aman Raj",
    role: "Bank PO Aspirant",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    review:
      "Reasoning and quantitative classes are very helpful. Mock tests improved my confidence a lot.",
  },

  {
    name: "Priya Kumari",
    role: "Government Exam Student",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    review:
      "Highly recommended for SSC, Banking and Railway exams. Great study environment and guidance.",
  },
];

const ReviewSection = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-12 px-4 md:px-24">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1FA8]">
          Student Reviews
        </h2>

        <p className="text-gray-600 mt-3 text-lg">
          Trusted by Banking & SSC Aspirants in Patna
        </p>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white rounded-2xl shadow-lg p-6
              hover:shadow-2xl transition-all duration-300
              h-full"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-red-600 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="text-yellow-500 text-lg mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Review */}
              <p className="text-gray-700 leading-7">
                "{item.review}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSection;