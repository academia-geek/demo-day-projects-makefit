import { useEffect, useRef } from 'react'

export function useLazyImages() {
	const fromRef = useRef([])

	useEffect(() => {
		const { current } = fromRef

		const showImage = (entry) => {
			const image = entry.target
			console.log('🚀 ~ file: useLazyImages.jsx ~ line 11 ~ showImage ~ image', image)
			const imageSrc = image.getAttribute('data-src')
			image.setAttribute('src', imageSrc)
			image.removeAttribute('data-src')
			observer.unobserve(image)
		}

		const isIntersecting = (entry) => entry.isIntersecting

		const observer = new IntersectionObserver(
			(entries) => {
				entries.filter(isIntersecting).forEach(showImage)
			},
			{
				rootMargin: '100px',
				threshold: '0.15',
			}
		)

		if (current) {
			current.map((image) => observer.observe(image))
		}

		return () => observer.disconnect()
	}, [])

	return { fromRef }
}
