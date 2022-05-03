import { CardRelated } from './CardRelated'
import { Spinner } from './Spinner'

import styles from '../Styles/UploadPicture/analysisResults.module.scss'
import stylesDetails from '../Styles/Details/nutritionalInfo.module.scss'

export function AnalysisResults({ data = {}, haveData, loading, error }) {
	if (loading) return <Spinner />
	if (error) console.error(error)

	return (
		<>
			{haveData ? (
				<>
					<section className={stylesDetails.nutritional}>
						<h2>Nutrition profile of the average {data.category.name}</h2>
						<div className={stylesDetails.nutritional_info}>
							<div className={stylesDetails.nutritional_item}>
								<h4>Calories</h4>
								<span>{data.nutrition.calories.value}</span>
							</div>
							<div className={stylesDetails.nutritional_item}>
								<h4>Carbohydrates</h4>
								<span>
									{data.nutrition.carbs.value}
									{data.nutrition.carbs.unit}
								</span>
							</div>
							<div className={stylesDetails.nutritional_item}>
								<h4>Total Fat</h4>
								<span>
									{data.nutrition.fat.value}
									{data.nutrition.fat.unit}
								</span>
							</div>
							<div className={stylesDetails.nutritional_item}>
								<h4>proteins</h4>
								<span>
									{data.nutrition.protein.value}
									{data.nutrition.protein.unit}
								</span>
							</div>
						</div>
					</section>

					<section className={styles.recipes_related}>
						<h2>Hungry now? Try one of these</h2>
						<div className={styles.recipes_related_grid}>
							<CardRelated recipes={data.recipes} />
						</div>
					</section>
				</>
			) : null}
		</>
	)
}
