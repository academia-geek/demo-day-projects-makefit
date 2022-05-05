import React from "react";
import { useState, useEffect } from "react";
import { apiKey } from "../utils/apiUrls";
import { getData } from "../utils/getData";
import CardRecipe from "./CardRecipe";
import styles from "../Styles/SearchIngredient/SearchIngredient.module.scss";
import Logo from "../Styles/Images/logo-yellow.png";
import styles2 from '../Styles/Dashboard/Dashboard.module.scss';

function RecipeByIngredient() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const urlApi = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIngredients(e.target.elements.ingredients.value);
  };

  useEffect(() => {
    if (ingredients !== "") {
      getData(urlApi + ingredients + `&apiKey=${apiKey}`).then((data) => {
        setRecipes(data);
      });
    }
  }, [ingredients]);

  return (
    <div className={styles.searchIngredient_container}>
      <form onSubmit={handleSubmit} className={styles.searchIngredient_form}>
        <input type="text" name="ingredients" placeholder="Search recipes by ingredients..." />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {
        recipes.length > 0
          ?
          <div className={styles2.CardRecipe}>
            <CardRecipe recipes={recipes}></CardRecipe>
          </div>
          :
          <div className={styles.norecipe_container}>
            <img src={Logo} alt="logoMakeFit" />
            <h1>
              This page allows you to search for your favorite
              recipe by individual ingredients. Write in the search
              engine the ingredient you want your recipe to contain
              and enjoy!
            </h1>
          </div>

      }
    </div>
  );
}

export default RecipeByIngredient;
