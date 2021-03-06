import React from "react";
import { useDispatch } from "react-redux";
import { addBlogEntryAsync } from "../Redux/actions/blogActions";
import { fileUp } from "../utils/fileUp";
import uuid from "react-uuid";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "../Styles/Blog/AddBlog.module.scss";
import Swal from "sweetalert2";

let videoCloud;

const AddBlog = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.target.values.id = uuid();
    e.preventDefault();
    window.setTimeout(() => {
      e.target.reset();
    }, 2000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    Swal.fire({
      icon: "warning",
      title: "Please, wait while the video loads",
      showConfirmButton: false,
    });
    fileUp(file)
      .then((result) => {
        videoCloud = result;
        Swal.fire({
          icon: "success",
          title: "Video uploaded successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, "The title must have more than 6 characters")
      .required("Title is required"),
    description: Yup.string()
      .min(6, "Description must be longer than 6 characters")
      .required("Description is required"),
    video: Yup.string().optional("Video is optional"),
    category: Yup.string().required("Category is required"),
  });
  return (
    <div className={styles.add_container}>
      <h1>Add blog entry</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
          category: "",
          video: "",
        }}
        validationSchema={AddSchema}
        onSubmit={(values, { resetForm }) => {
          if (videoCloud === undefined) {
            Swal.fire({
              icon: "warning",
              title: "Por favor cargue una imagen",
            });
          } else {
            values.id = uuid();
            values.video = videoCloud;
            console.log(values);
            dispatch(addBlogEntryAsync(values));
            resetForm();
            Swal.fire({
              icon: "success",
              title: "Entrada al blog agregada correctamente",
              showConfirmButton: false,
              timer: 1500,
            });
            videoCloud = undefined;
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.add_form}>
            <div className={styles.add_input}>
              <label htmlFor="title">Title</label>
              <Field type="text" id="title" name="title" />
              {errors.title && touched.title ? (
                <div className="error">{errors.title}</div>
              ) : null}
            </div>

            <div className={styles.add_input}>
              <label htmlFor="description">Description</label>
              <Field type="text" id="description" name="description" />
              {errors.description && touched.description ? (
                <div className="error">{errors.description}</div>
              ) : null}
            </div>

            <div className={styles.add_input}>
              <label htmlFor="category">Category</label>
              <Field type="text" id="category" name="category" />
              {errors.category && touched.category ? (
                <div className="error">{errors.category}</div>
              ) : null}
            </div>

            <div className={styles.add_input}>
              <label className={styles.add_input__label} htmlFor="video">
                <i className="fa-solid fa-upload"></i>Upload video
              </label>
              <Field
                className={styles.add_input__none}
                type="file"
                id="video"
                name="video"
                onChange={handleFileChange}
              />
              {errors.video && touched.video ? (
                <div className="error">{errors.video}</div>
              ) : null}
            </div>

            <button className={styles.add_btn} type="submit">
              Agregar
            </button>
          </Form>
        )}
      </Formik>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}

export default AddBlog;
