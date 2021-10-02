import './App.css'

function App() {
  return (
    <div className="App">
      <div className="parent">
        <div className="left">
          <h1>left</h1>
          <form action="">
            <input type="email" />
            <button type="submit">enviar</button>
          </form>
        </div>

        <div className="right">
          <h2>Flexbox - Split Screen Layout</h2>
          <p>Example of a split screen layout that uses flexbox.</p>
          <p>
            A media query is used to detect if the virewport is below 600px, if
            it is then <b>flex-direction</b> is set to column-reverse, so that
            the image is displayed after the copy, useful on mobile devices!.
          </p>
          <p>Reduce the window size to below 600px to see an example.</p>
        </div>
      </div>
    </div>
  )
}

export default App
