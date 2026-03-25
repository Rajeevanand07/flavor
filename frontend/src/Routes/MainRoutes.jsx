import { Route, Routes } from "react-router"
import Home from "../components/Home"
import About from "../components/About"
import Create from "../components/Create"
import Recipe from "../components/Recipe"
import Login from "../components/Login"
import Signup from "../components/Signup"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/recipe/:id" element={<Recipe/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
  )
}

export default MainRoutes