// import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../App";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import customInstance from "../axios_http_client";

export default function Login() {
  const { setUserToken } = useContext(AppContext);

  // Initialie the input fields
  const initialValues = {
    email: "",
    password: "",
  };

  //   Validation schema using Yup and Regex
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password is required")
      .required("Password is required"),
  });

  //   Function to handle form submission
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      // Call Login API
      const response = await customInstance.post("/api/v1/auth/login", values);

      // Etract token from response
      const token = response.data.token;

      //   Store token in localStorage for authentication
      // localStorage.setItem("authToken", token);
      setUserToken(token);

      // Alert Successful Login
      alert("Login Successful!");

      // Redirect
    } catch (error) {
      console.error("Login error:", error.response.data);
      alert("Login Failed. Please, check yor credentials");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-700">
          Welcome Back. Please, kindly login
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-gray-600">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-gray-600">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              <div className="mt-4 text-center">
                <Link
                  to={"/sign-up"}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Don't have an account? Sign Up
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
