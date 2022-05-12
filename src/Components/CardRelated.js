import { Link } from 'react-router-dom'
import styles from '../Styles/UploadPicture/cardRelated.module.scss'

export function CardRelated({ recipes = [] }) {
	return (
		<div className={styles.related_container}>
			{
				recipes.map((recipe, index) => (
					<div
						className={styles.related_card}
						key={index} >
						<Link to={`/details/${recipe.id}`}>
							<div className={styles.related_card__img}>
								<img
									loading='lazy'
									src={`https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg`}
									alt={recipe.title} />
							</div>
						</Link>
						<Link to={`/details/${recipe.id}`}>
							<h1>
								{recipe.title}
							</h1>
						</Link>
					</div>
				))
			}
		</div >
	)
}