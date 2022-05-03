import { Link } from 'react-router-dom'
import styles from '../Styles/UploadPicture/cardRelated.module.scss'

export function CardRelated({ recipes = [] }) {
	return (
		<>
			{recipes.map((recipe) => (
				<article key={recipe.id} className={styles.card}>
					<Link to={`/details/${recipe.id}`} className={styles.card_item}>
						<figure className={styles.card_img}>
							<img
								src={`https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg`}
								alt={recipe.title}
							/>
						</figure>
						<h3 className={styles.card_title}>{recipe.title}</h3>
					</Link>
				</article>
			))}
		</>
	)
}
