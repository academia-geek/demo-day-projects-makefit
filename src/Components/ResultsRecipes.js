import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutAsync } from '../Redux/actions/actionLogin'
import { SearchRecipes } from './SearchRecipes'
import { useGetResults } from '../Hooks/useGetResults'
import { CardResults } from './CardResults'

export function ResultsRecipes() {
	const { results } = useGetResults()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	//cerrar sesion
	const handleLogout = () => {
		dispatch(logoutAsync())
		navigate('/landingpage')
	}

	return (
		<main>
			<button onClick={() => handleLogout()}>LogOut</button>
			<h1>Results to </h1>
			<SearchRecipes />

			<section>
				{results.map((recipe) => {
					return <CardResults key={recipe.id} recipe={recipe} />
				})}
			</section>
		</main>
	)
}
