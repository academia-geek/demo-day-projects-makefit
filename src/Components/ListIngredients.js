import { Ingredient } from './Ingredient'

export function ListIngredients({ listIngredients = [] }) {
	return (
		<div className='gridIngredients'>
			<h2>list of ingredients</h2>
			<section className='listIngredients'>
				{listIngredients.map((ingredient) => (
					<Ingredient key={ingredient.id} ingredient={ingredient} />
				))}
			</section>
		</div>
	)
}
