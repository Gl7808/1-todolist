import React from 'react';
import './App.css';
import {Todolist} from "./components/TodoList";

function App() {
    const tasks1 = [
        {id: 1, title: "html/css", isDone: true},
        {id: 2, title: "js", isDone: true},
        {id: 3, title: "react", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "coffe", isDone: true},
        {id: 2, title: "tea", isDone: true},
        {id: 3, title: "bear", isDone: false}
    ]
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="What to do" tasks={tasks2}/>

        </div>
    );
}

export default App;
