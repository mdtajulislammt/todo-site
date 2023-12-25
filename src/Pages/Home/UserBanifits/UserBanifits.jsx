import developer from '../../../assets/developer.webp'
import banker from '../../../assets/bankers.webp'
import corporater from '../../../assets/corporate.png'
import doctor from '../../../assets/doctor.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const UserBanifits = () => {
  useEffect(() =>{
    Aos.init();
  },[])
     return (
          <section className="lg:px-14 px-10  py-10">
               <h2 className=" text-4xl text-center font-bold text-[#5b85ef]">People are using this website</h2>
               <div className=' my-10 grid lg:grid-cols-2 gap-10'>
               <div className="card  bg-base-100 shadow-2xl lg:rounded-tl-full " data-aos="fade-right" data-aos-duration="1000">
    <div className=' '>
    <img src={developer} alt="Shoes" className="rounded-xl w-52  mx-auto  " />
    </div>
 
  <div className="p-4 my-4  items-end  ">
    <h2 className=" text-xl font-bold ml-16">Developer</h2>
    <p className=' font-semibold py-2 lg:w-96 text-end'>A to-do site developer designs and maintains a platform for users to manage tasks. They create a user-friendly interface, implement features for task tracking, and ensure site functionality and reliability.</p>
    
      <button className=" bg-[#5b85ef] font-semibold p-3 px-5 text-white rounded-lg hover:text-[#5b85ef] hover:bg-white hover:border-2 duration-500 border-2 hover:border-[#5b85ef] ">Learn More</button>
      
  </div>
</div>
               <div className="card  bg-base-100 shadow-2xl lg:rounded-tr-full  " data-aos="fade-left" data-aos-duration="1000">
  <figure className=" ">
    <img src={banker} alt="Shoes" className="rounded-xl w-52" />
  </figure>
  <div className="p-4 my-4 items-center text-end ">
    <h2 className=" text-xl font-bold mr-28">Banker</h2>
    <p className=' font-semibold py-2 text-start lg:ml-[150px]  lg:w-96'>A to-do site developer designs and maintains a platform for users to manage tasks. They create a user-friendly interface, implement features for task tracking, and ensure site functionality and reliability.</p>
    
      <button className=" bg-[#5b85ef] font-semibold p-3 px-5 text-white rounded-lg hover:text-[#5b85ef] hover:bg-white hover:border-2 duration-500 border-2 hover:border-[#5b85ef] mr-5 ">Learn More</button>
      
  </div>
</div>
               <div className="card  bg-base-100 shadow-2xl lg:rounded-bl-full  " data-aos="fade-up" data-aos-duration="1000">
  <figure className=" ">
    <img src={corporater} alt="Shoes" className="rounded-xl w-52" />
  </figure>
  <div className="p-4 my-4 items-center text-end ">
    <h2 className=" text-xl font-bold ">Corporator</h2>
    <p className=' font-semibold py-2 lg:w-96 text-end ml-44 '>A to-do site developer designs and maintains a platform for users to manage tasks. They create a user-friendly interface, implement features for task tracking, and ensure site functionality and reliability.</p>
    
      <button className=" bg-[#5b85ef] font-semibold p-3 px-5 text-white rounded-lg hover:text-[#5b85ef] hover:bg-white hover:border-2 duration-500 border-2 hover:border-[#5b85ef]">Learn More</button>
      
  </div>
</div>
               <div className="card  bg-base-100 shadow-2xl lg:rounded-br-full" data-aos="fade-up" data-aos-duration="1000">
  <figure className=" ">
    <img src={doctor} alt="Shoes" className="rounded-xl w-52" />
  </figure>
  <div className="p-4 my-4 items-center ">
    <h2 className=" text-xl font-bold">Doctor</h2>
    <p className=' font-semibold py-2 lg:w-96'>A to-do site developer designs and maintains a platform for users to manage tasks. They create a user-friendly interface, implement features for task tracking, and ensure site functionality and reliability.</p>
    
      <button className=" bg-[#5b85ef] font-semibold p-3 px-5 text-white rounded-lg hover:text-[#5b85ef] hover:bg-white hover:border-2 duration-500 border-2 hover:border-[#5b85ef]">Learn More</button>
      
  </div>
</div>
               </div>
          </section>
     );
};

export default UserBanifits;