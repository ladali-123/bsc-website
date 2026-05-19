import pic1 from '../assets/pic1.png'

const Home = () => {
  return (
    <div className="relative w-full">
      <img src={pic1} alt="home" className="w-full" />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/5"></div>
    </div>
  )
}

export default Home