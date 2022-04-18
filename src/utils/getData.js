import axios from 'axios'

export const getData = (url) => {
	const request = axios(url)
	return request.then((response) => response.data)
}
