import { useState } from "react";
import useRecipeStore from "./store";

interface Recipe{
  id: number;
  name: string;
  ingredients: string[];
  instructions: string
}

const Recipe = () => {


  const {recipes, addRecipe, removeRecipe} = useRecipeStore();
  const [recipe, setRecipe] = useState<string>("");
  const [ingr, setIngr] = useState<string>("");
  const [ins, setIns] = useState<string>("");
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  const handleAddRecipe = () => {
    if(recipe.trim() === "" || ingr.trim() === "" || ins.trim() === "") return;

    addRecipe({
      id: Date.now(),
      name: recipe,
      ingredients: ingr.split(",").map((item) => item.trim()),
      instructions: ins
    })
    setRecipe("");
    setIngr("");
    setIns("");
  }

  const handleEditRecipe = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setRecipe(recipe.name);
    setIngr(recipe.ingredients.join(", "));
    setIns(recipe.instructions);
  }

  const handleUpdateRecipe = () => {
    if(recipe.trim() === "" || ingr.trim() === "" || ins.trim() === "") return;

    if(editingRecipe){
      removeRecipe(editingRecipe.id);
      addRecipe({
        id: editingRecipe.id,
        name: recipe,
        ingredients: ingr.split(",").map((item) => item.trim()),
        instructions: ins
      })
      setEditingRecipe(null);
    }

    setRecipe("");
    setIngr("");
    setIns("");
  }

  const handleCancelEdit = () => {
    setEditingRecipe(null);
    setRecipe("");
    setIngr("");
    setIns("");
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          Recipe Book
        </h1>

        <div className="space-y-4 mb-4">

          <input 
            type="text" 
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            placeholder="Recipe Name"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input 
            type="text" 
            value={ingr}
            onChange={(e) => setIngr(e.target.value)}
            placeholder="Ingredients (comma separated)"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            value={ins}
            onChange={(e) => setIns(e.target.value)}
            placeholder="Instructions"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex justify-between">
            {
              editingRecipe ? (

                <>
                  <button
                    onClick={handleUpdateRecipe}
                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    Update
                  </button>

                  <button
                    onClick={handleCancelEdit}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </>

              ) : (
                <button
                  onClick={handleAddRecipe}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Add Recipe
                </button>
              )
            }
          </div>
        </div>
        <ul className="space-y-4">
          {
            recipes.map((recipe) => (
              <li
                key={recipe.id}
                className="p-4 bg-green-50 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-semibold text-green-800 mb-2">
                  {recipe.name}
                </h2>
                <p className="text-gray-700 mb-2">
                  <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Instructions:</strong> {recipe.instructions}
                </p>

                <div className="flex justify-between">
                  <button
                    onClick={() => handleEditRecipe(recipe)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeRecipe(recipe.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </div>

              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )


}

export default Recipe;