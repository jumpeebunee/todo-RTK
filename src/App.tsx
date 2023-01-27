import TodoCreate from "./components/TodoCreate"
import TodoList from "./components/TodoList"

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <h2 className="app__heading">Todo</h2>
        <TodoCreate/>
        <TodoList/>
      </div>
    </div>
  )
}

export default App