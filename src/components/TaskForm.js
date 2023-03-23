import React from 'react'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import {addTask} from '../features/tasks/taskSlice'
import {v4 as uuid} from 'uuid'

function TaskForm() {
    const dispatch = useDispatch();
    const [task,setTask] = useState({
        title:'',
        description:''
    })
    const handleChange = (e) =>{

        /*con el name se quien es el control y con el value su valor*/
        setTask({
            ...task,
            [e.target.name] : [e.target.value]
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(task)
        dispatch(addTask({
            ...task,
            id:uuid()
        }))

    }
    return(
        <form onSubmit={handleSubmit}> 
            <input name="title" type="text" placeholder='title' onChange={handleChange} />
            <textarea name="description" cols="30" rows="10" onChange={handleChange}></textarea>
            <button>Save</button>
        </form>
    )
}

export default TaskForm