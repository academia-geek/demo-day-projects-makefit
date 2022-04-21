import React from "react";
import { useDispatch } from "react-redux";
import { editBlogEntryAsync } from "../Redux/actions/blogActions";
import { useForm } from "../Hooks/useForm";
import "../Styles/General/EditBlog.css";

const EditBlog = ({ modal, close }) => {
  const dispacth = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    title: modal.title,
    description: modal.description,
    category: modal.category,
  });

  const { title, description, category } = values;

  const handleClose = () => {
    reset();
    close(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(editBlogEntryAsync(modal.id, values));
    window.setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <div className="popUpBg">
      <div className="popUp">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={title}
            onChange={handleInputChange} />
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
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" value={category}
            onChange={handleInputChange} />
          </div>
          <div>
            <button type="submit">Editar</button>
            <button type="button" style={{marginTop: "10px"}} onClick={handleClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;
