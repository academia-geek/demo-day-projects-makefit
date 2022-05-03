import { lazy, Suspense } from 'react'
import { ClockCircleOutlined, PieChartOutlined } from '@ant-design/icons'

import useGetDetailsRecipe from '../Hooks/useGetDetailsRecipe'
import { useIntersectionObserver } from '../Hooks/useIntersectionObserver'

import { ListIngredients } from './ListIngredients'
import { Spinner } from './Spinner'
import { Instructions } from './Instructions'

import styles from '../Styles/Details/details.module.scss'

export function DetailsRecipe() {
	const { results } = useGetDetailsRecipe()
	const { isNearScreen, fromRef } = useIntersectionObserver()
	const NutritionalInfo = lazy(() => import('./NutritionalInfo'))

	return (
		<main className={styles.layout_recipe}>
			<section className={styles.head_recipe}>
				<figure>
					<img src={results.image} alt={results.title} />
				</figure>
				<div className={styles.title_recipe}>
					<h1>{results.title}</h1>
					<div className={styles.time_recipe}>
						<div className={styles.timeBox}>
							<ClockCircleOutlined />
							<span className={styles.timeBox_value}>{results.readyInMinutes} minutes</span>
						</div>
						<div className={styles.timeBox}>
							<PieChartOutlined />
							<span className={styles.timeBox_value}>{results.servings} persons</span>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.details_recipe}>
				<ListIngredients listIngredients={results.extendedIngredients} />
				<Instructions />
			</section>
			<section className={styles.layout_nutritional} ref={fromRef}>
				<Suspense fallback={<Spinner />}>{isNearScreen ? <NutritionalInfo /> : null}</Suspense>
			</section>
		</main>
	)
}
