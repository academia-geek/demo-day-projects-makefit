import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAsync, listAsync } from "../Redux/actions/blogActions";
import EditBlog from "./EditBlog";
import styles from "../Styles/Blog/Blog.module.scss";
import { getAuth } from "firebase/auth";
import { emailAdmin } from "../utils/emailAdmin";

const  Blog = () => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState([]);
  const [admin, setAdmin] = useState(false)

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  //busqueda de un post del blog
  const handleSubmit = (e) => {
    e.preventDefault();
    const param = e.target.search.value;
    navigate(`/blog/search/${param}`);
  };

  //editar un post del blog
  const edit = (blogEntry) => {
    setEditModal(blogEntry);
    setModal(true);
  };

  //eliminar post del blog
  const deletePost = (id) => {
    dispatch(deleteAsync(id));
  };

  //verificar el tipo de usuario
  const auth = getAuth()
  const user = auth.currentUser;

  useEffect(() => {
    dispatch(listAsync());
    if (user.email === emailAdmin) {
      setAdmin(true)
    }
  }, [dispatch]);

  return (
    <div className={styles.blog_container}>

      <form onSubmit={handleSubmit} key="1" className={styles.blog_form}>
        <input
          type="text"
          name="search"
          placeholder="Ingresa tu búsqueda en el blog"
        />
        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>

      <div key={"hola"} className={styles.blog_entries}>
        {posts.map((post) => (
          <div key={post.id} className={styles.blog_card} onClick={
            () => navigate(`/blog/detail/${post.id}`)
          }>
            <div>
              <video src={post.video}></video>
              <div className={styles.blog_card__text}>
                <h1>{post.title}</h1>
                <p>Descripción: {post.description}</p>
                <p>Categoria: {post.category}</p>
              </div>
              {
                admin
                  ? <div className={styles.blog_btn}>
                    <button onClick={() => edit(post)}>Edit</button>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                  </div>
                  : null
              }
            </div>
          </div>
        ))}
      </div>
      {modal === true ? <EditBlog modal={editModal} close={setModal} /> : ""}
    </div>
  );
}

export default Blog;
