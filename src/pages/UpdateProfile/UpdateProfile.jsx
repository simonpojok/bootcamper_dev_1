import { Formik } from "formik";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import customInstance from "../../axios_http_client";

const defaultProfilePic = "https://via.placeholder.com/150"; // Placeholder image URL

const url = "/api/v1/auth/updatedetails";

const UpdateProfile = () => {
  const [profilePicPreview, setProfilePicPreview] = useState(defaultProfilePic);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Update Profile
        </h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            role: "",
            profilePicture: null,
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const userToken = localStorage.getItem("user_token");
              const formData = new FormData();
              formData.append("name", values.name);
              formData.append("email", values.email);
              formData.append("role", values.role);
              if (values.profilePicture) {
                formData.append("profilePicture", values.profilePicture);
              }

              const response = await customInstance.put(url, formData, {
                headers: {
                  Authorization: `Bearer ${userToken}`,
                  "Content-Type": "multipart/form-data",
                },
              });

              console.log("Response data:", response.data.data);
            } catch (error) {
              console.error("Error updating details:", error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ values, handleSubmit, setFieldValue, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center relative">
                {/* Profile Picture */}
                <div className="relative">
                  <img
                    src={profilePicPreview}
                    alt="Profile Preview"
                    className="w-24 h-24 rounded-full object-cover"
                  />

                  {/* Camera Icon */}
                  <div className="absolute bottom-0 right-0 bg-gray-700 p-2 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faCamera} className="text-white" />
                  </div>
                </div>

                {/* File Input */}
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                      setFieldValue("profilePicture", file);
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setProfilePicPreview(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <span className="text-sm text-gray-300 mt-2">Change Profile Picture</span>
              </div>

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
                  onChange={(e) => setFieldValue("name", e.target.value)}
                  className="mt-1 block w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your username"
                />
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
                  onChange={(e) => setFieldValue("email", e.target.value)}
                  className="mt-1 block w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
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
                  onChange={(e) => setFieldValue("role", e.target.value)}
                  className="mt-1 block w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your role"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
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
