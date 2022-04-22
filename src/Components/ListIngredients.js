import { Ingredient } from './Ingredient'

export function ListIngredients({ listIngredients = [] }) {
	return (
		<section>
			{listIngredients.map((ingredient) => (
				<Ingredient key={ingredient.id} ingredient={ingredient} />
			))}
		</section>
	)
}
