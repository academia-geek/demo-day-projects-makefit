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


{/* <article key={recipe.id} className={styles.card}>
	<Link to={`/details/${recipe.id}`} className={styles.card_item}>
		<figure className={styles.card_img}>
			<img
				src={`https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg`}
				alt={recipe.title}
			/>
		</figure>
		<h3 className={styles.card_title}>{recipe.title}</h3>
	</Link>
</article> */}