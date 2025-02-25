import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Aishwarya from "./Aishwarya"

function App() {

  return (
    <>
      <Router>
        <Route path="/Aishwarya" element={<Aishwarya />} />
        <Route path="/Arfaniya" element={<Arfaniya />} />
      </Router>
    </>
  )
}

export default App
