
import { useState } from "react"; 
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import './App.css';

const taskList = [
  {
      title: "Bills",
      content: "Pay electricity bills.",
      due: "01 July 2023",
      id: "1"
  },

  {
      title: "Cleaning",
      content: "Declutter clothes and documents",
      due: "15 July 2023",
      id: "2"
  },

  {
      title: "Apointment",
      content: "Call my doctor to make apoinments.",
      due: "15 June 2023",
      id: "3"
  }
]

function App() {

  const [tasks, setTasks] = useState([...taskList]);

  const addTaskHandler = (task) => {
    setTasks([task, ...tasks]);
  }

  return <>
    <Header />
    <NewTaskForm onAddTask={addTaskHandler}/>
    <Tasks taskList={tasks} />
   </>;
}

export default App;
