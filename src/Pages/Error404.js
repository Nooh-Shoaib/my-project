import React from 'react';

const ErrorPage = () => {
        return (
                <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
                        <div className="text-center">
                                <h1 className="text-6xl font-bold mb-4 animate-scale-in">404</h1>
                                <h2 className="text-2xl font-semibold mb-4 animate-fade-in-up">Page Not Found</h2>
                                <p className="text-lg mb-8 animate-fade-in">Oops! The page you are looking for might be in another universe.</p>
                                <button
                                        className="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
                                        onClick={() => window.location.href = '/'}
                                >
                                        Return To Home
                                </button>
                        </div>
                </div>
        );
};

export default ErrorPage;
