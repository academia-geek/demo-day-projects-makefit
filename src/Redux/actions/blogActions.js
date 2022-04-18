import { typesBlog } from "../types/types";
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

// ===========> Add <=============
export const addBlogEntryAsync = (post) => {
  return (dispatch) => {
    addDoc(collection(baseDato, ""), post)
      .then(() => {
        dispatch(addSync(post));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addSync = (post) => {
  return {
    type: typesBlog.add,
    payload: post,
  };
};
// ===========> Edit <=============


// ===========> Delete <=============
// ===========> List <=============
// ===========>  <=============
// ===========>  <=============
