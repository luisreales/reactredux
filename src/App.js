import {useSelector} from 'react-redux'
/*useselector para seleccionar la data del state
useDispatch para llamar a las acciones del reducer*/
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const taskState = useSelector(state => state.tasks)
  console.log(taskState)
  return (
    <div className="App">
      <h1>Hola</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
