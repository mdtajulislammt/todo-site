import { useContext, useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { CiUser } from 'react-icons/ci';
import {AiOutlineLogout} from 'react-icons/ai';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut =()=>{
     logOut();  
}
  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "Features", link: "/features" },
    { name: "Resources", link: "/resources" },
    { name: "Teams", link: "/team" },
  ];
  const login = <>
  <NavLink
                  to='/login'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending px-4 "
                      : isActive
                      ? " text-white  bg-[#e7495d]   px-3  py-1 rounded lg:text-lg text-base font-semibold   underline"
                      : "lg:text-lg text-base font-semibold py-1 px-4 text-[#e7495d] rounded-md hover:text-[#ffffff] duration-300 hover:bg-[#e7495d]"
                  }
                >
                  Login
                </NavLink>
  </>
  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`px-10 fixed w-full py-2  duration-300 left-0 top-0 z-[999] ${
        sticky
          ? " bg-[#ffffff]   shadow-xl bg-gradient-to-b from-[#4e7bee]  "
          : " md:py-0"
      }`}
    >
      <div className=" flex items-center justify-between">
        <div>
          <Link to={'/'}
            className={`lg:text-4xl md:text-3xl text-2xl uppercase ${
              sticky ? "text-[#1f2937]" : "text-[#5c85ef]"
            }  font-bold`}
          >
            Our-Task
          </Link>
        </div>
        <div className="  p-2 px-8  rounded-bl-full lg:rounded-br-full  text-gray-900 md:block hidden font-medium ">
          <ul className=" flex uppercase items-center gap-1 py-2 text-lg">
            {navLinks?.map((menu, i) => (
              <li key={i} className=" lg:px-4 px-2 hover:text-[#5b85ef]">
                <NavLink
                  to={menu?.link}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " text-white  bg-[#5b85ef]  px-3  py-1 rounded lg:text-lg text-base font-semibold   underline"
                      : "lg:text-lg text-base font-semibold  dark:text-white"
                  }
                >
                  {menu?.name}
                </NavLink>
              </li>
            ))}
            
          </ul>
        </div>
        {
          user ?  <div className="dropdown">
          <label tabIndex={0} className=" cursor-pointer  ">
            {
              user.photoURL? <img src={user.photoURL} className="rounded-full border-2 border-[#5b85ef] w-10 h-10 md:h-12 md:w-12" /> : <CiUser className=" cursor-pointer border-2  border-[#5b85ef] text-black bg-slate-300 p-1 w-10 h-10 rounded-full"/>
            }
          
          </label>
          <ul tabIndex={0} className="menu menu-sm  dropdown-content duration-300 -right-16 md:right-0 h-84 mt-5 w-80 z-[1] p-3 shadow border-4 border-[#ffffff] dark:bg-black  bg-gradient-to-l from-[#4e7bee] to-white   rounded-lg">
         
         <div className=" flex gap-4 justify-center">
          <div className=" flex justify-center">
           <div>
           <h2 className=" text-center  text-lg font-semibold mt-2">{user.displayName}</h2>
           <h2 className=" text-center  ">{user.email}</h2>
           </div>
            
          </div>
         </div>
    
          <div className=" border-t-2 my-2">
            <Link to={'/dashboard'}><h2 className=" flex bg-[#ffffff]  text-black hover:bg-[#5b85ef] p-2 rounded-lg hover:text-white items-center gap-2 my-3 cursor-pointer "><MdOutlineDashboardCustomize/>Dashboard</h2></Link>
            
           <button onClick={handleLogOut} className=" flex bg-[#ffffff]  text-black hover:bg-[#5b85ef] w-full p-2 rounded-lg hover:text-white items-center  gap-2 my-2 cursor-pointer text-b lack"><AiOutlineLogout/> <span className="  hover:text-[#ffffff]">LogOut</span></button>
          </div>
          
          </ul>
        </div> : <>{login}</>
        }
        
        <div
          onClick={() => setOpen(!open)}
          className={`z-[998] text-3xl ${
            open ? "text-gray-900 " : "text-gray-400"
          } md:hidden`}
        >
          
          {open ? <IoClose className=" " /> : <IoMenu className=" " />}
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-gradient-to-r from-[#4e7bee] to-white top-0 ${
            open ? "right-0 duration-300" : "right-[-100%] duration-300"
          }`}
        >
          <ul className=" flex uppercase flex-col justify-center h-full gap-10 py-2 text-lg">
            {navLinks?.map((menu, i) => (
              <li key={i} className=" px-6 hover:text-[#1c57f1]">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
