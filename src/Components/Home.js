import CardRecipe from './CardRecipe'

export function Home() {
	return (
		<main>
			<h1>Macros</h1>
			<section className='meals'>
				{mealData.meals.map((meal) => {
					return <CardRecipe key={meal.id} meal={meal} />
				})}
			</section>
		</main>
	)
}
