import { Ingredient } from './Ingredient'
import styles from '../Styles/Details/listIngredients.module.scss'
import measuring from '../Styles/Images/measuring.svg'

export function ListIngredients({ listIngredients = [] }) {
	return (
		<div className={styles.grid_ingredients}>
			<div className={styles.grid_ingredients_title}>
				<img src={measuring} alt='measuring' />
				<h2>list of ingredients</h2>
			</div>
			<ul className={styles.list_ingredients}>
				{listIngredients.map((ingredient) => (
					<Ingredient key={ingredient.id} ingredient={ingredient} />
				))}
			</ul>
		</div>
	)
}
