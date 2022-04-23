import { useGetInstructions } from '../Hooks/useGetInstructions'

export function Instructions() {
	const { results } = useGetInstructions()
	console.log('🚀 ~ file: Instructions.js ~ line 5 ~ Instructions ~ results', results)

	return (
		<ul>
			{results.map((step) => (
				<li key={step.number}>
					<span>{step.number}</span>
					<p>{step.step} </p>
				</li>
			))}
		</ul>
	)
}
