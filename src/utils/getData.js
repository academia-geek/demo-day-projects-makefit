export const getData = (url) => {
	const request = fetch(url)
	return request.then((response) => response.data)
}
