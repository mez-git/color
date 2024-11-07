import React from 'react';

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
      <div className="text-center text-white p-8 rounded-lg shadow-lg bg-white bg-opacity-30 max-w-md mx-auto">
        <div className="text-5xl mb-4 animate-bounce">
          🎉
        </div>
        <h1 className="text-4xl font-extrabold mb-4">
          Congratulations, You Did It! 🎉
        </h1>
        <p className="text-xl mb-6">
          You have chosen the correct color! Well done, little explorer! 🌟
        </p>

    
        <a
          href="/"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-400 transition duration-300"
        >
          Go Back to Game
        </a>
      </div>
    </div>
  );
};

export default Success;
