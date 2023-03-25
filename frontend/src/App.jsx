import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import './App.css'

const App=()=>{
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'/>
          <Route path='/cart'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App