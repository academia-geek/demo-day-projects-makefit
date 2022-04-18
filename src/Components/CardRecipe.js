import React from 'react'

export default function CardRecipe() {
	return (
		<article>
			<h1>receta</h1>
			<img src='' alt='recipe' />
			<ul className='instructions'>
				<li>Preparation time: readyInMinutes minutes</li>
				<li>Number of servings:servings</li>
			</ul>

			<a href='/'>Go to Recipe</a>
		</article>
	)
}
