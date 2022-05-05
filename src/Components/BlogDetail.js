import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listAsync } from "../Redux/actions/blogActions";
import style from "../Styles/Blog/BlogDetail.module.scss"
function BlogDetail() {
  const params = useParams();
  const id = params.id;
  // console.log(id);
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAsync());
  }, [dispatch]);
  const post = posts.find((post) => post.id === id);

  return (
    <div className={style.blogdetail_container}>
      <div className={style.blogdetail_card}>
        <div className={style.blogdetail_card__video}>
          <video src={post?.video} controls></video>
        </div>
        <div className={style.blogdetail_card__body}>
          <h3>{post?.title}</h3>
          <p>{post?.description}</p>
        </div>
        <div className={style.blogdetail_card__footer}>
          {<span> {post?.category}</span>}
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
