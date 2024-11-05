import Home from "./pages/Home"
import Modal from 'react-modal';


function App() {
  Modal.setAppElement(document.getElementById('root'));
  return (
    <Home/>
  )
}

export default App
