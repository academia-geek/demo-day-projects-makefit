import { useGetRecipes } from '../Hooks/useGetRecipes';
import { ListRecipes } from './ListRecipes';
import styles from "../Styles/General/Randomize.module.scss";

const DiscoverRecipes = () => {
	const { recipes, loading, setLoading } = useGetRecipes()

	const handleRandom = () => {
		setLoading(loading + 1)
	}

	return (
		<div className={styles.randomize_container}>
			<div className={styles.randomize_btn}>
				<button onClick={() => handleRandom()}>
					<i className="fa-solid fa-shuffle"></i>
					Randomize recipes
				</button>
			</div>
			<ListRecipes recipes={recipes} />
		</div>
	)
}

export default DiscoverRecipes;
