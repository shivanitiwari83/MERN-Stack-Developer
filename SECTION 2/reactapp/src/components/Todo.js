// import React, { useState } from 'react';
import React from 'react'
import { useState } from 'react';
import './todo.css'

const Todo = () => {

    // let todolist =[];
    const [todoList, setTodoList] = useState(['Eat breakfast', 'Eat lunch', 'Eat Dinner']);
    const [task, setTask] = useState("");

    const addNewTask = () => {
        // todoList.push("new task");
        if (task) {
            setTodoList([...todoList, task]);
            setTask("");
        }


        // setTodoList([...todoList, "new task"]);

    }
    const removeTask = (index) => {
        let temp = todoList;
        temp.splice(index, 1);
        // update
        // temp[i]= newValue;
        setTodoList([...temp]);

    }




        const showTodoList = () => {

            return todoList.map((task, index) => <div className='d-flex task-body justify-content-between' >
                <p>{task}</p>;
                <button className='btn btn-danger' onClick={() => { removeTask(index) }}> <i class="fas fa-trash"></i> </button>
            </div> );



        // return <h1>My Todo List</h1>
    }
    return (
        <div className='container'>
                <div className="card mt-5">
                    <div className="card-body">
                        <h3>Todo List</h3>
                        <hr />

                        <div className="input-group">

                            <input className='form-control' value={task} onChange={(e) => { setTask(e.target.value) }} />
                            <button onClick={addNewTask} className='btn btn-primary input-group-prepend'>Add Task</button>
                        </div>
                        {showTodoList()}
                    </div>
                </div>
            </div>
            )
        }

        export default Todo;
