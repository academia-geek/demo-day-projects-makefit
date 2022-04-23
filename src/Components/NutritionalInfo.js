import { Table } from 'antd'
import useGetnutritional from '../Hooks/useGetnutritional'

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
		<section className='nutritional'>
			<h2>Nutritional information</h2>
			<div className='nutritionalContent'>
				<h2>Quickview</h2>
				<div className='nutritionalInfo'>
					<div className='nutritionalItem'>
						<h4>Calories</h4>
						<span>{results.calories}</span>
					</div>
					<div className='nutritionalItem'>
						<h4>Carbohydrates</h4>
						<span>{results.carbs}</span>
					</div>
					<div className='nutritionalItem'>
						<h4>Total Fat</h4>
						<span>{results.fat}</span>
					</div>
					<div className='nutritionalItem'>
						<h4>proteins</h4>
						<span>{results.protein}</span>
					</div>
				</div>
			</div>
			<div className='nutritionalTable'>
				<h2>percentage of the daily need covered</h2>
				<div>
					<Table columns={columnsBad} dataSource={bad} size='middle' />

					<Table columns={columnsGood} dataSource={good} size='middle' />
				</div>
			</div>
		</section>
	)
}

export { NutritionalInfo as default }
