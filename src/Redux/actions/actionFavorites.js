import { async } from "@firebase/util";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../Firebase/credentials";
import { typesFavorites } from "../types/types";


//AGREGAR
export const addFavoritesAsync = (results, user) => {
    const favorite = {
        title: results.title,
        minutes: results.readyInMinutes,
        servings: results.servings,
        image: results.image,
        recipeId: results.id,
        user: user.email,
    }

    return async (dispatch) => {
        await addDoc(collection(db, "favorites"), favorite)
            .then(() => {
                dispatch(addSync(favorite));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const addSync = (favorite) => {
    return {
        type: typesFavorites.add,
        payload: favorite,
    };
};

//DELETE
export const deleteFavoritesAsync = (resultsId) => {
    return async (dispatch) => {
        const getCollection = collection(db, "favorites");
        const q = query(getCollection, where("recipeId", "==", resultsId));
        const getDataQuery = await getDocs(q);
        getDataQuery.forEach((docu) => {
            deleteDoc(doc(db, "favorites", docu.id));
        });
        dispatch(deleteSync(resultsId));
    };
};

export const deleteSync = (resultsId) => {
    return {
        type: typesFavorites.delete,
        payload: resultsId,
    };
};


//LIST
export const listFavoritesAsync = () => {
    return async (dispatch) => {
        const getCollection = await getDocs(collection(db, "favorites"));
        let favorites = [];
        getCollection.forEach((doc) => {
            favorites.push({
                ...doc.data(),
            });
        });
        dispatch(listSync(favorites));
    };
};

export const listSync = (favorites) => {
    return {
        type: typesFavorites.list,
        payload: favorites,
    };
};