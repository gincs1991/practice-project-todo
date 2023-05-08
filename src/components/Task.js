import classes from "./Task.module.css"

const Task = () => {
const taskList = [
    {
        title: "Bills",
        content: "Pay electricity bills.",
        due: "01 July 2023"
    },

    {
        title: "Cleaning",
        content: "Declutter clothes and documents",
        due: "15 July 2023"
    },

    {
        title: "Apointment",
        content: "Call my doctor to make apoinments.",
        due: "15 June 2023"
    }

]
    return <>
       {taskList.map((task, index) => (
        <div key={index} className={classes.task}>
            <h2>{task.title}</h2>
            <p>{task.content}</p>
            <p>{task.due}</p>
        </div>
       ))}
    </>
}

export default Task;