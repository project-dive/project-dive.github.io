import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Chapter from './pages/Chapter'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="pt-20 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chapter" element={<Chapter />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all, måste va sist */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
