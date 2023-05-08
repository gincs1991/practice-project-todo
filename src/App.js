
import { useState } from "react"; 
import Task from "./components/Task";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import './App.css';

function App() {

  const [tasks, setTasks] = useState("")

  const addTaskHandler = (task) => {
    setTasks({task, ...tasks});
  }

  return <>
    <Header />
    <NewTaskForm onAddTask={addTaskHandler}/>
    <Task />
   </>;
}

export default App;
