import { BsFillDice4Fill } from "react-icons/bs";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [trivia, setTrivia] = useState([]);

  useEffect(() => {
    getTrivia();
  }, []);

  const getTrivia = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/food/trivia/random?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const data = await api.json();
    setTrivia(data.text);
  };

  return (
    <div className="w-full h-screen bg-slate-800">
      <h1 className="py-12 mx-auto text-5xl text-center text-green-400 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
        Food Trivia
      </h1>
      <div className="flex items-center justify-center w-11/12 mx-auto my-4 shadow-2xl p-4 bg-slate-700 shadow-black rounded-2xl h-3/5 max-w-[1700px] max-h-[700px]">
        <h1 className="flex flex-col flex-wrap items-center justify-center text-2xl text-center text-green-100 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          "{trivia}"
          <button
            onClick={getTrivia}
            className="flex items-center justify-center w-[3.5rem] h-[3.5rem] mt-16 bg-green-400 rounded-full shadow-[0_0_50px_0_rgb(0,0,0,0.25)] shadow-green-300 sm:w-[4.5rem] sm:h-[4.5rem] lg:w-[6rem] lg:h-[6rem] xl:w-[7rem] xl:h-[7rem]"
          >
            <BsFillDice4Fill className="text-black" />
          </button>
        </h1>
      </div>
    </div>
  );
}

export default App;
