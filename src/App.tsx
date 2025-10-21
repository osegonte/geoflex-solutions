import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/sections/Footer'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Insights from './pages/Insights'  // ADD THIS

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/insights" element={<Insights />} />  {/* ADD THIS */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App