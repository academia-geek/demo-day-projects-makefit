import React, { useEffect } from "react";

function EditBlog() {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState([]);

  const { blogEntries } = useSelector((state) => state.blogEntries);

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getBlogEntriesAsync());
  }, []);

  const navigate = useNavigate();

  const edit = (blogEntry) => {
    setEditModal(blogEntry);
    setModal(true);
  };

  return <div>EditBlog</div>;
}

export default EditBlog;
