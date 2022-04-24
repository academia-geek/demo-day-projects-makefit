import { Link } from 'react-router-dom'

export default function CardRelated({ recipes = [] }) {
	return (
		<>
			{recipes.map((recipe) => (
				<article key={recipe.id}>
					<Link to={`/details/${recipe.id}`}>
						<h3>{recipe.title}</h3>
						<figure>
							<img
								src={`https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg`}
								alt={recipe.title}
							/>
						</figure>
					</Link>
				</article>
			))}
		</>
	)
}
