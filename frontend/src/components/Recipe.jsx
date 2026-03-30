import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { RecipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const { recipe, setRecipe } = useContext(RecipeContext);
  const [filteredRecipe, setFilteredRecipe] = useState(null)
  // const filteredRecipe = recipe.find((item) => item._id === id);\
  const navigate = useNavigate();

  useEffect(()=>{
    singleRecipe()
  }, [])


  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      recipeName: "",
      chefName: "",
      ingredients: "",
      Instructions: "",
      ImageURL: "",
    },
  });

  const singleRecipe = async () => {
    try {
      const res = await axios.get(`https://flavor-fm8j.onrender.com/api/recipe/${id}`, {
        withCredentials : true
      })
      console.log(res.data.recipe)
      setFilteredRecipe(res.data.recipe)
      reset({
        recipeName: res.data.recipe.recipeName || "",
        chefName: res.data.recipe.chefName || "",
        ingredients: res.data.recipe.ingredients || "",
        Instructions: res.data.recipe.Instructions || "",
        ImageURL: res.data.recipe.ImageURL || "",
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateRecipe = async (data) => {
    try {
      console.log(data)
      data._id = id;
      await axios.patch(`https://flavor-fm8j.onrender.com/api/recipe/${id}`, data, {
        withCredentials : true
      });
      setRecipe(recipe.map((item) => (item._id === id ? data : item)));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecipe = async () => {
    try {
      await axios.delete(`https://flavor-fm8j.onrender.com/api/recipe/${id}`, {
        withCredentials : true
      });
      setRecipe(recipe.filter((item) => item._id !== id));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={filteredRecipe?.ImageURL}
                  alt={filteredRecipe?.recipeName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 rounded-full">
                  <span className="text-xs sm:text-sm font-semibold text-orange-600">
                    {filteredRecipe?.chefName}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                  {filteredRecipe?.recipeName}
                </h1>

                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-orange-50 rounded-lg p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 flex items-center">
                      <span className="mr-2">Chef</span>
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">{filteredRecipe?.chefName}</p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 flex items-center">
                      <span className="mr-2">Ingredients</span>
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {filteredRecipe?.ingredients}
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 flex items-center">
                      <span className="mr-2">Instructions</span>
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {filteredRecipe?.Instructions}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          <div className="max-w-xl w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center">
                  Alter Recipe
                </h1>
                <p className="text-white/80 text-center mt-1 sm:mt-2 text-sm sm:text-base">
                  Update anything you want
                </p>
              </div>

              <div className="p-4 sm:p-6">
                <form
                  onSubmit={handleSubmit(updateRecipe)}
                  className="flex flex-col gap-3 sm:gap-4"
                >
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                      Chef Name
                    </label>
                    <input
                      {...register("chefName")}
                      type="text"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Enter chef name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                      Recipe Name
                    </label>
                    <input
                      {...register("recipeName")}
                      type="text"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Enter recipe name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                      Ingredients
                    </label>
                    <textarea
                      {...register("ingredients")}
                      rows={3}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                      placeholder="List all ingredients (comma separated)"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                      Instructions
                    </label>
                    <textarea
                      {...register("Instructions")}
                      rows={4}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                      placeholder="Step by step cooking instructions"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                      Image URL
                    </label>
                    <input
                      {...register("ImageURL")}
                      type="url"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>

                  <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-3 sm:py-3 sm:px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                    >
                      Update Recipe
                    </button>
                    <button
                      type="button"
                      onClick={deleteRecipe}
                      className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-2 px-3 sm:py-3 sm:px-6 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                    >
                      Delete Recipe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
