import { useState } from "react";

import classes from "./NewTaskForm.module.css";

const NewTaskForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredContent, setEnteredContent] = useState("");
    const [enteredDate, setEnteredDate] = useState("");


    const titleHandler = (event) => {
       setEnteredTitle(event.target.value);
    }

    const contentHandler = (event) => {
        setEnteredContent(event.target.value);
     }

     const dateHandler = (event) => {
        setEnteredDate(event.target.value);
     }

     const submitHandler = (event) => {
        event.preventDefault();
        const date = new Date(enteredDate);
        const taskData = {
            title: enteredTitle,
            content: enteredContent,
            due: date.toDateString(),
            id: Math.random().toString()
        }
        props.onAddTask(taskData);
        setEnteredTitle("");
        setEnteredContent("");
        setEnteredDate("");
     }

    return <div className={classes.newTask}>
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleHandler}/>
            </div>
            <div>
                <label>Content</label>
                <input type="text" value={enteredContent} onChange={contentHandler}/>
            </div>
            <div>
                <label>Due Date</label>
                <input type="date" min="2023-01-01" max="2024-01-01" value={enteredDate} onChange={dateHandler}/>
            </div>
            <div className={classes.button}>
                <button type="submit">Create Task</button>
            </div>
        </form>
    </div>
}

export default NewTaskForm;