import { useEffect, useState } from 'react'
import { themes, createContextTheme } from './ThemeContext'
import { ChildProps } from '../../types/TypesTheme'

const ThemeContextWhapper = ({ children }: ChildProps) => {
  const [theme, setTheme] = useState(themes.dark)

  function changeTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content')
        break
      case themes.dark:
        document.body.classList.remove('white-content')
        break
    }
  }, [theme])

  return (
    <>
      <createContextTheme.Provider value={{ theme, changeTheme }}>
        {children}
      </createContextTheme.Provider>
    </>
  )
}

export default ThemeContextWhapper
