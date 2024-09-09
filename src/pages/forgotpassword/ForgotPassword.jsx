import backgroundImageUrl from '../../assets/images/bootcamp/bootcamp-background.jpg'
// import Formik from 'formik';

export default function ForgotPassword () {
    return (
        <div className="min-h-screen bg-cover bg-center"
        style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <div className="flex flex-col justify-center items-center min-h-screen bg-black bg-opacity-50">
                <h1 className="text-4xl text-white font-bold mb-8">Forgot Password</h1>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Enter EMail Address</h2>

                    
                </div>
            </div>
        </div>
    );

}