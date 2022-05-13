import CardRecipe from './CardRecipe';
import styles from '../Styles/Dashboard/Dashboard.module.scss';
import SearchRecipes from './SearchRecipes';
import SearchImage from '../Styles/Images/search.svg';

export function ListRecipes({ recipes }) {
	return (
		<main className={styles.dash_container}>
			{/* Buscador de recetas */}
			<div className={styles.dash_search}>
				<figure>
					<img src={SearchImage} alt='SearchImage' />
				</figure>
				<SearchRecipes />
			</div>

			{/* Lista de recetas */}
			<section className={styles.dash_meals}>
				<CardRecipe recipes={recipes} />
			</section>
		</main>
	)
}
