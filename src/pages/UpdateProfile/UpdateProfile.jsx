import { Formik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import customInstance from "../../axios_http_client";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZTE2MjJlNmE2ZDFkYWI3MzNlNTRmMSIsImlhdCI6MTcyNjA0Njc2NywiZXhwIjoxNzI4NjM4NzY3fQ.hqAq-LuKLSzh04u0a40r3di2RWz92uQ6DOq37fQMAqE";
const url = "/api/v1/auth/updatedetails";

const UpdateProfile = () => {
  // const apiEndpoint = "/api/v1/auth/updatedetails";
  // const [user, setUser]=useState([])
  // const updatedDetails = {name:values.username, password:values.password, email:values.email, role:values.role}

  useEffect(function () {
    async function updateDetails() {
      // const headers = {
      //   Authorization: `Bearer ${token}`,
      // }
      // const data = await customInstance.put(url, {
      //   name: values.username,
      //   password: values.password,
      //   email: values.email,
      //   role: values.role,
      // });
      // console.log(data);
    }
  }, []);

  // const handleSubmit = async (values, { setSubmitting }) => {
  //   try {
  //       // Make a PUT request with Axios to update user details
  //       const response = await customInstance.put('/user/update', {
  //           username: values.username,
  //           email: values.email,
  //       });

  //       if (response.status === 200) {
  //           console.log('User details updated successfully', response.data);
  //           // Handle successful update (e.g., show a success

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        role: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          // Sending data to the API
          const response = await customInstance.put(
            url,
            {
              name: values.name,
              email: values.email,
              password: values.password,
              role: values.role,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`, // Include the token here
              },
            }
          );

          console.log("Response data:", response.data.data);
          // Handle success, maybe show a success message
        } catch (error) {
          console.error("Error updating details:", error);
        } finally {
          setSubmitting(false); // Stop the form's submitting state
        }
      }}
    >
      {({ values, errors, handleSubmit, handleChange, isSubmitting }) => (
        <form
          onSubmit={handleSubmit}
          className="w-1/5 mx-auto mt-6 border flex flex-col gap-4"
        >
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="border rounded-sm px-2 py-1 w-3/4"
            />
            {errors.name && <small>{errors.name}</small>}
          </div>

          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="border rounded-sm px-2 py-1 w-3/4"
            />
            {errors.email && <small>{errors.email}</small>}
          </div>

          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="border rounded-sm px-2 py-1 w-3/4"
            />
            {errors.password && <small>{errors.password}</small>}
          </div>

          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              value={values.role}
              onChange={handleChange}
              className="border rounded-sm px-2 py-1 w-3/4"
            />
            {errors.role && <small>{errors.role}</small>}
          </div>

          <div className="flex  justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-400 text-white px-2 py-1 rounded-md hover:bg-blue-500 cursor-pointer transition-all"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default UpdateProfile;
