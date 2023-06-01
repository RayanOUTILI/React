import React from "react";
//  on importe talwind <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
import "../index.css";

const Tailwind = () => {
  return (
    <div className="shadow-lg bg-grey max-w-lg flex justify-center items-center m-auto"> 
        <h2 className="text-lg">Ceci est un titre - TEST avec tailwindcss</h2>
        <img src="https://picsum.photos/200/" alt="imag_test" />
    </div>
  );
};

export default Tailwind;
