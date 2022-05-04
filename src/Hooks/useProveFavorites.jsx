import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/credentials";

//FUNCION PARA SABER SI EL USUARIO YA HA AÑADIDO LA RECETA A FAVORITOS  
const probeFavorite = async (results, user) => {
    if (results.id) {
        const getCollection = collection(db, "favorites");
        const q = query(getCollection, where("recipeId", "==", results.id));
        const getDataQuery = await getDocs(q);
        let emailFavorite;
        let identifier;
        getDataQuery.forEach((doc) => {
            identifier = doc.id;
            emailFavorite = doc._document.data.value.mapValue.fields.user.stringValue;
        });
        if (identifier && (user.email === emailFavorite)) {
            document.getElementById("check").setAttribute("checked", "true");
        }else{
            document.getElementById("check").removeAttribute("checked")
        }
    }
}

export default probeFavorite;