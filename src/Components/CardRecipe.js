import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Dashboard/Dashboard.module.scss'

const CardRecipe = ({ recipe }) => {
	return (
		<article className={styles.dash_card}>
			<Link to={`/details/${recipe.id}`}>
				<div>
					<img src={recipe.image} alt={recipe.title} />
					<div className={styles.dash_card__text}>
						<h1>{recipe.title}</h1>
						<h2>Preparation time: {recipe.readyInMinutes} minutes</h2>
						<h2>Number of servings: {recipe.servings}</h2>
					</div>
				</div>
			</Link>
		</article>
	)
}
export default CardRecipe
