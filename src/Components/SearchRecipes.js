import { useGetQuery } from '../Hooks/useGetQuery'
import { useNavigate } from 'react-router-dom'

const SearchRecipes = () => {
	const { queryRef, query, getQuery } = useGetQuery()
	const navigate = useNavigate()
	const keyword = query.toLowerCase()

	return (
		<section className='controls'>
			<div>
				<h1>Discover Recipes</h1>
				<p>Get the best recipe every day of the week with our daily picks</p>
			</div>
			<form onSubmit={() => navigate(`/results/${keyword}`)}>
				<input onChange={getQuery} type='text' placeholder='Search for recipes ' ref={queryRef} />
				<button>
					<i className='fa-solid fa-magnifying-glass'></i>
				</button>
			</form>
		</section>
	)
}

export default SearchRecipes
