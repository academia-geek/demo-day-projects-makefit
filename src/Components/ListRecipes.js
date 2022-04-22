import CardRecipe from './CardRecipe'
import styles from '../Styles/Dashboard/Dashboard.module.scss'
import SearchRecipes from './SearchRecipes'

export function ListRecipes({ recipes }) {
	return (
		<main className={styles.dash_container}>
			<div className={styles.dash_search}>
				<SearchRecipes />
			</div>

			<section className={styles.dash_meals}>
				{recipes.map((recipe) => {
					return <CardRecipe key={recipe.id} recipe={recipe} />
				})}
			</section>
		</main>
	)
}
