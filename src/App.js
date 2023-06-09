import { useSelector } from 'react-redux'
/*useselector para seleccionar la data del state
useDispatch para llamar a las acciones del reducer*/
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
//browser router es el enrutador
//routes son toda la lista de rutas
//route, es la ruta como tal, una unica ruta
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const taskState = useSelector((state) => state.tasks)
  console.log(taskState)
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
