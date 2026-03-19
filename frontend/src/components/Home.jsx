import React, { useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { recipe, getRecipe } = useContext(RecipeContext);
  
  const navigate = useNavigate();
  useEffect(() => {
    getRecipe();
  }, []);

  const viewRecipe = (id) =>{
    navigate(`/recipe/${id}`)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Delicious Recipes
        </h1>

        <div className="flex flex-wrap gap-6">
          {recipe.length > 0 ? (
            recipe.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-103 hover:shadow-2xl flex-[1_1_300px] max-w-[300px]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.ImageURL}
                    alt={item.recipeName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-orange-600">
                      {item.chefName}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                      {item.recipeName}
                    </h2>

                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-600 mb-2">
                        Ingredients:
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.ingredients}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-600 mb-2">
                        Instructions:
                      </h3>
                      <p className="text-sm text-gray-600">{item.Instructions}</p>
                    </div>
                  </div>

                  <button onClick={() => viewRecipe(item._id)} className="cursor-pointer w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 cursor-pointer">
                    View Recipe
                  </button>
                </div>
              </div>
            ))
          ) : (
            <>
              <h1 className="text-2xl font-bold capitalize text-center cursor-pointer w-full mb-5">
                No Recipe Found
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;