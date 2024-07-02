import React, { useState, useEffect } from "react";

import service from "../../appwrite/service";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { nanoid } from "@reduxjs/toolkit";
function Favorates() {
  const [Notes, setNotes] = useState([]);
  useEffect(() => {
    (async () => {
      const notes = await service.listDocuments();
      if (notes) {
        setNotes(notes.documents);
      }
    })();
  }, []);
  return (
    <div className="w-full h-screen">
      <h1 className="text-4xl max-sm:text-2xl font-primary font-medium text-center mt-20">
        Your Favorite Notes 📒
      </h1>
      <div className="grid gap-9 py-20 px-40 grid-cols-4  max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:px-6  max-xl:p-10  ">
        {Notes.filter((note) => {
          return note.favorate === true;
        }).map((note) => (
          <div
            className={`bg-white transition-transform rounded-xl my-3 w-full shadow-xl block p-4 cursor-pointer ${
              open ? `null` : `hover:scale-[1.06]`
            } `}
            key={nanoid()}
            onClick={() => console.log("click")}
          >
            <p className="font-semibold font-primary mt-3 mb-6 flex justify-between items-center">
              {note.favorate ? <FaHeart /> : <FaRegHeart />}
            </p>
            <h1 className="text-xl font-semibold font-primary mt-2">
              {note.title}
            </h1>
            <p className="font-primary my-2">
              {note.body.length > 70
                ? `${note.body.slice(0, 70)} ....`
                : ` ${note.body}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorates;
