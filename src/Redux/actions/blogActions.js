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
import { db } from "../../Firebase/credentials";

// ===========> Add <=============
export const addBlogEntryAsync = (post) => {
  return (dispatch) => {
    addDoc(collection(db, "blogEntries"), post)
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
export const editBlogEntryAsync = (id, post) => {
  return async (dispatch) => {
    const getCollection = collection(db, "blogEntries");
    const q = query(getCollection, where("id", "==", id));
    const getDataQuery = await getDocs(q);
    let identifier;
    getDataQuery.forEach((doc) => {
      identifier = doc.id;
    });
    const documentRef = doc(db, "blogEntries", identifier);
    await updateDoc(documentRef, post)
      .then(() => {
        dispatch(editSync(post));
        dispatch(listAsync());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editSync = (post) => {
  return {
    type: typesBlog.edit,
    payload: post,
  };
};

// ===========> Delete <=============
export const deleteAsync = (id) => {
  return async (dispatch) => {
    const getCollection = collection(db, "blogEntries");
    const q = query(getCollection, where("id", "==", id));
    const getDataQuery = await getDocs(q);
    getDataQuery.forEach((doc) => {
      deleteDoc(doc(db, "blogEntries", doc.id));
    });
    dispatch(deleteSync(id));
    dispatch(listAsync());
  };
};

export const deleteSync = (id) => {
  return {
    type: typesBlog.delete,
    payload: id,
  };
};

// ===========> List <=============
export const listAsync = () => {
  return async (dispatch) => {
    const getCollection = await getDocs(collection(db, "blogEntries"));
    let posts = [];
    getCollection.forEach((doc) => {
      posts.push({
        ...doc.data(),
      });
    });
    dispatch(listSync(posts));
  };
};

export const listSync = (posts) => {
  return {
    type: typesBlog.list,
    payload: posts,
  };
};

// ===========>  <=============
// ===========>  <=============
