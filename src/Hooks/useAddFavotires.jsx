import { useDispatch } from "react-redux";
import { addFavoritesAsync, deleteFavoritesAsync } from "../Redux/actions/actionFavorites";

//FUNCION PARA AÑADIR O ELIMINAR LA RECETA DE FAVORITOS
const addToFavorites = (results, user, dispatch) => {

    const isChecked = document.getElementById("check").checked;
    if (isChecked === true) {
        dispatch(deleteFavoritesAsync(results.id))
    }
    else {
        dispatch(addFavoritesAsync(results, user))
    }
}

export default addToFavorites;