import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pastries from './pages/pastries/Home'
import Greeners from './pages/greeners/Home'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pastries" element={<Pastries />} />
          <Route path="/greener-pastures" element={<Greeners />} />
        </Routes>
      </Router>

    </div>
  )
}
