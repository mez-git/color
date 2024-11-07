import React from 'react';
import { useNavigate } from 'react-router-dom';

const TryAgain = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    // Navigate back to the game page when the button is clicked
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
      <div className="text-center text-white p-10 rounded-lg shadow-lg bg-white bg-opacity-40 max-w-md mx-auto">
        <div className="text-6xl mb-6 animate-bounce">
          😅
        </div>
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
          Oops! Try Again! 🌟
        </h1>
        <p className="text-xl mb-6">
          It’s okay! Everyone makes mistakes! You can do it next time! 💪
        </p>

        {/* Retry Button */}
        <button
          onClick={handleRetry}
          className="bg-yellow-400 text-black px-8 py-4 rounded-full font-extrabold text-lg hover:bg-yellow-500 transition duration-300"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default TryAgain;

