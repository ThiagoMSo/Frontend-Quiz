import SwitchTheme from './components/SwitchTheme/SwithTheme'
function App() {
  return (
    <>
      <h1>Welcome to the Frontend Quiz!</h1>
      <h3>Pick a subject to get started.</h3>

      <div>
        <SwitchTheme />
        <p>acessibilidade</p>
      </div>

      <span>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>Accessibility</p>
      </span>

      <span>
        {' '}
        Question ${1} of ${10}{' '}
      </span>

      <p>A</p>
      <p>B</p>
      <p>C</p>
      <p>D</p>

      <span>Submit answer</span>

      <h2>Quiz completed</h2>
      <h3>You scored...</h3>

      <span>${10}out of 10</span>
    </>
  )
}

export default App
