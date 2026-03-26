import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const RecipeContext = createContext(null); //it will hold universal data


const RecipeContextProvider = ({children}) => {
  const [recipe,setRecipe]=useState([])

  async function getRecipe() {
    const res = await axios.get('http://localhost:3000/api/recipe',{
      withCredentials : true
    })
    // console.log(res.data.recipes)
    setRecipe(res.data.recipes)
  }

  useEffect(()=>{
    getRecipe()
  }, [])


  return (
    <RecipeContext.Provider value={{recipe,setRecipe,getRecipe}}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextProvider