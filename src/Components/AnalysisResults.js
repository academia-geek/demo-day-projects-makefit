import CardRelated from './CardRelated'
import { Spinner } from './Spinner'

export function AnalysisResults({ data = {}, haveData, loading, error }) {
	if (loading) return <Spinner />
	if (error) console.error(error)

	return (
		<>
			{haveData ? (
				<>
					<section>
						<h2>Nutrition profile of the average {data.category.name}</h2>
						<div className='nutritionalContent'>
							<h2>Quickview</h2>
							<div className='nutritionalInfo'>
								<div className='nutritionalItem'>
									<h4>Calories</h4>
									<span>{data.nutrition.calories.value}</span>
								</div>
								<div className='nutritionalItem'>
									<h4>Carbohydrates</h4>
									<span>
										{data.nutrition.carbs.value}
										{data.nutrition.carbs.unit}
									</span>
								</div>
								<div className='nutritionalItem'>
									<h4>Total Fat</h4>
									<span>
										{data.nutrition.fat.value}
										{data.nutrition.fat.unit}
									</span>
								</div>
								<div className='nutritionalItem'>
									<h4>proteins</h4>
									<span>
										{data.nutrition.protein.value}
										{data.nutrition.protein.unit}
									</span>
								</div>
							</div>
						</div>
					</section>

					<section>
						<h2>Hungry now? Try one of these</h2>
						<div>
							<CardRelated recipes={data.recipes} />
						</div>
					</section>
				</>
			) : null}
		</>
	)
}
