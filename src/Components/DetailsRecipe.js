import useGetDetailsRecipe from '../Hooks/useGetDetailsRecipe'
import { ListIngredients } from './ListIngredients'
import { NutritionalInfo } from './NutritionalInfo'

export function DetailsRecipe() {
	const { results } = useGetDetailsRecipe()

	return (
		<main>
			<section>
				<h1>{results.title}</h1>
				<div className=''>
					<figure>
						<img src={results.image} alt={results.title} />
					</figure>
					<div className=''>
						<div>
							<span>Ready in {results.readyInMinutes} minutes</span>
						</div>
						<div>
							<span>Portion {results.servings} persons</span>
						</div>
					</div>
				</div>
			</section>
			<section></section>
			<ListIngredients listIngredients={results.extendedIngredients} />
			<NutritionalInfo />
		</main>
	)
}
