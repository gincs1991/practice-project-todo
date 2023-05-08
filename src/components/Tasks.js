import classes from "./Task.module.css"

const Tasks = (props) => {

    return <>
       {props.taskList.map((task, index) => (
        <div key={index} className={classes.task}>
            <h2>{task.title}</h2>
            <p>{task.content}</p>
            <p>{task.due}</p>
        </div>
       ))}
    </>
}

export default Tasks;