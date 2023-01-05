import React, {useState} from "react";
import {filterType} from "../App";

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}
type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (taskId: number)=>void
    changeFilter: (value: filterType)=>void
}


export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((objectTasksMap) => {
                    return (
                        <li key={objectTasksMap.id}>
                            <input type={"checkbox"} checked={objectTasksMap.isDone}/>
                            <span>{objectTasksMap.title}</span>
                            <button style={{marginLeft:'20px'}} onClick={()=>{props.removeTask(objectTasksMap.id)}}>x️</button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button onClick={()=>props.changeFilter('All')}>All</button>
                <button onClick={()=>props.changeFilter('Active')}>Active</button>
                <button onClick={()=>props.changeFilter('Complete')}>Complete</button>

            </div>
        </div>
    );
}