import React from "react";
import { useDispatch } from "react-redux";
import { editBlogEntryAsync } from "../Redux/actions/blogActions";
import { useForm } from "../Hooks/useForm";
import styles from "../Styles/General/ModalCustom.module.scss";

const EditBlog = ({ modal, close }) => {
  const dispatch = useDispatch();

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

  //ENVIAR LOS DATOS DEL FORMULARIO
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBlogEntryAsync(modal.id, values));
    handleClose();
  };

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_background}>
        <div className={styles.modal_content}>

          <div className={styles.modal_header}>
            <h1>Edit blog entrie</h1>
            <button onClick={handleClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className={styles.modal_body}>
            <form onSubmit={handleSubmit}>
              <div className={styles.modal_form}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={title}
                  onChange={handleInputChange} />
              </div>

              <div className={styles.modal_form}>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.modal_form}>
                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category" value={category}
                  onChange={handleInputChange} />
              </div>
            </form>
          </div>

          <div className={styles.modal_footer}>
            <button type="submit" onClick={handleSubmit}>Editar</button>
            <button type="button" onClick={handleClose}>Cancelar</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EditBlog;
