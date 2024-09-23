import { useContext } from "react";
import { AppContext } from "../../App";
import { Navigate } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="p-4 bg-blue-600">
            <div className="container flex items-center justify-between mx-auto">
                <div className="text-2xl font-bold text-white">
                    Tech Bootcamp
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-white hover:text-gray-200">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-200">Courses</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-200">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-200">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <div className="bg-center bg-cover h-96"
             style={{backgroundImage: 'url(https://via.placeholder.com/1600x400?text=Join+Our+Tech+Bootcamp)'}}>
            <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
                <h1 className="text-5xl font-bold text-white">Welcome to Tech Bootcamp</h1>
                <p className="mt-4 text-lg text-white">Master the skills needed for a successful tech career</p>
                <a href="#courses"
                   className="px-4 py-2 mt-8 text-white transition bg-blue-500 rounded hover:bg-blue-700">
                    View Courses
                </a>
            </div>
        </div>
    );
};

const Content = () => {
    return (
        <div className="container py-12 mx-auto" id="courses">
            <h2 className="mb-8 text-3xl font-semibold text-center">Our Popular Courses</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="mb-4 text-xl font-semibold text-blue-600">Web Development</h3>
                    <p className="text-gray-700">Learn how to build web applications using the latest technologies.</p>
                    <a href="#" className="block mt-4 text-blue-500 hover:underline">Learn More</a>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="mb-4 text-xl font-semibold text-blue-600">Data Science</h3>
                    <p className="text-gray-700">Master data science skills including Python, machine learning, and
                        more.</p>
                    <a href="#" className="block mt-4 text-blue-500 hover:underline">Learn More</a>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="mb-4 text-xl font-semibold text-blue-600">UI/UX Design</h3>
                    <p className="text-gray-700">Learn to create user-friendly and aesthetically pleasing
                        interfaces.</p>
                    <a href="#" className="block mt-4 text-blue-500 hover:underline">Learn More</a>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="py-6 mt-12 bg-blue-600">
            <div className="container mx-auto text-center text-white">
                <p>&copy; 2024 Tech Bootcamp. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

const HomeDashboard = () => {
    const { userToken } = useContext(AppContext);
    console.log("userToken", userToken);
    if(!userToken) {
        return <Navigate to="/login"/>
    }
    
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default HomeDashboard;
