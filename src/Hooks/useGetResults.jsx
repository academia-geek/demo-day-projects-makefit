import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../utils/getData'
import { apiKey, recipesUrl } from '../utils/apiUrls'

export function useGetResults() {
	const [results, setResults] = useState([])
	const [page, setPage] = useState(0)
	const { query } = useParams()
	const url = `${recipesUrl}?addRecipeNutrition=true&query=${query}&number=8&&offset=${page}&apiKey=${apiKey}`

	useEffect(() => {

		getData(url)
			.then((data) => {
				/* console.log(url);
				console.log(data); */
				setResults(data.results)
			})
			.catch((error) => console.error(error))
	}, [page, url])

	return { results, setPage, page }
}
