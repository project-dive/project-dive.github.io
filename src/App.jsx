import Home from './Views/HomeView';
import About from './Views/AboutView';
import './App.css'

import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
