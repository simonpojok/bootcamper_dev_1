import { Formik } from "formik";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import customInstance from "../../axios_http_client";
import { AppContext, AppContextProvider } from "../../context";

const url = "/api/v1/auth/updatedetails";

const UpdateProfile = () => {
  const { userToken, name } = useContext(AppContext);
  console.log("userToken", userToken);
  console.log("name", name);

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
                Authorization: `Bearer ${userToken}`, // Include the token here
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
        <form onSubmit={handleSubmit} className="flex flex-col w-1/5 gap-4 mx-auto mt-6 border">
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-3/4 px-2 py-1 border rounded-sm"
            />
            {errors.name && <small>{errors.name}</small>}
          </div>

          <div className="flex items-center justify-between gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-3/4 px-2 py-1 border rounded-sm"
            />
            {errors.email && <small>{errors.email}</small>}
          </div>

          <div className="flex items-center justify-between gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="w-3/4 px-2 py-1 border rounded-sm"
            />
            {errors.password && <small>{errors.password}</small>}
          </div>

          <div className="flex items-center justify-between gap-2">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              value={values.role}
              onChange={handleChange}
              className="w-3/4 px-2 py-1 border rounded-sm"
            />
            {errors.role && <small>{errors.role}</small>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-2 py-1 text-white transition-all bg-blue-400 rounded-md cursor-pointer hover:bg-blue-500"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

const UpdateProfilePage = () => {
  return (
    <AppContextProvider>
      <UpdateProfile />
    </AppContextProvider>
  );
};
export default UpdateProfilePage;
