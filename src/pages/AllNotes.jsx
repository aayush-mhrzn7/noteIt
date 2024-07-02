import React, { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import service from "../../appwrite/service";
import ViewPost from "./ViewPost"; // Changed to PascalCase as it's a component

function AllNotes() {
  const [Notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleViewPost = (note) => {
    setSelectedNote(note);
  };

  useEffect(() => {
    (async () => {
      const notes = await service.listDocuments();
      if (notes) {
        setNotes(notes.documents);
      }
    })();
  }, []);

  return (
    <div className="h-screen w-full">
      {/* Search form */}
      <div className="flex justify-center items-center flex-grow ">
        <form className="mt-16 mx-6 bg-white max-w-3xl w-full rounded-xl flex items-center justify-between">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Find your notes"
            className="p-3 px-8 rounded-xl w-1/2 font-primary font-medium outline-none"
          />
          <button className="w-1/3 p-3 rounded-tr-xl rounded-br-xl z-0 font-semibold text-white bg-primary">
            Search
          </button>
        </form>
      </div>

      {/* Notes grid */}
      <div className="grid gap-9 py-20 px-40 grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:px-6 max-xl:p-10">
        {/* Add new note button */}
        <div
          className="bg-gray-200 rounded-xl my-3 shadow-xl w-full p-4 h-[22rem] cursor-pointer"
          onClick={handleOpen}
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <FaPlus className="my-4 text-3xl text-slate-400" />
            <h1 className="text-lg font-medium text-slate-400">
              Add new Notes
            </h1>
          </div>
        </div>

        {/* Modal for adding new note */}
        {open && <Modal />}

        {/* View note modal */}
        {selectedNote && (
          <ViewPost note={selectedNote} onClose={() => setSelectedNote(null)} />
        )}

        {/* Existing notes */}
        {Notes.filter((note) => {
          return (
            search.toLowerCase() === "" ||
            note.title.toLowerCase().includes(search.toLowerCase())
          );
        }).map((note) => (
          <div
            className="bg-white transition-transform rounded-xl my-3 w-full shadow-xl block p-4 cursor-pointer hover:scale-[1.06]"
            key={nanoid()}
            onClick={() => handleViewPost(note)}
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
                : note.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllNotes;
