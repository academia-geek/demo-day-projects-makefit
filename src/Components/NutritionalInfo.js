import { Table } from 'antd'
import useGetnutritional from '../Hooks/useGetnutritional'

import styles from '../Styles/Details/nutritionalInfo.module.scss'

export function NutritionalInfo() {
	const { results, bad, good } = useGetnutritional()

	const columnsBad = [
		{
			title: 'Title',
			dataIndex: 'title',
		},
		{
			title: 'Amount',
			dataIndex: 'amount',
		},
		{
			title: 'percent Of Daily Needs',
			dataIndex: 'percentOfDailyNeeds',
		},
	]
	const columnsGood = [
		{
			title: 'Title',
			dataIndex: 'title',
		},
		{
			title: 'Amount',
			dataIndex: 'amount',
		},
		{
			title: 'percent Of Daily Needs',
			dataIndex: 'percentOfDailyNeeds',
		},
	]

	return (
		<section className={styles.nutritional}>
			<h2>Nutritional information</h2>
			<div className='nutritionalContent'>
				<h2>Quickview</h2>
				<div className={styles.nutritional_info}>
					<div className={styles.nutritional_item}>
						<h4>Calories</h4>
						<span>{results.calories}</span>
					</div>
					<div className={styles.nutritional_item}>
						<h4>carbs</h4>
						<span>{results.carbs}</span>
					</div>
					<div className={styles.nutritional_item}>
						<h4>Total Fat</h4>
						<span>{results.fat}</span>
					</div>
					<div className={styles.nutritional_item}>
						<h4>proteins</h4>
						<span>{results.protein}</span>
					</div>
				</div>
			</div>
			<div className='nutritionalTable'>
				<h2>Percentage of the daily need covered</h2>
				<div>
					<Table columns={columnsBad} dataSource={bad} size='middle' />

					<Table columns={columnsGood} dataSource={good} size='middle' />
				</div>
			</div>
		</section>
	)
}

export { NutritionalInfo as default }
