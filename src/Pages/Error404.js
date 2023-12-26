import React from 'react';

const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-in-out;
  }

  .animate-fade-in-up {
    animation: fadeInUp 1s ease-in-out;
  }

  .animate-scale-in {
    animation: scaleIn 1s ease-in-out;
  }
`;

const ErrorPage = () => {
        return (
                <>
                        <style>{styles}</style>
                        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
                                <div className="text-center">
                                        <h1 className="text-6xl font-bold mb-4 animate-scale-in">404</h1>
                                        <h2 className="text-2xl font-semibold mb-4 animate-fade-in-up">Page Not Found</h2>
                                        <p className="text-lg mb-8 animate-fade-in">Oops! The page you are looking for might be in another universe.</p>
                                        <button
                                                className="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-600 transition duration-300 animate-fade-in-up"
                                                onClick={() => window.location.href = '/'}
                                        >
                                                Return To Home
                                        </button>
                                </div>
                        </div>
                </>
        );
};

export default ErrorPage;
