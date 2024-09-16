import backgroundImageUrl from '../../assets/images/bootcamp/bootcamp-background.jpg'
import {Formik} from 'formik';

export default function ForgotPassword () {
    return (
        <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <div className="flex flex-col justify-center items-center min-h-screen bg-black bg-opacity-50">
                <h1 className="text-4xl text-white font-bold mb-8">Forgot Password</h1>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Enter Email Address</h2>

                    <Formik initialValues={{
                        email: '',
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
                                {/* <div>
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
                                </div> */}


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
    );

}