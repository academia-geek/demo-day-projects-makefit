import { useGetInstructions } from '../Hooks/useGetInstructions'
import styles from '../Styles/Details/instructions.module.scss'
import instructions from '../Styles/Images/instructions.svg'

export function Instructions() {
	const { results } = useGetInstructions()

	return (
		<div className={styles.instructions}>
			<div className={styles.instructions_title}>
				<img src={instructions} alt='instructions' />
				<h2>Instructions</h2>
			</div>
			<ol className={styles.instructions_list}>
				{results.map((step) => (
					<li key={step.number}>
						<span>{step.number}.</span>
						<p>{step.step} </p>
					</li>
				))}
			</ol>
		</div>
	)
}
