import { useGetRecipes } from '../Hooks/useGetRecipes'
import { ListRecipes } from './ListRecipes'

const Dashboard = () => {
	const { recipes } = useGetRecipes()

	return (
		<>
			<ListRecipes recipes={recipes} />
		</>
	)
}

export default Dashboard
