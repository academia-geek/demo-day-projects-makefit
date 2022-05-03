//const apiKey = '612fae429be246b6aa24a20de8c595df'
//const apiKey = 'cb1c464d94f142c08b156c5beddade8b'
//const apiKey = '5d0fd108edef4233b88d980e783c9a45'

//const apiKey = '612fae429be246b6aa24a20de8c595df'
//const apiKey = 'a6b16be1e0354caeaba5899362be1d5a'
//const apiKey = 'cb1c464d94f142c08b156c5beddade8b'
//const apiKey = '5d0fd108edef4233b88d980e783c9a45'
//const apiKey = '7fc319634e1e4f95ab424e644529511c'

//my api key
const apiKey = '6bb10c144f794d2b896a052c69e9c5ea'

const baseUrl = 'https://api.spoonacular.com/recipes/'

const randomRecipes = `${baseUrl}random?number=10&apiKey=${apiKey} `
const recipesUrl = `${baseUrl}complexSearch`

export { baseUrl, apiKey, recipesUrl, randomRecipes }
