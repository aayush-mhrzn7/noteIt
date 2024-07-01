import React, { useState } from "react";
import MOCK_JSON from "../../MOCK_DATA.json";
import { nanoid } from "@reduxjs/toolkit";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
function Favorates() {
  const [favorate, setFavorate] = useState(false);
  return (
    <div className="w-full h-screen">
      <h1 className="text-4xl max-sm:text-2xl font-primary font-medium text-center mt-20">
        Your Favorite Notes 📒
      </h1>
      <div className="grid gap-9 py-20 px-40 grid-cols-4  max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:px-6  max-xl:p-10  ">
        {MOCK_JSON.map((d) => (
          <div
            className={`bg-white transition-transform rounded-xl my-3 w-full shadow-xl block p-4 cursor-pointer  hover:scale-[1.06]`}
            key={nanoid()}
          >
            <p className="font-semibold font-primary  mt-3 mb-6 flex justify-between items-center">
              {d.date}{" "}
              {favorate ? (
                <FaHeart
                  className="cursor-pointer"
                  onClick={() => setFavorate(!favorate)}
                />
              ) : (
                <FaRegHeart
                  className="cursor-pointer"
                  onClick={() => setFavorate(!favorate)}
                />
              )}
            </p>
            <h1 className="text-xl font-semibold font-primary mt-2">
              {d.title}
            </h1>
            <p className="font-primary my-2">
              {d.body.length > 70
                ? `${d.body.slice(0, 70)} ....`
                : ` ${d.body}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorates;
