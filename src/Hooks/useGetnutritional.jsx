import { useEffect, useState } from 'react'
import { getData } from '../utils/getData'
import { apiKey, baseUrl } from '../utils/apiUrls'
import { useParams } from 'react-router-dom'

export default function useGetnutritional() {
	const [results, setResults] = useState({})
	const { id } = useParams()
	const url = `${baseUrl}${id}/nutritionWidget.json?apiKey=${apiKey}`

	const bad = results.bad
	const good = results.good

	useEffect(() => {
		getData(url)
			.then((data) => setResults(data))
			.catch((error) => console.error(error))
	}, [url])

	return { results, bad, good }
}
