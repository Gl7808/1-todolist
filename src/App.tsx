import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/TodoList";

export type filterType = 'All' | 'Active' | 'Complete'
function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "html/css", isDone: true},
        {id: 2, title: "js", isDone: true},
        {id: 3, title: "react", isDone: false},
        {id: 4, title: "RestApi", isDone: true},
        {id: 5, title: "Native", isDone: false},
    ])

    const [filter, setFilter] = useState<filterType>('All')
    let tasksForTodoList = tasks
    if (filter === 'Active') {
        tasksForTodoList = tasks.filter(tasks => tasks.isDone === false)
    }
    if (filter === 'Complete') {
        tasksForTodoList = tasks.filter(tasks => tasks.isDone === true)
    }
    const removeTask = (id:number) => {
        let filteredTasks = tasks.filter(task => task.id != id)
        setTasks(filteredTasks)
    }
    const changeFilter = (value: filterType) =>{
        setFilter(value)
    }
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodoList} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
