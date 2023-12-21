import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
     const [sticky, setSticky] = useState(false);
     const [open, setOpen] = useState(false);
     const navLinks =[
          {name: 'HOME', link:'#home'},
          {name: 'About', link:'#about'},
          {name: 'Contact', link:'#contact'},
     ]
     useEffect(()=>{
          window.addEventListener("scroll", ()=>{
                document.querySelector('nav');
               window.scrollY > 0 ? setSticky(true) : setSticky(false);
          })
     },[])
     return (
      
          <nav className={`px-10 fixed w-full py-2  duration-300 left-0 top-0 z-[999] ${ sticky ? " bg-[#ffffff]   shadow-xl bg-gradient-to-b from-[#4e7bee]  ": ' md:py-0'}`}>
               <div className=" flex items-center justify-between">
                    <div>
                         <h2 className={`md:text-4xl text-2xl uppercase ${sticky ? "text-[#1f2937]" : "text-[#5c85ef]" }  font-bold`} >Our-Task</h2>
                    </div>
                    <div className="  p-2 px-8  rounded-bl-full lg:rounded-br-full  text-gray-900 md:block hidden font-medium ">
                         <ul className=" flex uppercase items-center gap-1 py-2 text-lg">
                              {
                              navLinks?.map((menu,i)=>(
                                   <li key={i} className=" px-8 hover:text-[#1c57f1]">
                                        <a href={menu?.link}>{menu?.name}</a>
                                   </li>
                              ))
                              }
                         </ul>
                    </div>
                    <div onClick={()=>setOpen(!open)} className={`z-[998] text-3xl ${open? "text-gray-900 " : "text-gray-400"} md:hidden`}>
                         {
                              open ? <IoClose className=" " /> : <IoMenu className=" " />
                         }
                    
                    </div>
                    <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-[#fff8f3] top-0 ${open ? "right-0 duration-300": "right-[-100%] duration-300"}`}>
                         <ul className=" flex uppercase flex-col justify-center h-full gap-10 py-2 text-lg">
                           {
                              navLinks?.map((menu,i)=>(
                                   <li key={i} className=" px-6 hover:text-[#1c57f1]">
                                   <a href={menu?.link}>{menu?.name}</a>
                              </li> 
                              ))
                         }   
                         </ul>
                         
                    </div>

                    
               </div>
          </nav>
     );
};

export default Navbar;