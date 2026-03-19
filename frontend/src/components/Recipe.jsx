import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { RecipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const { recipe, setRecipe } = useContext(RecipeContext);
  const filteredRecipe = recipe.find((item) => item._id === id);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      recipeName: filteredRecipe?.recipeName,
      chefName: filteredRecipe?.chefName,
      ingredients: filteredRecipe?.ingredients,
      Instructions: filteredRecipe?.Instructions,
      ImageURL: filteredRecipe?.ImageURL,
    },
  });

  const updateRecipe = async (data) => {
    try {
      console.log(data)
      data._id = id;
      await axios.patch(`http://localhost:3000/api/recipe/${id}`, data);
      setRecipe(recipe.map((item) => (item._id === id ? data : item)));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecipe = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/recipe/${id}`);
      setRecipe(recipe.filter((item) => item._id !== id));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 p-8 flex items-center justify-center">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={filteredRecipe?.ImageURL}
                  alt={filteredRecipe?.recipeName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-orange-600">
                    {filteredRecipe?.chefName}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                  {filteredRecipe?.recipeName}
                </h1>

                <div className="space-y-6">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                      <span className="mr-2">Chef</span>
                    </h3>
                    <p className="text-gray-600">{filteredRecipe?.chefName}</p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                      <span className="mr-2">Ingredients</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {filteredRecipe?.ingredients}
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                      <span className="mr-2">Instructions</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {filteredRecipe?.Instructions}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-8 flex items-center justify-center">
          <div className="max-w-xl w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
                <h1 className="text-3xl font-bold text-white text-center">
                  Alter Recipe
                </h1>
                <p className="text-white/80 text-center mt-2">
                  Update anything you want
                </p>
              </div>

              <div className="p-6">
                <form
                  onSubmit={handleSubmit(updateRecipe)}
                  className="flex flex-col gap-4"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Chef Name
                    </label>
                    <input
                      {...register("chefName")}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter chef name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Recipe Name
                    </label>
                    <input
                      {...register("recipeName")}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter recipe name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Ingredients
                    </label>
                    <textarea
                      {...register("ingredients")}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="List all ingredients (comma separated)"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Instructions
                    </label>
                    <textarea
                      {...register("Instructions")}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Step by step cooking instructions"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Image URL
                    </label>
                    <input
                      {...register("ImageURL")}
                      type="url"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      Update Recipe
                    </button>
                    <button
                      type="button"
                      onClick={deleteRecipe}
                      className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
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
