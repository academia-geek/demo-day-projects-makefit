export function Ingredient({ ingredient }) {
	const imageUrl = `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
	return (
		<div>
			<h2>{ingredient.nameClean} </h2>
			<img src={imageUrl} alt={ingredient.nameClean} />
			<span>{ingredient.original}</span>
		</div>
	)
}
