import './App.css'

import TodoItem from './components/TodoItem/TodoItem'

// En komponent i React måste alltid starta med en stor bokstav i komponentens namn
function App() {
  
  return (
    <div className="App">
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  )
}

export default App
