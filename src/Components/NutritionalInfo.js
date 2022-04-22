import { Table } from 'antd'
import useGetnutritional from '../Hooks/useGetnutritional'
import 'antd/dist/antd.css'

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
		<section>
			<h2>Nutritional information</h2>
			<div className=''>
				<h2>Quickview</h2>
				<div className=''>
					<h4>Calories</h4>
					<span>{results.calories}</span>
				</div>
				<div className=''>
					<h4>Carbohydrates</h4>
					<span>{results.carbs}</span>
				</div>
				<div className=''>
					<h4>Total Fat</h4>
					<span>{results.fat}</span>
				</div>
				<div className=''>
					<h4>proteins</h4>
					<span>{results.protein}</span>
				</div>
			</div>
			<div>
				<h2>percentage of the daily need covered</h2>
				<div>
					<Table columns={columnsBad} dataSource={bad} size='middle' />

					<Table columns={columnsGood} dataSource={good} size='middle' />
				</div>
			</div>
		</section>
	)
}
