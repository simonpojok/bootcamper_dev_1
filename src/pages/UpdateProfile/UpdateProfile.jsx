import { Formik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import customInstance from "../../axios_http_client";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZTE2MjJlNmE2ZDFkYWI3MzNlNTRmMSIsImlhdCI6MTcyNjA0Njc2NywiZXhwIjoxNzI4NjM4NzY3fQ.hqAq-LuKLSzh04u0a40r3di2RWz92uQ6DOq37fQMAqE";
const url = "/api/v1/auth/updatedetails";

const UpdateProfile = () => {
  const apiEndpoint = "/api/v1/auth/updatedetails";
  const [user, setUser] = useState([]);

  useEffect(function () {
    async function updateDetails() {
      const data = await customInstance.put(url, {
        name: values.username,
        password: values.password,
        email: values.email,
        role: values.role,
      });
      console.log(data);
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-6">Update Profile</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            role: "",
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
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
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              console.log("Response data:", response.data.data);
            } catch (error) {
              console.error("Error updating details:", error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ values, errors, handleSubmit, handleChange, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your username"
                />
                {errors.name && <small className="text-red-500">{errors.name}</small>}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && <small className="text-red-500">{errors.email}</small>}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <small className="text-red-500">{errors.password}</small>
                )}
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-300"
                >
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your role"
                />
                {errors.role && <small className="text-red-500">{errors.role}</small>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateProfile;
