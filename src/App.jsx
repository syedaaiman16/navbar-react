import Navbar from "./Navbar"
import Pricing from "./components/Pricing"
import Home from "./components/Home"
import About from "./components/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App;