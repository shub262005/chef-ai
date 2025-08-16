import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientList from "./IngredientsList.jsx";
import { getRecipeFromMistral } from "./ai";

export default function Fromapp() {
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState("");

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIn) => [...prevIn, newIngredient]);
  }
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <form action={handleSubmit} className="form-add">
        <input
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g.oregano"
          name="ingredient"
        />

        <button>Add ingredient </button>
      </form>

      {ingredients.length ? (
        <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
      ) : null}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
