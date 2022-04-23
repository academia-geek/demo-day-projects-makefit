import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../utils/getData'
import { apiKey, recipesUrl } from '../utils/apiUrls'

export function useGetResults() {
	const [results, setResults] = useState([])
	const { query } = useParams()
	const url = `${recipesUrl}?addRecipeNutrition=true&query=${query}&number=20&&offset=0&apiKey=${apiKey}`

	useEffect(() => {
		getData(url)
			.then((data) => setResults(data.results))
			.catch((error) => console.error(error))
	}, [url])

	return { results }
}
