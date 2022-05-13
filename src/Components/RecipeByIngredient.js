import React from "react";
import { useState, useEffect } from "react";
import { apiKey } from "../utils/apiUrls";
import { getData } from "../utils/getData";
import CardRecipe from "./CardRecipe";
import styles from "../Styles/SearchIngredient/SearchIngredient.module.scss";
import searchIllustration from "../Styles/Images/search-illustration.png";

function RecipeByIngredient() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [more, setMore] = useState(8);
  const urlApi = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIngredients(e.target.elements.ingredients.value);
  };

  useEffect(() => {
    if (ingredients !== "") {
      getData(urlApi + ingredients + `&number=${more}` + `&apiKey=${apiKey}`).then((data) => {
        setRecipes(data);
      });
    }
  }, [ingredients, more]);

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
          <div className={styles.cardrecipe_container}>
            <CardRecipe recipes={recipes}></CardRecipe>
            <div className={styles.cardrecipe_more__btn}>
              <button onClick={() => setMore(more + 8)}>
                <i className="fa-solid fa-plus"></i>
                Load more
              </button>
            </div>
          </div>
          :
          <div className={styles.norecipe_container}>
            <img src={searchIllustration} alt="logoMakeFit" />
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
