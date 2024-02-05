/* eslint-disable prettier/prettier */
import { Switch } from '@mui/material'
import './assets/styles/global.css'
import { themes, createContextTheme } from './components/state/ThemeContext'
import { useState } from 'react'



function App() {
  const [darkmode, setDarkmode] = useState(true)

  const handleChangeTheme = (changeTheme: (theme: string) => void) => {
    setDarkmode(!darkmode)
    changeTheme(darkmode ? themes.light : themes.dark)
  }

  return (
    <>
      <h1>Mudar de cor</h1>
      <createContextTheme.Consumer>
        {({ changeTheme }) => (
          <Switch
            onClick={() => {
              handleChangeTheme(changeTheme)
            }}
          />
        )}
      </createContextTheme.Consumer>
    </>
  )
}

export default App
