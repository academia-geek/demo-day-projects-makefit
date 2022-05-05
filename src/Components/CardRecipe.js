import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Dashboard/Dashboard.module.scss';

const CardRecipe = ({ recipes }) => {
	return (
		<div className={styles.dash_card__container}>
			{
				recipes.map((recipe) => (
					<div
						className={styles.dash_card}
						key={recipe.id}>
						<Link to={`/details/${recipe.id}`}>
							<div className={styles.dash_card__img}>
								<img
									loading='lazy'
									src={recipe.image}
									alt={recipe.title} />
								<h1>{recipe.title}</h1>
							</div>
						</Link>
						{
							recipe.readyInMinutes
								?
								<Link to={`/details/${recipe.id}`}>
									<div className={styles.dash_card__text}>
										<div className={styles.dash_card__separate}></div>
										<div className={styles.dash_card__icons}>
											<div className={styles.dash_card__info}>
												<div>
													<i className="fa-solid fa-clock"></i>
													<span>{recipe.readyInMinutes}</span>
												</div>
												<h1>minutes</h1>
											</div>
											<div className={styles.dash_card__info}>
												<div>
													<i className="fa-solid fa-user"></i>
													<span>{recipe.servings}</span>
												</div>
												<h1>persons</h1>
											</div>
											{
												recipe.extendedIngredients ?
													<div className={styles.dash_card__info}>
														<div>
															<i className="fa-solid fa-book"></i>
															<span>{(recipe.extendedIngredients)?.length}</span>
														</div>
														<h1>ingredients</h1>
													</div>
													: null
											}
										</div>
									</div>
								</Link>
								:
								null
						}
					</div>
				))
			}
		</div >

	)
}
export default CardRecipe
