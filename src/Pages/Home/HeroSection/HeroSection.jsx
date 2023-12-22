import './HeroSection.css'
import banner from "../../../assets/banner1.webp"
import { Link } from 'react-router-dom';
const HeroSection = () => {
     return (
          <div className=" bg-black md:h-screen lg:px-12 md:px-12 px-10 lg:pt-40 md:pt-24 pt-20 " id='box'>
          <div className=" " >
  <div className="hero-overlay "></div>
  <div className="md:flex md:flex-row-reverse  justify-between pb-20 md:pb-0 ">
  <div><img src={banner} alt="" className=' drop-s object-cover md:w-[500px] mx-auto w-[250px] mr-14 lg:-mt-16' /></div>
    <div className="max-w-md">
      <h1 className="mb-5 lg:text-5xl md:text-4xl text-2xl mt-4 font-bold">Task Management System</h1>
      <p className="mb-5 font-semibold text-gray-700">A task management system is a digital tool that helps organize, assign, and track tasks for efficient project management and collaboration.</p>
      <Link to={"/dashboard"}>
      <button className=" bg-[#5b85ef] font-semibold p-3 px-5 text-white rounded-lg hover:text-[#5b85ef] hover:bg-white hover:border-2 duration-500 border-2 hover:border-[#5b85ef]">Let’s Explore</button>
      </Link>
    </div>
    
  </div>
</div>
          </div>
     );
};

export default HeroSection;