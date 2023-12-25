import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMdClose } from "react-icons/io";

const TodoList = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [todosData, setTodosData] = useState([]);
  const { user } = useContext(AuthContext);
  axiosPublic.get("/createTodo").then((res) => {
    console.log(res.data);
    setTodosData(res.data);
  });

  useEffect(() => {
    const fTodos = todosData?.filter((item) => item.status === "todo");
    const fInProgress = todosData?.filter(
      (item) => item.status === "inprogress"
    );
    const fClose = todosData?.filter((item) => item.status === "closed");

    setTodos(fTodos);
    setInProgress(fInProgress);
    setClosed(fClose);
  }, [todosData]);

  const statuses = ["todos", "inprogress", "closed"];
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2  gap-16 justify-evenly mt-10">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          todosData={todosData}
          setTodosData={setTodosData}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
        />
      ))}
    </div>
  );
};

export default TodoList;

const Section = ({
  status,
  todosData,
  setTodosData,
  todos,
  inProgress,
  closed,
}) => {
  let text = "Todo";
  let bg = "bg-slate-500";
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "In Progress";
    bg = "bg-purple-500";
    tasksToMap = inProgress;
  }
  if (status === "closed") {
    text = "Closed";
    bg = "bg-red-500";
    tasksToMap = closed;
  }

  return (
    <div className={`w-64 font-semibold`}>
      <Header text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.length > 0 &&
        tasksToMap.map((task) => (
          <Task
            key={task._id}
            todosData={todosData}
            setTodosData={setTodosData}
            task={task}
          />
        ))}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex items-center gap-2 h-12  pl-4 rounded-md uppercase text-sm text-white`}
    >
      {text}
      <div className=" bg-white text-black w-5 h-5 rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

const Task = ({task,todosData,setTodosData}) => {
  return <div className=" shadow-md my-5 text-start p-3 relative  rounded-md cursor-grab ">
     <p className=" text-xl">{task.taskTitle}</p>
     <p className="text-gray-500">{task.textDescription}</p>
     <p> Priority : {task.priority}</p>
     <p>{task.date}</p>
     <button className=" absolute bottom-0 right-0 border-l-2 top-0 hover:bg-red-300 p-2  hover:text-black duration-200  text-slate-400"><IoMdClose /></button>
  </div>;
};
