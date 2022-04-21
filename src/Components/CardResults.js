import styles from "../Styles/SearchApi/SearchApi.module.scss";

const CardResults = ({ recipe }) => {
	return (
		<article className={styles.result_card}>
			<div>
				<div>
					<img src={recipe.image} alt={recipe.title} />
				</div>
				<div className={styles.result_text}>
					<h1>{recipe.title}</h1>
				</div>
			</div>
			<a href='/'>Go to Recipe</a>
		</article>
	)
}

export default CardResults;
