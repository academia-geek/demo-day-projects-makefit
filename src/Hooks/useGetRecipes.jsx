import { useEffect, useState } from 'react'
import { getData } from '../utils/getData'
import { randomRecipes } from '../utils/apiUrls'

export function useGetRecipes() {
	const [recipes, setRecipes] = useState([])
	const [loading, setLoading] = useState(1)

	useEffect(() => {
		getData(randomRecipes)
			.then((data) => setRecipes(data.recipes))
			.catch((error) => console.error(error))
	}, [loading])
	return { recipes, loading, setLoading }
}
