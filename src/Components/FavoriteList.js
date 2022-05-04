import { ClockCircleOutlined, PieChartOutlined } from '@ant-design/icons';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { listFavoritesAsync } from '../Redux/actions/actionFavorites';
import styles from "../Styles/Favorites/FavoriteCard.module.scss"

const FavoriteList = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((fav) => fav.favorites);

    //OBTENER EL USUARIO LOGUEADO
    const auth = getAuth();
    const user = auth.currentUser;

    //OBTENER LOS FAVORITOS DEL USUARIO LOGUEADO
    const favoriteUser = favorites.filter((fav) => fav.user === user.email);

    useEffect(() => {
        dispatch(listFavoritesAsync());
    }, []);

    return (
        <div className={styles.favorite_container}>
            {
                favoriteUser.map((fav, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.favorite_card}>
                            <Link to={`/details/${fav.recipeId}`}>
                                <img src={fav.image} alt={fav.title} />
                                <h1>{fav.title}</h1>
                                <div>
                                    <p><ClockCircleOutlined />{fav.readyInMinutes} min</p>
                                    <p><PieChartOutlined />{fav.servings} personas</p>  
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FavoriteList