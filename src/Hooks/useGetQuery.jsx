import { useRef, useState } from 'react'

export function useGetQuery() {
	const [query, setQuery] = useState('')
	const queryRef = useRef('')

	const getQuery = () => {
		const { current } = queryRef
		setQuery(current.value)
	}

	return { queryRef, query, getQuery }
}
