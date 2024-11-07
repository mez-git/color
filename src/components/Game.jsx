import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Game = ({ onCompletion }) => {
  const navigate = useNavigate();
  const [loading,setloading]=useState(false)
  const choice = ["yellow", "green", "red", "blue", "orange", "gray"];
  const select = () => {
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
  };

  const [colour, setColour] = useState(select());
  const handleClick = () => {
    setColour(select());
  };

  console.log(colour);
  const [color, setColor] = useState("white");
  const handleColorChange = (newColor) => {
    setloading(true)
    setColor((prev) => (prev === newColor ? "white" : newColor));

    onCompletion();
    
    setTimeout(() => {
      if (newColor === colour) {
        onCompletion();
        navigate("/success");
      } else {
        navigate("/tryagain");
      }
      setloading(false)
    }, 2000);
  
  };
  console.log(color);
  const colors = [
    { name: "yellow", bgClass: "bg-yellow-400" },
    { name: "green", bgClass: "bg-green-500" },
    { name: "red", bgClass: "bg-red-600" },
    { name: "blue", bgClass: "bg-blue-700" },
    { name: "orange", bgClass: "bg-orange-500" },
    { name: "gray", bgClass: "bg-gray-500" }
  ];

  return (
    <div className="flex-col min-h-screen gap-2 p-2 border-2 border-gray-500  bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white  ">
      <div className="flex items-center justify-center m-1 gap-8">
        <div className="text-6xl mb-6 animate-bounce">🤩</div>
        <div className="text-3xl font-extrabold">How About :" {colour}"! </div>
        <button
          onClick={handleClick}
          className="bg-yellow-400 text-black px-8 py-4 rounded-full font-extrabold text-lg hover:bg-yellow-500 transition duration-300"
        >
          Try New
        </button>
      </div>
      <div className=" md:flex w-full h-full  gap-2 p-2 border-2 text-center text-white  rounded-lg shadow-lg bg-white bg-opacity-40   ">
        <div className="flex-col md:w-3/5 items-center text-center rounded border-2 border-white m-8 p-8 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white  ">
          <div className="text-3xl font-semibold mt-3 m-8"> COLOUR Pallete</div>
          <div className=" flex-col justify-evenly items-center bg-gray-200 rounded-lg shadow-lg  p-8 gap-8 ">
            <div className="flex gap-8 justify-evenly py-6 px-6 ">



             {colors.slice(0, 3).map((color) => (

                
             <button disabled={loading}
                  className={`w-50 ${color.bgClass} px-6 py-6 rounded-full `}
                  onClick={() => handleColorChange(color.name)}
                ></button>
              ))}
            </div>
            <div className="flex gap-8 justify-evenly py-6 px-6 ">
              {colors.slice(3).map((color) => (
               <button disabled={loading}
                className={`w-50 ${color.bgClass} px-6 py-6 rounded-full `}
                onClick={() => handleColorChange(color.name)}
              ></button>
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex-col md:w-2/5 items-centerrounded text-center border-2 rounded border-white m-8 p-8 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white "
          onClick={() => handleColorChange("gray-300")}
        >
          <div className="text-3xl font-semibold mt-3"> DISPLAY</div>
          <div
            className="h-96 border-2 m-8 border-gray-200 rounded"
            style={{ backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Game;
