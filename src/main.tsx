import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ThemeContextWhapper from './components/state/ThemeContextWhapper.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ThemeContextWhapper>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeContextWhapper>
  </>,
)
