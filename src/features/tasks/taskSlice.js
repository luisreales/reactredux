import { createSlice } from '@reduxjs/toolkit'

//cuando inicie la aplicacion seria un arreglo vacio
//reducers, para adicionar las funciones

const data = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task 1 description',
    completed: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task 2 description',
    completed: false,
  },
]
export const taskSlice = createSlice({
  name: 'tasks',
  initialState: data,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      const itemFound = state.find((item) => item.id === action.payload)
      if (itemFound) {
        state.splice(state.indexOf(itemFound), 1)
      }
    },
    editTask: (state, action) => {
      const { id, description, title } = action.payload

      const itemFound = state.find((item) => item.id === id)
      if (itemFound) {
        itemFound.description = description
        itemFound.title = title
      }
    },
  },
})
//se exportan los reducers para ser importados en el context
export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer
