import CardRecipe from './CardRecipe'
import { useGetRecipes } from '../Hooks/useGetRecipes'
import '../Styles/cardRecipe.css'
import { SearchRecipes } from './SearchRecipes'

export function Dashboard() {
	const { recipes } = useGetRecipes()
	

	return (
		<main>
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
