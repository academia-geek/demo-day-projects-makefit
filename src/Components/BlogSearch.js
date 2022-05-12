import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAsync, listAsync } from "../Redux/actions/blogActions";
import EditBlog from "./EditBlog";
import styles from "../Styles/Blog/Blog.module.scss";
import { getAuth } from "firebase/auth";
import { emailAdmin } from "../utils/emailAdmin";

const  BlogSearch = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState([]);
  const [admin, setAdmin] = useState(false)

  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const params = useParams();

  //editar un post del blog
  const edit = (blogEntry) => {
    setEditModal(blogEntry);
    setModal(true);
  };

  //eliminar un post del blog
  const deletePost = (id) => {
    dispatch(deleteAsync(id));
  };

  //buscar una entrada del blog
  const handleSubmit = (e) => {
    e.preventDefault();
    const param = e.target.search.value;
    navigate(`/blog/search/${param}`);
  };

  //filtro para encontrar una entrada del blog
  const postsFiltered = posts.filter((post) =>
    post.title.toLowerCase().includes(params.search.toLowerCase())
  );

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
      <form onSubmit={handleSubmit} className={styles.blog_form}>
        <input
          type="text"
          name="search"
          placeholder="Search for a blog post.."
        />
        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>

      <div className={styles.blog_entries}>
        {postsFiltered.length > 0 ? (
          postsFiltered.map((post) => {
            return (
              <div key={post.id} className={styles.blog_card}>
                <div>
                  <video src={post.video} width="320" height="240" controls></video>
                  <div className={styles.blog_card__text}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <p>{post.category}</p>
                  </div>
                </div>
                {admin
                  ? <div className={styles.blog_btn}>
                    <button onClick={() => edit(post)}>Edit</button>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                  </div>
                  : null
                }
              </div>
            );
          })
        ) : (
          <h1>No results found</h1>
        )}
      </div>

      {modal === true ? <EditBlog modal={editModal} close={setModal} /> : ""}
    </div>
  );
}

export default BlogSearch;
