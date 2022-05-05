import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../Hooks/useForm";
import { editFavoritesAsync } from "../Redux/actions/actionFavorites";
import styles from "../Styles/General/ModalCustom.module.scss";

const EditFavorites = ({ favorite, close }) => {

    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        title: favorite.title,
    });

    const { title } = values;

    const handleClose = () => {
        close(false);
    };

    const handleSubmit = () => {
        console.log(favorite);
        dispatch(editFavoritesAsync(favorite.recipeId, values));
        handleClose();
    };

    return (
        <div className={styles.modal_container}>
            <div className={styles.modal_background}>
                <div className={styles.modal_content}>

                    <div className={styles.modal_header}>
                        <h1>Edit Favorite</h1>
                        <button onClick={handleClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className={styles.modal_body}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.modal_form}>
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={title}
                                    onChange={handleInputChange}
                                    autoComplete="off"
                                />
                            </div>
                        </form>
                    </div>

                    <div className={styles.modal_footer}>
                        <button onClick={handleSubmit}>Edit</button>
                        <button type="button" onClick={handleClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditFavorites;