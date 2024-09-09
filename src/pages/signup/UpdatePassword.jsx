import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  currentPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Current Password is required"),
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const UpdatePassword = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const data = {
      newPassword: values.newPassword,
      currentPassword: values.currentPassword,
    };

    const config = {
      method: "put",
      url: "https://devcamper-api-v2.onrender.com/api/v1/auth/updatepassword",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGYwMmZkYzAzZjRiNzMxZmZlM2JlMyIsImlhdCI6MTcyNTg5MTMyNiwiZXhwIjoxNzI4NDgzMzI2fQ.kjkMTn3xW2Ewvc1cv6ZU2EYhc0umJkEDXj8-kIxcpqY",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log("Password updated successfully:", response.data);
        alert("Password updated successfully!");
        resetForm();
      })
      .catch((error) => {
        console.error("Error updating password:", error);
        alert("There was an error updating your password. Please try again.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Password</h2>

      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="currentPassword"
                className="block text-gray-700 mb-2"
              >
                Current Password
              </label>

              <Field
                type="password"
                id="currentPassword"
                name="currentPassword"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />

              <ErrorMessage
                name="currentPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-gray-700 mb-2">
                New Password
              </label>
              <Field
                type="password"
                id="newPassword"
                name="newPassword"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 mb-2"
              >
                Confirm New Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Password"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdatePassword;
