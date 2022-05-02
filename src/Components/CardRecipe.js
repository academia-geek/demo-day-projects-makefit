import { ClockCircleOutlined, PieChartOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Dashboard/Dashboard.module.scss'

const CardRecipe = ({ recipes }) => {
	return (
		<>
			{recipes.map((recipe) => (
				<article className={styles.dash_card} key={recipe.id}>
					<Link to={`/details/${recipe.id}`}>
						<div>
							<img loading='lazy' src={recipe.image} alt={recipe.title} />
							<div className={styles.dash_card__text}>
								<h1>{recipe.title}</h1>
								<div>
									<ClockCircleOutlined />
									<span>{recipe.readyInMinutes} minutes</span>
								</div>
								<div>
									<PieChartOutlined />
									<span>{recipe.servings} persons</span>
								</div>
							</div>
						</div>
					</Link>
				</article>
			))}
		</>
	)
}
export default CardRecipe
