import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { listFavoritesAsync } from '../Redux/actions/actionFavorites';
import styles from "../Styles/Favorites/FavoriteCard.module.scss"
import EditFavorites from './EditFavorites';
import favoriteIllustration from "../Styles/Images/favorite-illustration.png";

const FavoriteList = () => {
    const dispatch = useDispatch();
    const [editFavorite, setEditFavorite] = useState([]);
    const [modal, setModal] = useState(false);
    const { favorites } = useSelector((fav) => fav.favorites);

    //OBTENER EL USUARIO LOGUEADO
    const auth = getAuth();
    const user = auth.currentUser;

    //OBTENER LOS FAVORITOS DEL USUARIO LOGUEADO
    const favoriteUser = favorites.filter((fav) => fav.userId === user.uid);

    //EDITAR EL NOMBRE DE TU RECETA AÑADIDA A FAVORITOS
    const editFavoriteName = (fav) => {
        setEditFavorite(fav);
        setModal(true);
    }

    useEffect(() => {
        dispatch(listFavoritesAsync());
    }, []);

    return (
        <div className={styles.favorite_container}>

            <div className={styles.favorite_title}>
                <h1>Favorites</h1>
            </div>
            <div className={styles.favorite_card__container}>
                {favoriteUser.length > 0
                    ?
                    favoriteUser.map((fav, index) => {
                        return (
                            <div
                                className={styles.favorite_card}
                                key={index}>
                                <Link to={`/details/${fav.recipeId}`}>
                                    <div className={styles.favorite_card__img}>
                                        <img
                                            loading='lazy'
                                            src={fav.image}
                                            alt={fav.title} />
                                    </div>
                                </Link>
                                <div className={styles.favorite_card__text}>
                                    <h1>
                                        <Link to={`/details/${fav.recipeId}`}>
                                            {fav.title}
                                        </Link>
                                        <i
                                            onClick={() => editFavoriteName(fav)}
                                            className="fa-solid fa-pen-to-square">
                                        </i>
                                    </h1>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className={styles.norecipe_container}>
                        <img src={favoriteIllustration} alt="logoMakeFit" />
                        <h1>
                            This page allows you to save your recipes
                            in favorites. Just tap on the heart that
                            appears in each recipe so you can always
                            have them on hand!
                        </h1>
                    </div>
                }
            </div>

            <div style={{ width: "100%" }}>
                {modal ? <EditFavorites favorite={editFavorite} close={setModal} /> : null}
            </div>
        </div >
    )
}

export default FavoriteList;