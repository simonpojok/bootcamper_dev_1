import backgroundImageUrl from '../../assets/images/bootcamp/bootcamp-background.jpg'
import {Form, Formik} from "formik";

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-cover bg-center"
             style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <div className="flex flex-col justify-center items-center min-h-screen bg-black bg-opacity-50">
                <h1 className="text-4xl text-white font-bold mb-8">Join Our Tech Bootcamp!</h1>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Create Your Account</h2>

                    <Formik initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        role: '',
                    }} onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }} validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}>
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting
                          }) => (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {/* Name */}
                                <div>
                                    <label className="block text-gray-700 font-semibold">Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your name"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />

                                    <small className="block text-gray-700 font-semibold">
                                        {errors.username && touched.username && errors.username}
                                    </small>
                                </div>


                                {/* Email */}
                                <div>
                                    <label className="block text-gray-700 font-semibold">Email</label>
                                    <input
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />

                                    <small className="block text-gray-700 font-semibold">
                                        {errors.email && touched.email && errors.email}
                                    </small>
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block text-gray-700 font-semibold">Password</label>
                                    <input
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your password"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />

                                    <small className="block text-gray-700 font-semibold">
                                        {errors.password && touched.password && errors.password}
                                    </small>
                                </div>

                                {/* Role */}
                                <div>
                                    <label className="block text-gray-700 font-semibold">Role</label>
                                    <select
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        name="role"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.role}
                                    >
                                        <option value="student">Student</option>
                                        <option value="mentor">Mentor</option>
                                        <option value="admin">Admin</option>
                                    </select>

                                    <small className="block text-gray-700 font-semibold">
                                        {errors.role && touched.role && errors.role}
                                    </small>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button disabled={isSubmitting}
                                            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
                                        Submit
                                    </button>
                                </div>

                                {/* Login Button */}
                                <div className="text-center mt-4">
                                    <button className="text-blue-600 hover:text-blue-700">
                                        Already have an account? Login
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    )
}
