import { useContext } from "react";
import { useForm } from "react-hook-form"
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
    const{register,handleSubmit,reset}=useForm();
    const {recipe,setRecipe}=useContext(RecipeContext)
    const navigate = useNavigate();

    const getData= async(data)=>{
      try {
        const res = await axios.post('http://localhost:3000/api/recipe', data, {
          withCredentials : true
        })
        console.log(res.data.recipe);
        const newRecipe = [...recipe, res.data.recipe]
        setRecipe(newRecipe)
        reset();
        navigate('/')
      } catch (error) {
        console.log(error)
      }
      
        // console.log(data);
        // const newRecipe=[...recipe,{...data,id:data.id = nanoid()}];
        // setRecipe(newRecipe);
        // reset();
        // navigate('/')
    }
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8 px-4'>
      <div className='max-w-xl mx-auto'>
        <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
          <div className='bg-gradient-to-r from-orange-500 to-red-500 p-6'>
            <h1 className='text-3xl font-bold text-white text-center'>Create Recipe</h1>
            <p className='text-white/80 text-center mt-2'>Share your culinary masterpiece</p>
          </div>

          <div className='p-6'>
            <form onSubmit={handleSubmit(getData)} className='flex flex-col gap-3'>
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-gray-700'>Chef Name</label>
                <input 
                  {...register("chefName")} 
                  type="text" 
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200' 
                  placeholder='Enter chef name' 
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-semibold text-gray-700'>Recipe Name</label>
                <input 
                  {...register("recipeName")} 
                  type="text" 
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200' 
                  placeholder='Enter recipe name' 
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-semibold text-gray-700'>Ingredients</label>
                <textarea 
                  {...register("ingredients")} 
                  rows={3}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none' 
                  placeholder='List all ingredients (comma separated)' 
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-semibold text-gray-700'>Instructions</label>
                <textarea 
                  {...register("Instructions")} 
                  rows={4}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none' 
                  placeholder='Step by step cooking instructions' 
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-semibold text-gray-700'>Image URL</label>
                <input 
                  {...register("ImageURL")} 
                  type="url" 
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200' 
                  placeholder='https://example.com/image.jpg' 
                  required
                />
              </div>

              <button 
                type='submit'
                className='w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg'
              >
                Create Recipe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create