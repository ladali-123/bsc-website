import pic1 from "../assets/pic1.png";

import AboutUs from "./AboutUs";
import Courses from "./Courses";
import Youtube from "./Youtube";
import InstaPage from "./InstaPage";
import Review from "./Review";
import ContactUs from "./ContactUS";
import Homeblog from "./Homeblog";


const Home = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="relative w-full">
        <img
          src={pic1}
          alt="home"
          className="w-full"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* ABOUT */}
      <AboutUs />

      {/* COURSES */}
      <Courses />

      {/* YOUTUBE */}
      <Youtube />

      {/* INSTAGRAM */}
      <InstaPage />

      {/* REVIEWS */}
      <Review />

      {/* BRANCHES */}
      <Homeblog/>

      {/* CONTACT */}
      <ContactUs />

      {/* FOOTER */}
     
    </div>
  );
};

export default Home;