import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAsync, listAsync } from "../Redux/actions/blogActions";
import EditBlog from "./EditBlog";

function Blog() {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState([]);

  const { posts } = useSelector((state) => state.posts);

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(listAsync());
  }, [dispacth]);

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Ingresa tu búsqueda en el blog"
        />
        <button type="submit">Buscar</button>
      </form>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <img src={post.image} alt="blog" />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
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
