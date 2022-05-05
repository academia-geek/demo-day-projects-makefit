import { useGetResults } from '../Hooks/useGetResults'
import { ListRecipes } from './ListRecipes'

const ResultsRecipes = () => {
	const { results } = useGetResults()
	console.log(results)
	return (
		<>
			<ListRecipes recipes={results} />
		</>
	)
}
export default ResultsRecipes
