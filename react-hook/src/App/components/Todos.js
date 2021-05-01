import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { TodoContext } from '../contexts/TodoContext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos = () => {
    const { todos, addTodo, deletTodo } = useContext(TodoContext)
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <div className="todo-list">
            {isAuthenticated ? (
                <>
                    <TodoForm addTodo={addTodo}></TodoForm>
                    <ul>
                        {todos.map(todo => (
                            <TodoItem todo={todo} key={todo.id} deleteTodo={deletTodo}></TodoItem>
                        ))}
                    </ul>
                </>
            ) : 'ban phai dang nhap'}

        </div>
    )
}

export default Todos
