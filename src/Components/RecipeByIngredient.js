import React from "react";
import { useState, useEffect } from "react";
import { apiKey } from "../utils/apiUrls";
import { getData } from "../utils/getData";
import CardRecipe from "./CardRecipe";

function RecipeByIngredient() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const urlApi =
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";
  useEffect(() => {
    if (ingredients !== "") {
      getData(urlApi + ingredients + `&apiKey=${apiKey}`).then((data) => {
        setRecipes(data);
      });
    }
  }, [ingredients]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIngredients(e.target.elements.ingredients.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="ingredients" />
        <button type="submit">Search</button>
      </form>
      <CardRecipe recipes={recipes}></CardRecipe>
    </div>
  );
}

export default RecipeByIngredient;
