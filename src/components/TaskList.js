import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {deleteTask} from '../features/tasks/taskSlice'



function TaskList() {
    const dispatch = useDispatch()
    const stateTask = useSelector(state => state.tasks)
    console.log(stateTask)

    const handleDelete = (id) =>{
        dispatch(deleteTask(id))
    }
    return(
        stateTask.map((task) => (
            <div key={task.id}>
               <h3>{task.title}</h3>
               <p>{task.description}</p>
               <button type='button' onClick={() => handleDelete(task.id)}>Eliminar</button>
            </div>
        ))
    )
}

export default TaskList