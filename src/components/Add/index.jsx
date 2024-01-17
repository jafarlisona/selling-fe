import React, { useEffect, useState } from "react";
import "./index.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Add() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  function getAllProducts() {
    fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  async function handleSubmit(values) {
    await fetch("http://localhost:3000/products/", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    getAllProducts();
  }
  async function handleDelete(id) {
    await fetch("http://localhost:3000/products/" + id, { method: "DELETE" });
    getAllProducts();
  }
  return (
    <section id="add">
      <div className="container">
        <Formik
          initialValues={{ image: "", title: "", description: "" }}
          validationSchema={Yup.object({
            image: Yup.string()
              .min(10, "Must be 10 characters or more")
              .required("Required"),
            title: Yup.string()
              .min(10, "Must be 10 characters or more")
              .required("Required"),
            description: Yup.string()
              .min(25, "Must be 25 characters or more")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <div className="form">
              <label htmlFor="image">Image :</label>
              <div className="field">
                <Field name="image" type="text" placeholder="Enter image URL" />
                <ErrorMessage name="image" component={"span"} />
              </div>
            </div>

            <div className="form">
              <label htmlFor="title">Title :</label>
              <div className="field">
                <Field
                  name="title"
                  type="text"
                  placeholder="Enter product name"
                />
                <ErrorMessage name="title" component={"span"} />
              </div>
            </div>

            <div className="form">
              <label htmlFor="description">Description :</label>
              <div className="field">
                <Field
                  name="description"
                  type="text"
                  as="textarea"
                  placeholder="Enter product description"
                />
                <ErrorMessage name="description" component={"span"} />
              </div>
            </div>

            <button type="submit">Add</button>
          </Form>
        </Formik>
        <div className="table">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((x) =>
                  x.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((x) => (
                  <tr key={x._id}>
                    <td>
                      <img src={x.image} alt="" />
                    </td>
                    <td>{x.title}</td>
                    <td>{x.description}</td>
                    <td>
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => handleDelete(x._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Add;
