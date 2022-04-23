import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, baseUrl } from '../utils/apiUrls'
import { getData } from '../utils/getData'

export function useGetInstructions() {
	const [results, setResults] = useState([])
	const { id } = useParams()

	const url = `${baseUrl}${id}/analyzedInstructions?includeNutrition=true&apiKey=${apiKey}`

	useEffect(() => {
		getData(url)
			.then((data) => setResults(data[0].steps))
			.catch((error) => console.error(error))
	}, [url])

	return { results }
}
