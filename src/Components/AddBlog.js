import React from "react";
import { useDispatch } from "react-redux";

function AddBlog() {
  const dispacth = useDispatch();
  // const navigate = useNavigate();
  const [values, handleInputChange, reset] = useForm({
    title: "",
    description: "",
    video: "",
    category: "",
  });

  const { title, description, video, category } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(addBlogEntryAsync(title, description, video, category));
    reset();
    window.setTimeout(() => {
      e.target.reset();
    }, 2000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    FileUp(file)
      .then((result) => {
        console.log(result);
        values.video = result;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="video">Video</label>
          <input
            type="file"
            id="video"
            name="video"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default AddBlog;
