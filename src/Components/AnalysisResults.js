import CardRelated from './CardRelated'
import { Spinner } from './Spinner'

export function AnalysisResults({ data = {}, haveData, loading, error }) {
	console.log('🚀 ~ file: AnalysisResults.js ~ line 5 ~ AnalysisResults ~ data', data)

	if (loading) return <Spinner />
	if (error) console.error(error)

	return (
		<>
			{haveData ? (
				<>
					<section>
						<h2>Nutrition profile of the average {data.category.name}</h2>
						<ul>
							<li>
								<span>Calories</span>
								<span>{data.nutrition.calories.value}</span>
							</li>
							<li>
								<span>fat</span>
								<span>
									{data.nutrition.fat.value}
									{data.nutrition.fat.unit}
								</span>
							</li>
							<li>
								<span>protein</span>
								<span>
									{data.nutrition.protein.value}
									{data.nutrition.protein.unit}
								</span>
							</li>
							<li>
								<span>carbs</span>
								{data.nutrition.carbs.value}
								{data.nutrition.carbs.unit}
							</li>
						</ul>
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
