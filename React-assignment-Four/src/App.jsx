import List from '../components/List'
import './App.css'

function App() {
  const listItems=["One", "Two", "Three", "Four"];

  return (
    <>
    <List items={listItems}/>
    </>
  )
}

export default App
