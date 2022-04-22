import { ClockCircleOutlined, PieChartOutlined } from '@ant-design/icons'
import useGetDetailsRecipe from '../Hooks/useGetDetailsRecipe'
import { ListIngredients } from './ListIngredients'
import { NutritionalInfo } from './NutritionalInfo'
import '../Styles/Details/main.css'

export function DetailsRecipe() {
	const { results } = useGetDetailsRecipe()

	return (
		<main className='layoutRecipe'>
			<section className='headRecipe'>
				<figure>
					<img src={results.image} alt={results.title} />
				</figure>
				<div className='titleRecipe'>
					<h1>{results.title}</h1>
					<div className='timeRecipe'>
						<div className='timeBox'>
							<ClockCircleOutlined />
							<span>{results.readyInMinutes} minutes</span>
						</div>
						<div className='timeBox'>
							<PieChartOutlined />
							<span>{results.servings} persons</span>
						</div>
					</div>
				</div>
			</section>
			<ListIngredients listIngredients={results.extendedIngredients} />
			<NutritionalInfo />
		</main>
	)
}
