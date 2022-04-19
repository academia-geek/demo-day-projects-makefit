import { Link } from 'react-router-dom'
import { useGetQuery } from '../Hooks/useGetQuery'

export function SearchRecipes() {
	const { queryRef, query, getQuery } = useGetQuery()

	return (
		<div className='App'>
			<section className='controls'>
				<form>
					<input onChange={getQuery} type='text' placeholder='Query ' ref={queryRef} />
					<button>
						<Link to={`/results/${query}`}>Search Ceripes</Link>
					</button>
				</form>
			</section>
		</div>
	)
}
