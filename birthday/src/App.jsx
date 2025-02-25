import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Aishwarya from "./Aishwarya.jsx"
import Maliha from "./Maliha.jsx"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Aishwarya" element={<Aishwarya />} />
          <Route path="/Maliha" element={<Maliha />} />
        </Routes>
      </Router>
      Wish Link to : <a href="/Aishwarya">Aishwarya</a>
      <hr />
    </>
  )
}

export default App
