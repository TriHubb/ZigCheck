import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Validate from './pages/Validate'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <Link to="/" className="logo">
            <img src="/ZigCheck.svg" className="logo" alt="ZigCheck logo" />
          </Link>

          <div className="header-btn user-btn">
            <Link to="/login" className="login-btn">Log In</Link>
            <select className="language-selector">
              <option value="en">EN</option>
            </select>
          </div>
        </div>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/validate" element={<Validate />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
