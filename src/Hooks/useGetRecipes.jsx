import { useEffect, useState } from 'react'
import { getData } from '../utils/getData'
import { randomRecipes } from '../utils/apiUrls'

export function useGetRecipes() {
	const [recipes, setRecipes] = useState([])
	useEffect(() => {
		getData(randomRecipes)
			.then((data) => setRecipes(data.recipes))
			.catch((error) => console.error(error))
	}, [])
	return { recipes }
}
