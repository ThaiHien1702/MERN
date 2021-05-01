import react, { createContext, useState } from 'react'

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'viec 1' },
        { id: 2, title: 'viec 2' },
        { id: 3, title: 'viec 3' },
    ])

    const addTodo = todo => {
        setTodos([...todos, todo])
    }
    const deletTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))

    }
    const TodocontextData = {
        todos,
        addTodo,
        deletTodo
    }
    return(
        <TodoContext.Provider value={TodocontextData}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider