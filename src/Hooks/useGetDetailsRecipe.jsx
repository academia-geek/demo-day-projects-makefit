import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, baseUrl } from '../utils/apiUrls'
import { getData } from '../utils/getData'

export default function useGetDetailsRecipe() {
	const [results, setResults] = useState({})
	const { id } = useParams()

	const url = `${baseUrl}${id}/information?includeNutrition=true&apiKey=${apiKey}`

	useEffect(() => {
		getData(url)
			.then((data) => setResults(data))
			.catch((error) => console.error(error))
	}, [url])

	return { results }
}
