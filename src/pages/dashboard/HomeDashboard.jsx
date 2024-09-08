const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
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
        <div className="bg-cover bg-center h-96"
             style={{backgroundImage: 'url(https://via.placeholder.com/1600x400?text=Join+Our+Tech+Bootcamp)'}}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
                <h1 className="text-white text-5xl font-bold">Welcome to Tech Bootcamp</h1>
                <p className="text-white text-lg mt-4">Master the skills needed for a successful tech career</p>
                <a href="#courses"
                   className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    View Courses
                </a>
            </div>
        </div>
    );
};

const Content = () => {
    return (
        <div className="container mx-auto py-12" id="courses">
            <h2 className="text-3xl font-semibold text-center mb-8">Our Popular Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Web Development</h3>
                    <p className="text-gray-700">Learn how to build web applications using the latest technologies.</p>
                    <a href="#" className="text-blue-500 mt-4 block hover:underline">Learn More</a>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Data Science</h3>
                    <p className="text-gray-700">Master data science skills including Python, machine learning, and
                        more.</p>
                    <a href="#" className="text-blue-500 mt-4 block hover:underline">Learn More</a>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">UI/UX Design</h3>
                    <p className="text-gray-700">Learn to create user-friendly and aesthetically pleasing
                        interfaces.</p>
                    <a href="#" className="text-blue-500 mt-4 block hover:underline">Learn More</a>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-blue-600 py-6 mt-12">
            <div className="container mx-auto text-center text-white">
                <p>&copy; 2024 Tech Bootcamp. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

const HomeDashboard = () => {
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
