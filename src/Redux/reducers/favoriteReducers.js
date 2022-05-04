import { typesFavorites } from "../types/types";

const initialState = {
    favorites: [],
};

export const favoriteReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesFavorites.add:
            return {
                favorites: [action.payload],
            };
        /* case typesFavorite.edit:
            return {
                ...state,
            };
        case typesFavorite.delete:
            return {
                favorites: state.favorites.filter((p) => p.id !== action.payload),
            };
        case typesFavorite.list:
            return {
                favorites: [...action.payload],
            }; */
        default:
            return state;
    }
}