import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos = () => {
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
    return (
        <div className="todo-list">
            <TodoForm addTodo={addTodo}></TodoForm>
            <ul>

                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} deleteTodo={deletTodo}></TodoItem>
                ))}
            </ul>
            
        </div>
    )
}

export default Todos
