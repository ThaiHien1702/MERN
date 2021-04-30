import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { toggleTheme, theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark} = theme
    const style = isLightTheme ? light : dark
    return (
        <div className='toggle-btn' onClick={toggleTheme}>
            <button style={style}>Toggle Theme</button>
        </div>
    )
}

export default ThemeToggle
