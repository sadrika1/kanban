// import { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { appRoutes } from "../appRoutes";

// export const TaskContext = createContext(null);
// export const useTaskContext = () => useContext(TaskContext)

// export function TaskProvider({ children }) {
//   const [tasks, setTasks] = useState(null);
//   const navigate = useNavigate();

//   function createTask(data) {
//     setTasks(data.tasks);
//     navigate(appRoutes.HOME);
//   }

//   return (
//     <TaskContext.Provider value={{ tasks, createTask }}>
//       {children}
//     </TaskContext.Provider>
//   );
// }
