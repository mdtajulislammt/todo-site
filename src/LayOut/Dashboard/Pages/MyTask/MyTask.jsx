import { useState } from "react";
import CreateTask from "../../../../Components/CreateTask";
import TodoList from "../../../../Components/TodoList";

const MyTask = () => {
     const [tasks , setTasks] = useState([])
     return (
          <div className=" p-4  w-full">
               <h2 className=" text-3xl font-bold uppercase">my Task</h2>
               <div className=" text-center pt-10">
                    <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
                    <TodoList asks={tasks} setTasks={setTasks}></TodoList>
               </div>
          </div>
     );
};

export default MyTask;