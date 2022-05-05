import { useGetRecipes } from '../Hooks/useGetRecipes'
import { ListRecipes } from './ListRecipes'

const DiscoverRecipes = () => {
	const { recipes } = useGetRecipes()

	return (
		<>
			<ListRecipes recipes={recipes} />
		</>
	)
}

export default DiscoverRecipes;
