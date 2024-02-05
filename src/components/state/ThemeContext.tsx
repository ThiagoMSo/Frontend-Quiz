/* eslint-disable prettier/prettier */
import { createContext } from 'react'

export const themes = {
  dark: '',
  light: 'White-content',
}

export const createContextTheme = createContext({
  theme: themes.dark,
  changeTheme: () => { },
})
