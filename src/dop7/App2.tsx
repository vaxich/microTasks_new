import React, { useState } from 'react';
import './App2.css';
import { Todolist } from './Todolist2';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type todolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}
export function App2() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        { id: todolistID1, title: 'What to learn', filter: 'all' },
        { id: todolistID2, title: 'What to buy', filter: 'all' },
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ],
        [todolistID2]: [
            { id: v1(), title: "HTML&CSS2", isDone: true },
            { id: v1(), title: "JS2", isDone: true },
            { id: v1(), title: "ReactJS2", isDone: false },
            { id: v1(), title: "Rest API2", isDone: false },
            { id: v1(), title: "GraphQL2", isDone: false },
        ]
    });
    function removeTask(todolistId: string, id: string) {
        let taskForRemoded = tasks[todolistId].filter( t => t.id !== id )
        tasks[todolistId] = taskForRemoded
        setTasks({...tasks})
        //let filteredTasks = tasks.filter(t => t.id != id);
        //setTasks(filteredTasks);
    }

    function addTask(todolistId: string, title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        
        let updateTasks = [newTask, ... tasks[todolistId]]
        tasks[todolistId] = updateTasks
        setTasks({...tasks})
        // let task = { id: v1(), title: title, isDone: false };
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todolistId: string, taskId: string, isDone: boolean) {
        let timeTaks = tasks[todolistId]
        let changedTasks = timeTaks.find(t => t.id === taskId  )
        if(changedTasks) {
            changedTasks.isDone = isDone
            setTasks({...tasks})
        }
            
            
            
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }

        // setTasks([...tasks]);
    }
    function changeFilter(todolistId: string, value: FilterValuesType) {
        
        let todolistForFilter = todolists.find( tl => tl.id === todolistId )
        if(todolistForFilter) {
            todolistForFilter.filter = value
            setTodolists([...todolists])
        }
        
    }
    

    return (
        <div className="App">
            {todolists.map((tl) => {
                let tasksForTodolist = tasks[tl.id];

                if (tl.filter === "active") {
                    tasksForTodolist = tasks[tl.id].filter(t => t.isDone === false);
                }
                if (tl.filter === "completed") {
                    tasksForTodolist = tasks[tl.id].filter(t => t.isDone === true);
                }
                return <Todolist
                    key={tl.id}
                    todolistId={tl.id}
                    title={tl.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={tl.filter}
                />
            })}

        </div>
    );
}


