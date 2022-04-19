import CardRecipe from './CardRecipe'
import { useGetRecipes } from '../Hooks/useGetRecipes'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutAsync } from '../Redux/actions/actionLogin'
import '../Styles/cardRecipe.css'
import { SearchRecipes } from './SearchRecipes'

export function Dashboard() {
	const { recipes } = useGetRecipes()
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
			<h1>Macros</h1>
			<SearchRecipes />

			<section className='meals'>
				{recipes.map((recipe) => {
					return <CardRecipe key={recipe.id} recipe={recipe} />
				})}
			</section>
		</main>
	)
}
