import { useGetResults } from '../Hooks/useGetResults'
import { ListRecipes } from './ListRecipes'
import styles from "../Styles/General/LoadMore.module.scss"

const ResultsRecipes = () => {
	const { setPage, page, results } = useGetResults()

	const handleLoadMore = () => {
		setPage(page + 8)
	}
	const handleLoadLess = () => {
		setPage(page - 8)
	}

	return (
		<div >
			<ListRecipes recipes={results} />

			<div className={styles.load_more}>
				<button onClick={() => handleLoadLess()}>
					<i className="fa-solid fa-angles-left"></i>
				</button>
				<span>{page/8}</span>
				<button onClick={() => handleLoadMore()}>
					<i className="fa-solid fa-angles-right"></i>
				</button>

			</div>
		</div>
	)
}
export default ResultsRecipes
