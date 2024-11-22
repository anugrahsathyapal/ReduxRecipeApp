import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import "../src/bootstrap.min.css"
import View from "./pages/View"
import Pnf from "./pages/Pnf"


function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id/view" element={<View/>}/>
      <Route path="/pnf" element={<Pnf/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
