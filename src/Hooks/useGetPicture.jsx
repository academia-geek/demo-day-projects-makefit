import { useEffect, useState } from 'react'
import { apiKey } from '../utils/apiUrls'
import { fileUpload } from '../utils/fileUpload'
import { getData } from '../utils/getData'

export function useGetPicture() {
	const [url, setUrl] = useState('')
	const [picture, setPicture] = useState('')
	const [results, setResults] = useState({})
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [haveData, setHaveData] = useState(false)

	useEffect(() => {
		if (!url) return
		setLoading(true)
		getData(url)
			.then((data) => {
				setResults(data)
				setLoading(false)
				setHaveData(true)
			})
			.catch((error) => {
				console.error(error)
				setError(error)
				setHaveData(false)
			})
	}, [url])

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader()
			fileReader.readAsDataURL(file)

			fileReader.onload = () => {
				resolve(fileReader.result)
			}

			fileReader.onerror = (error) => {
				reject(error)
			}
		})
	}

	const getPicture = async (event) => {
		const file = event.target.files[0]
		if (!file) return
		const base64 = await convertBase64(file)
		setPicture(base64)
		fileUpload(file)
			.then((url) => {
				const urlData = `https://api.spoonacular.com/food/images/analyze?apiKey=${apiKey}&imageUrl=${url}`
				setUrl(urlData)
			})
			.catch((error) => console.error(error))
	}

	return { results, picture, loading, error, haveData, getPicture }
}
