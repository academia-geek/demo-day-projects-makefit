import { SearchRecipes } from './SearchRecipes';
import { useGetResults } from '../Hooks/useGetResults';
import { CardResults } from './CardResults';
import styles from "../Styles/SearchApi/SearchApi.module.scss";

export function ResultsRecipes() {
	const { results } = useGetResults()

	return (
		<main className={styles.search_api}>
			<div className={styles.search_input}>
				<SearchRecipes />
			</div>
			<section className={styles.result_container}>
				{results.map((recipe) => {
					return <CardResults key={recipe.id} recipe={recipe} />
				})}
			</section>
		</main>
	)
}
