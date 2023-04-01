import React, {useState} from 'react'

interface Props{
  children: React.ReactNode;
}

export const ThemeContext = React.createContext(true)
export const ThemeUpdateContext = React.createContext(()=>{})

const ThemeProvider = ({children}: Props) => {
  const [darkTheme, setDarkTheme] = useState(true)

  function toogleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toogleTheme}>
          {children}
        </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>
    </>

  )
}

export default ThemeProvider