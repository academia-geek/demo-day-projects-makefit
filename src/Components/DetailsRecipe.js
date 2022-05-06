import { lazy, Suspense, useEffect } from 'react';
import { ClockCircleOutlined, PieChartOutlined } from '@ant-design/icons';
import useGetDetailsRecipe from '../Hooks/useGetDetailsRecipe';
import { useIntersectionObserver } from '../Hooks/useIntersectionObserver';
import { ListIngredients } from './ListIngredients';
import { Spinner } from './Spinner';
import { Instructions } from './Instructions';
import styles from '../Styles/Details/details.module.scss';
import { TypeOfDiet } from './TypeOfDiet';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import probeFavorite from '../Hooks/useProveFavorites';
import addToFavorites from '../Hooks/useAddFavotires';
import { useDispatch } from 'react-redux';
import CommentsArea from './CommentsArea';

export function DetailsRecipe() {
	const { results } = useGetDetailsRecipe()
	const { isNearScreen, fromRef } = useIntersectionObserver()
	const NutritionalInfo = lazy(() => import('./NutritionalInfo'))

	const navigate = useNavigate()
	const dispatch = useDispatch()

	//OBTENER USUARIO AUTENTICADO
	const auth = getAuth()
	const user = auth.currentUser

	//FUNCION PARA VOLVER A LA PAGINA ANTERIOR
	const backPage = () => {
		navigate(-1)
	}

	useEffect(() => {
		probeFavorite(results, user)
	}, [results, user])

	return (
		<main className={styles.layout_recipe}>
			<div className={styles.head_back__btn}>
				<button onClick={() => backPage()}>
					<i className='fa-solid fa-angle-left'></i>
					Back...
				</button>
			</div>

			<section className={styles.head_recipe}>
				<figure>
					<img src={results.image} alt={results.title} />
				</figure>
				<div className={styles.title_recipe}>
					<h1>{results.title}</h1>
					<div className={styles.time_recipe}>
						<div className={styles.timeBox}>
							<ClockCircleOutlined />
							<span className={styles.timeBox_value}>{results.readyInMinutes} minutes</span>
						</div>
						<div className={styles.timeBox}>
							<PieChartOutlined />
							<span className={styles.timeBox_value}>{results.servings} persons</span>
						</div>
						<div className={styles.timeBox}>
							<input type='checkbox' className='check' id='check' />
							<label htmlFor='check'>
								<i
									onClick={() => addToFavorites(results, user, dispatch)}
									className='fa-solid fa-heart'
								></i>
							</label>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.diet}>
				<h2>Type Of Diet</h2>
				<div className={styles.diet_grid}>
					<TypeOfDiet diet='Vegan' validate={results.vegan} />
					<TypeOfDiet diet='Vegetarian' validate={results.vegetarian} />
					<TypeOfDiet diet='Gluten Free' validate={results.glutenFree} />
					<TypeOfDiet diet='Very Healthy' validate={results.veryHealthy} />
					<TypeOfDiet diet='Dairy Free' validate={results.dairyFree} />
				</div>
			</section>
			<section className={styles.details_recipe}>
				<ListIngredients listIngredients={results.extendedIngredients} />
				<Instructions />
			</section>
			<section className={styles.layout_nutritional} ref={fromRef}>
				<Suspense fallback={<Spinner />}>{isNearScreen ? <NutritionalInfo /> : null}</Suspense>
			</section>
			<section className={styles.detail_comments}>
				<CommentsArea />
			</section>
		</main>
	)
}
