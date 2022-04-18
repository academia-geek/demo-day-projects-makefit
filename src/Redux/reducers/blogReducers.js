import typesBlog from "../types/types";
const initialState = {
  posts: [],
};

export const blogReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesBlog.add:
      return {
        posts: [action.payload],
      };
    case typesBlog.edit:
      return {
        ...state,
      };
    case typesBlog.delete:
      return {
        posts: state.posts.filter((p) => p.id !== action.payload),
      };
    case typesBlog.list:
      return {
        posts: [...action.payload],
      };
    default:
      return state;
  }
};
