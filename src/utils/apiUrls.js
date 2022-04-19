/* PRIMERA const apiKey = '5d0fd108edef4233b88d980e783c9a45' */ 
/* SEGUNDA const apiKey = 'cb1c464d94f142c08b156c5beddade8b'; */
const apiKey = '612fae429be246b6aa24a20de8c595df'
const baseUrl = 'https://api.spoonacular.com/recipes/';

const randomRecipes = `${baseUrl}random?number=5&apiKey=${apiKey} `
const recipesUrl = `${baseUrl}complexSearch`

export { apiKey, recipesUrl, randomRecipes }
