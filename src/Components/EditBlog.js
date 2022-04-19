import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editBlogEntryAsync } from "../Redux/actions/blogActions";

function EditBlog({ modal, close }) {
  const dispacth = useDispatch();

  const EditSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, "Título debe tener más de 6 caracteres")
      .required("Title is required"),
    description: Yup.string()
      .min(6, "Descripción debe tener más de 6 caracteres")
      .required("Description is required"),
    category: Yup.string().required("Category is required"),
  });

  return (
    <div>
      <div className="container">
        <Formik
          initialValues={{
            title: "",
            description: "",
            category: "",
          }}
          validationSchema={EditSchema}
          onSubmit={(values) => {
            dispacth(editBlogEntryAsync(modal.id, values));
            close(false);
          }}
        >
          {({ errors, touched, handleReset, handleChange }) => (
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
                <label htmlFor="category">Category</label>
                <Field type="text" id="category" name="category" />
                {errors.category && touched.category ? (
                  <div className="error">{errors.category}</div>
                ) : null}
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EditBlog;
