import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Navigation />
      <main className="pt-20 w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all, måste va sist */}
        </Routes>
      </main>
    </div>
  )
}

export default App
