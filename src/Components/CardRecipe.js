import React from 'react'

export default function CardRecipe({ recipe }) {
	return (
		<article>
			<h1>{recipe.title}</h1>
			<img src={recipe.image} alt={recipe.title} />
			<ul className='instructions'>
				<li>Preparation time: {recipe.readyInMinutes} minutes</li>
				<li>Number of servings: {recipe.servings}</li>
			</ul>

			<a href='/'>Go to Recipe</a>
		</article>
	)
}
