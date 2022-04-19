import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAsync, listAsync } from "../Redux/actions/blogActions";
import EditBlog from "./EditBlog";

function BlogSearch() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState([]);

  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(listAsync());
  }, [dispatch]);

  const edit = (blogEntry) => {
    setEditModal(blogEntry);
    setModal(true);
  };

  const deletePost = (id) => {
    dispatch(deleteAsync(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const param = e.target.search.value;
    navigate(`/blog/search/${param}`);
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
      {posts.map((post) => {
        if (post.title.toLowerCase().includes(params.search.toLowerCase())) {
          return (
            <div key={post.id}>
              <video src={post.video} width="320" height="240" controls></video>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <p>{post.category}</p>
              <button onClick={() => edit(post)}>Edit</button>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          );
        } else {
          return <h1>No hay resultados</h1>;
        }
      })}
      {modal === true ? <EditBlog modal={editModal} close={setModal} /> : ""}
    </div>
  );
}

export default BlogSearch;
