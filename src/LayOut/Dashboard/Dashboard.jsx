import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
     const [open, setOpen] = useState(true);
     const navLinks = <>
     <NavLink
              to={'/dashboard'}
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
                  : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
              >
                
                <span  className="hidden md:block">My Task</span>
              </NavLink>
     <NavLink
              to={'/dashboard/profile'}
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
                  : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
              >
                
                <span  className="hidden md:block">Profile</span>
              </NavLink>
     <NavLink
              to={'/'}
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
                  : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
              >
                
                <span  className="hidden md:block">Home</span>
              </NavLink>
     </>
     return (
          <div className=" flex ">
               <div
          onClick={() => setOpen(!open)}
          className={`z-[998] text-3xl p-5  absolute ${
            open ? "text-gray-900 duration-700 " : "text-gray-400 duration-700"
          } `}
        >
          
          {open ? <IoClose className=" " /> : <IoMenu className="text-black " />}
        </div>
        <div
          className={` text-gray-900 relative lg:w-1/4 w-2/5 h-screen px-7 py-2 font-medium bg-gradient-to-l from-[#4e7bee]  top-0 ${
            open ? "left-0 duration-700" : "left-[-100%] duration-700"
          }`}
        >
          <h2 className=" lg:text-4xl text-2xl font-bold mt-20 text-[#547fef] ">Our-Task</h2>
          <ul className=" flex uppercase flex-col mt-10 h-full  py-2 text-lg">
            {navLinks}
          </ul>
        </div>
        <Outlet></Outlet>
          </div>
     );
};

export default Dashboard;