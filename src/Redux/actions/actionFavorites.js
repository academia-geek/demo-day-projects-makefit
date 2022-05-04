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

export const addFavorites = (results, user) => {
    const favorite = {
        recipeId: results.id,
        user: user.email,
    }

    return async (dispatch) => {
        const getCollection = collection(db, "favorites");
        const q = query(getCollection, where("recipeId", "==", results.id));
        const getDataQuery = await getDocs(q);
        let identifier;
        getDataQuery.forEach((doc) => {
            identifier = doc.id;
        });
        //verificar si esta en la base de datos y agregarlo
        if (identifier) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ya esta en tu lista de favoritos!",
            });
        } else {
            addDoc(collection(db, "favorites"), favorite)
                .then(() => {
                    dispatch(addSync(favorite));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
};
export const addSync = (favorite) => {
    return {
        type: typesFavorites.add,
        payload: favorite,
    };
};