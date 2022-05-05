import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { listAsync } from "../Redux/actions/blogActions";
import styles from "../Styles/Blog/BlogDetail.module.scss"
import CommentsArea from "./CommentsArea";

function BlogDetail() {
  const params = useParams();
  const id = params.id;
  // console.log(id);
  const { posts } = useSelector((state) => state.posts);

  const navigate = useNavigate();

  //FUNCION PARA VOLVER A LA PAGINA ANTERIOR
	const backPage = () => {
		navigate(-1);
	}

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAsync());
  }, [dispatch]);
  const post = posts.find((post) => post.id === id);

  return (
    <div className={styles.blogdetail_container}>

      <div className={styles.blogdetail_back__btn}>
        <button onClick={() => backPage()}>
          <i className="fa-solid fa-angle-left"></i>
          Back...
        </button>
      </div>

      <div className={styles.blogdetail_card}>
        <div className={styles.blogdetail_card__video}>
          <video src={post?.video} controls></video>
        </div>
        <div className={styles.blogdetail_card__body}>
          <h3>{post?.title}</h3>
          <p>{post?.description}</p>
        </div>
        <div className={styles.blogdetail_card__footer}>
          {<span> {post?.category}</span>}
        </div>
        <div className={styles.blogdetail_comments}>
          <h3>Comments</h3>
          <CommentsArea />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
