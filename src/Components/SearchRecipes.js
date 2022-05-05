import { useGetQuery } from '../Hooks/useGetQuery';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/Dashboard/Dashboard.module.scss';

const SearchRecipes = () => {
	const { queryRef, query, getQuery } = useGetQuery()
	const navigate = useNavigate()
	const keyword = query.toLowerCase()

	return (
		<section className={styles.search_container}>
			<div className={styles.search_text}>
				<h1>Discover Recipes</h1>
				<p>Get the best recipe every day of the week with our daily picks</p>
			</div>
			<form 
				className={styles.search_form}
				onSubmit={() => navigate(`/results/${keyword}`)}>
				<input onChange={getQuery} type='text' placeholder='Search for recipes ' ref={queryRef} />
				<button>
					<i className='fa-solid fa-magnifying-glass'></i>
				</button>
			</form>
		</section>
	)
}

export default SearchRecipes
