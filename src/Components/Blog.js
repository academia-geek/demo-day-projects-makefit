import React from "react";

function Blog() {
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
  return (
    <div>
      <div></div>
      {modal === true ? <EditProduct modal={editModal} close={setModal} /> : ""}
    </div>
  );
}

export default Blog;
