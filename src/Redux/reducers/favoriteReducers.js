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

        case typesFavorites.delete:
            return {
                favorites: state.favorites.filter((p) => p.id !== action.payload),
            };

        case typesFavorites.list:
            return {
                favorites: [...action.payload],
            };
        case typesFavorites.edit:
            return {
                ...state,
            };
        
        default:
            return state;
    }
}