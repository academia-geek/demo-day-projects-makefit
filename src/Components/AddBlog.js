import React from "react";
import { useDispatch } from "react-redux";
import { addBlogEntryAsync } from "../Redux/actions/blogActions";
import { fileUp } from "../utils/fileUp";
import uuid from "react-uuid";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

let videoCloud;

function AddBlog() {
  const dispacth = useDispatch();
  // const navigate = useNavigate();

  // const values = {
  //   title: "",
  //   description: "",
  //   category: "",
  //   video: "",
  // };

  const handleSubmit = (e) => {
    e.target.values.id = uuid();
    e.preventDefault();
    // dispacth(addBlogEntryAsync(values));
    // reset();
    window.setTimeout(() => {
      e.target.reset();
    }, 2000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    fileUp(file)
      .then((result) => {
        videoCloud = result;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, "Título debe tener más de 6 caracteres")
      .required("Title is required"),
    description: Yup.string()
      .min(6, "Descripción debe tener más de 6 caracteres")
      .required("Description is required"),
    video: Yup.string().optional("Video is optional"),
    category: Yup.string().required("Category is required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          category: "",
          video: "",
        }}
        validationSchema={AddSchema}
        onSubmit={(values) => {
          values.id = uuid();
          values.video = videoCloud;
          dispacth(addBlogEntryAsync(values));
          // navigate("/blog");
        }}
      >
        {({ errors, touched, handleReset }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field type="text" id="title" name="title" />
              {errors.title && touched.title ? (
                <div className="error">{errors.title}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <Field type="text" id="description" name="description" />
              {errors.description && touched.description ? (
                <div className="error">{errors.description}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="video">Video</label>
              <Field
                type="file"
                id="video"
                name="video"
                onChange={handleFileChange}
              />
              {errors.video && touched.video ? (
                <div className="error">{errors.video}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <Field type="text" id="category" name="category" />
              {errors.category && touched.category ? (
                <div className="error">{errors.category}</div>
              ) : null}
            </div>
            <button type="submit">Agregar</button>
          </Form>
        )}
      </Formik>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}

export default AddBlog;
