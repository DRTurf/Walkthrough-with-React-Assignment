import Button from '../components/Button'
import './App.css'

function App() {
  function alert(){
    console.log("Clicked");
    window.alert("Clicked")
  }
  return (
    <>
      <Button name ="Click" onClick={alert} />
    </>
  )
}

export default App
