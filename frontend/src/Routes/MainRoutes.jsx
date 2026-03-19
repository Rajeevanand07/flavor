import { Route, Routes } from "react-router"
import Home from "../components/Home"
import About from "../components/About"
import Create from "../components/Create"
import Recipe from "../components/Recipe"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/recipe/:id" element={<Recipe/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
  )
}

export default MainRoutes