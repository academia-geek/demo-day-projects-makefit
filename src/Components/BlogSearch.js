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

  return (
    <div>
      {posts.map((post) => {
        if (post.title.toLowerCase().includes(params.search.toLowerCase())) {
          return (
            <div key={post.id}>
              <img src={post.image} alt="blog" />
              <h1>{post.title}</h1>
              <p>{post.body}</p>
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
