import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAsync, listAsync } from "../Redux/actions/blogActions";
import EditBlog from "./EditBlog";
import styles from "../Styles/Blog/Blog.module.scss";

function Blog() {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState([]);

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(listAsync());
  }, [dispacth]);

  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const param = e.target.search.value;
    navigate(`/blog/search/${param}`);
  };

  const edit = (blogEntry) => {
    setEditModal(blogEntry);
    setModal(true);
  };

  const deletePost = (id) => {
    dispacth(deleteAsync(id));
  };

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
          <div key={post.id} className={styles.blog_card}>
            <div>
              <video src={post.video} controls></video>
              <div className={styles.blog_card__text}>
                <h1>{post.title}</h1>
                <p>Descripción: {post.description}</p>
                <p>Categoria: {post.category}</p>
            </div>
              <div className={styles.blog_btn}>
                <button onClick={() => edit(post)}>Edit</button>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modal === true ? <EditBlog modal={editModal} close={setModal} /> : ""}
    </div>
  );
}

export default Blog;
