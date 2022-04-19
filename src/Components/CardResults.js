export function CardResults({ recipe }) {
	return (
		<article>
			<h1>{recipe.title}</h1>
			<img src={recipe.image} alt={recipe.title} />
			<a href='/'>Go to Recipe</a>
		</article>
	)
}
