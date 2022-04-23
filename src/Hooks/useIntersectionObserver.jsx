import { useEffect, useState, useRef } from 'react'

export function useIntersectionObserver({ distance = '100px', externalRef, once = true } = {}) {
	const [isNearScreen, setIsNearScreen] = useState(false)
	const fromRef = useRef(null)

	useEffect(() => {
		const element = externalRef ? externalRef.current : fromRef.current
		let observer

		function onIntersection(entries, observer) {
			entries.forEach((entry) => {
				const isIntersecting = entry.isIntersecting

				if (isIntersecting) {
					setIsNearScreen(true)
					once && observer.disconnect()
				} else {
					!once && setIsNearScreen(false)
				}
			})
		}

		Promise.resolve(
			typeof IntersectionObserver !== 'undefined'
				? IntersectionObserver
				: import('intersection-observer')
		).then(() => {
			observer = new IntersectionObserver(onIntersection, { rootMargin: distance })

			if (element) observer.observe(element)
		})

		return () => observer && observer.disconnect()
	})

	return { isNearScreen, fromRef }
}
