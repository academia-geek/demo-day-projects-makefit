import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAsync, listAsync } from "../Redux/actions/blogActions";
import EditBlog from "./EditBlog";

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
    <div>
      <form onSubmit={handleSubmit} key="1">
        <input
          type="text"
          name="search"
          placeholder="Ingresa tu búsqueda en el blog"
        />
        <button type="submit">Buscar</button>
      </form>
      <div key={"hola"}>
        {posts.map((post) => (
          <div key={post.id}>
            <video src={post.video} width="320" height="240" controls></video>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{post.category}</p>
            <button onClick={() => edit(post)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
      {modal === true ? <EditBlog modal={editModal} close={setModal} /> : ""}
    </div>
  );
}

export default Blog;
