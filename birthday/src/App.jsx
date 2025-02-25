import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Aishwarya from "./Aishwarya.jsx"
import Maliha from "./Maliha.jsx"

function App() {

  return (
    <>
      <Router>
        <Route path="/Aishwarya" element={<Aishwarya />} />
        <Route path="/Maliha" element={<Maliha />} />
      </Router>
      <a href="/Aishwarya">Aishwarya</a>
      <a href="/Maliha">Maliha</a>
    </>
  )
}

export default App
