import React from 'react'
import { ThemeContext, ThemeUpdateContext } from './ThemeContext'
import { useContext } from 'react'
import { BiSun, BiMoon } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';

const FunctionContextComponent = () => {
    const darkTheme = useContext(ThemeContext)
    const toogleTheme = useContext(ThemeUpdateContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
            <Button variant={darkTheme ? "light" : "dark"} onClick={toogleTheme}>
                {darkTheme ? <BiSun /> : <BiMoon />}
            </Button>
            <div style={themeStyles}>DIV
            </div>
        </>
    )
}

export default FunctionContextComponent