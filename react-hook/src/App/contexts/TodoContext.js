import react, { createContext, useState ,useEffect} from 'react'

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const todos = localStorage.getItem('todos')
        if (todos) setTodos(JSON.parse(todos))
    
    }, [])
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

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