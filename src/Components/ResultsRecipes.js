
import { useGetResults } from '../Hooks/useGetResults';
import styles from "../Styles/SearchApi/SearchApi.module.scss";
import CardResults from './CardResults';
import SearchRecipes from './SearchRecipes';

const ResultsRecipes = () => {
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
export default ResultsRecipes;
