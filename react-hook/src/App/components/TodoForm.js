import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContext } from '../contexts/ThemeContext'

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme
    const style = isLightTheme ? light : dark
    const onTitleChange = event => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo({
            id: uuidv4(),
            title
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={onTitleChange}
                type='text'
                name='title'
                placeholder='Enter a new todo...'
                value={title}
                required
            ></input>
            <input type='submit' value='add' style={style}></input>
        </form>
    )
}

export default TodoForm
