import { IoCloseSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
const CreateTask = ({tasks,setTasks}) => {
     const [startDate, setStartDate] = useState(new Date());
     const axiosPublic = useAxiosPublic()
     const {user}= useContext(AuthContext);

     const {
          register,
          handleSubmit,
          reset,
        } = useForm()

        const onSubmit = (data) => {
          console.log(data)
          console.log(startDate);

          const userInfo={
               taskTitle: data.taskTitle,
               textDescription : data.textDescription,
               priority : data.priority,
               date: startDate,
               email:user.email,
               status:"todo"
          }
          console.log(userInfo);

          if(data.taskTitle.length < 3) {
               Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: " You  Have must be 3 letters in title", 
                    showConfirmButton: false,
                    timer: 1500
                  })
               return
          }

          axiosPublic.post('/createTodo', userInfo)
              .then(res =>{
                if(res.data.insertedId){
                  console.log(res.data.insertedId);
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: " SignUp Successfully", 
                  showConfirmButton: false,
                  timer: 1500
                })
               }
          })
     }
     return (
          <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className=" flex items-center gap-2 text-white mx-auto text-xl font-semibold bg-blue-400 py-2 px-5 rounded-md" onClick={()=>document.getElementById('my_modal_1').showModal()}> <span>Create Task</span> <FaPlusCircle /></button>
<dialog id="my_modal_1" className="modal">
  <form onSubmit={handleSubmit(onSubmit)} className=" justify-start bg-white p-10 rounded-md lg:w-96">
    <h3 className="font-bold text-lg mb-10">Create New Task !</h3>

    <input 
    {...register("taskTitle")}
     type="text" placeholder=" Task Title" className=" py-2 w-full border-b   rounded border-black font-semibold pl-2" />
    <div>
     <h3 className=" text-start mt-5 font-semibold">Task Description</h3>
     <input
     {...register("textDescription")}
     className=" border rounded-md w-full font-semibold border-black p-2 mt-2" placeholder=" Task Description " />
    </div>

    <div>
     <h3 className=" text-start mt-5 font-semibold mb-2">Select Task Priority</h3>
     <select
     {...register("priority")}
     name="priority" id="" className=" w-full border p-2 font-semibold border-black rounded-md">
          <option value="Low"> Low</option>
          <option value="Low"> Medium</option>
          <option value="Low"> High</option>
     </select>
    </div>
    <div className=" flex justify-between w-full mt-5 font-semibold">
     <h3>Deadline</h3>
     <DatePicker
      selected={startDate} onChange={(date) => setStartDate(date)} className="w-24" />
    </div>
    <div className="modal-action float-left">
      <input type="submit" value="Add" className=" cursor-pointer bg-blue-400 px-4 rounded-md text-white font-semibold" />
      <form method="dialog">
        <button className=" bg-red-400 px-4 rounded-md text-white font-semibold flex items-center gap-2 py-2"> <span>Close</span> <IoCloseSharp /></button>
      </form>
    </div>
  </form>
</dialog>
          </div>
     );
};

export default CreateTask;
