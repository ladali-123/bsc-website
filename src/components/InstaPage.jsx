import { useEffect, useState } from "react";

import insta from "../assets/insta.jpg";

import insta1 from "../assets/insta1.jpg";
import insta2 from "../assets/insta2.jpg";
import insta3 from "../assets/insta3.jpg";
import insta4 from "../assets/insta4.jpg";

const InstagramSection = () => {
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [posts, setPosts] = useState(0);

  const finalFollowers = 1568;
  const finalFollowing = 285;
  const finalPosts = 3350;

  useEffect(() => {
    let followerInterval = setInterval(() => {
      setFollowers((prev) => {
        if (prev < finalFollowers) return prev + 8;
        clearInterval(followerInterval);
        return finalFollowers;
      });
    }, 10);

    let followingInterval = setInterval(() => {
      setFollowing((prev) => {
        if (prev < finalFollowing) return prev + 2;
        clearInterval(followingInterval);
        return finalFollowing;
      });
    }, 20);

    let postInterval = setInterval(() => {
      setPosts((prev) => {
        if (prev < finalPosts) return prev + 15;
        clearInterval(postInterval);
        return finalPosts;
      });
    }, 5);

    return () => {
      clearInterval(followerInterval);
      clearInterval(followingInterval);
      clearInterval(postInterval);
    };
  }, []);

  return (
    <section className="w-full bg-[#f5f5f5] py-10 px-4 md:px-10">
      <div
        className="max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl
        py-10 px-6 md:px-16"
      >
        {/* Top Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-center
          gap-8 md:gap-24"
        >
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={insta}
              alt="Instagram"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full
              object-cover shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              bscacademy.patna
            </h2>

            {/* Counts */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-5">
              <p className="text-md md:text-lg">
                <span className="font-bold">
                  {posts.toLocaleString()}
                </span>{" "}
                posts
              </p>

              <p className="text-md md:text-lg">
                <span className="font-bold">
                  {followers.toLocaleString()}
                </span>{" "}
                followers
              </p>

              <p className="text-md md:text-lg">
                <span className="font-bold">
                  {following.toLocaleString()}
                </span>{" "}
                following
              </p>
            </div>

            {/* Bio */}
            <p className="text-gray-700 text-md md:text-lg leading-7">
              BSC Academy, Patna <br />
              Providing quality education for SSC,
              Banking, Railway & Government Exams.
            </p>

            {/* Button */}
            <a
              href="https://www.instagram.com/bscacademy.patna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="mt-6 bg-red-600 hover:bg-red-700
                text-white px-6 py-3 rounded-lg font-semibold
                shadow-lg transition-all duration-300 hover:scale-105"
              >
                Follow on Instagram
              </button>
            </a>
          </div>
        </div>

        {/* Instagram Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          {/* Pic 1 */}
          <a
            href="https://www.instagram.com/p/DYj7HuaFPrZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-md shadow-lg"
          >
            <img
              src={insta1}
              alt="insta1"
              className="w-full h-[320px] object-cover
              hover:scale-105 transition-all duration-300"
            />
          </a>

          {/* Pic 2 */}
          <a
            href="https://www.instagram.com/p/DYhTuiJFcZy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-md shadow-lg"
          >
            <img
              src={insta2}
              alt="insta2"
              className="w-full h-[320px] object-cover
              hover:scale-105 transition-all duration-300"
            />
          </a>

          {/* Pic 3 */}
          <a
            href="https://www.instagram.com/p/DYgdA7qkusq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-md shadow-lg"
          >
            <img
              src={insta3}
              alt="insta3"
              className="w-full h-[320px] object-cover
              hover:scale-105 transition-all duration-300"
            />
          </a>

          {/* Pic 4 */}
          <a
            href="https://www.instagram.com/p/DYgUD1EiptQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-md shadow-lg"
          >
            <img
              src={insta4}
              alt="insta4"
              className="w-full h-[320px] object-cover
              hover:scale-105 transition-all duration-300"
            />
          </a>

        </div>
      </div>
    </section>
  );
};

export default InstagramSection;