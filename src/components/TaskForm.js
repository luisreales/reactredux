import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addTask, editTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
//useNavigate para poder cambiar de pagina
//useParams para traer los parametros por url
import { useNavigate, useParams } from 'react-router-dom'
function TaskForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  //traer tareas del redux por medio del useselector

  const tasks = useSelector((state) => state.tasks)

  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  const handleChange = (e) => {
    /*con el name se quien es el control y con el value su valor*/
    setTask({
      ...task,
      [e.target.name]: [e.target.value],
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(task)
    if (params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      )
    }
    navigate('/')
  }
  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id))
    }
  }, [params.id, tasks])
  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 mb-2">
      <label htmlFor="title" className="block text-xs font-bold">
        Task:
      </label>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-xs font-bold mb-2">
        Description:
      </label>
      <textarea
        name="description"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1">Save</button>
    </form>
  )
}

export default TaskForm
