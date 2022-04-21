import { useGetQuery } from '../Hooks/useGetQuery'
import { useNavigate } from "react-router-dom";

const SearchRecipes = () => {
	const { queryRef, query, getQuery } = useGetQuery()
	const navigate = useNavigate()
	return (
		<div className='App'>
			<section className='controls'>
				<form onSubmit={() => navigate(`/results/${query}`)}>
					<input onChange={getQuery} type='text' placeholder='Query ' ref={queryRef} />
					<button>
						<i className="fa-solid fa-magnifying-glass"></i>
					</button>
				</form>
			</section>
		</div>
	)
}

export default SearchRecipes;
