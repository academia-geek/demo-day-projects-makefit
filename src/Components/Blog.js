import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listAsync } from "../Redux/actions/blogActions";
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

  const edit = (blogEntry) => {
    setEditModal(blogEntry);
    setModal(true);
  };
  return (
    <div>
      <div></div>
      {modal === true ? <EditBlog modal={editModal} close={setModal} /> : ""}
    </div>
  );
}

export default Blog;
