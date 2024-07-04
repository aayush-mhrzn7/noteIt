import React, { useEffect } from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import service from "../../appwrite/service";

function ViewPost({ note, onClose }) {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("title", note.title);
    setValue("body", note.body);
    setValue("favorate", note.favorate);
  }, [note, setValue]);

  const updateNote = async (data) => {
    try {
      await service.updateDocuments(note.$id, data);
      onClose();
    } catch (error) {
      console.log("failed to update");
      console.log(error);
    }
  };

  const deleteNote = async () => {
    try {
      await service.deleteDocuments(note.$id);
      onClose();
    } catch (error) {
      console.log("error in deletion");
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 relative">
        <IoMdClose
          className="absolute right-10 top-6 font-extrabold text-2xl cursor-pointer"
          onClick={onClose}
        />
        <form onSubmit={handleSubmit(updateNote)}>
          <Input
            label="Title"
            placeholder="enter the title"
            labelStyle="font-semibold mt-3 text-lg font-primary"
            className="my-3 shadow-none"
            {...register("title", { required: true })}
          />
          <label
            htmlFor="body"
            className="my-2 inline-block font-semibold font-primary"
          >
            Description
          </label>
          <textarea
            id="body"
            className="w-full border-2 rounded-md p-3 font-primary text-lg"
            rows={12}
            placeholder="enter your body here"
            {...register("body", { required: true })}
          ></textarea>
          <div className="flex items-center font-semibold font-primary  my-3">
            <label htmlFor="favorate" className="mr-2 inline-block">
              Favorite
            </label>
            <input type="checkbox" id="favorate" {...register("favorate")} />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" font-primary bg-green-700 text-white py-2 px-4 rounded"
            >
              Save Changes
            </button>
            <button
              className=" font-primary bg-red text-white py-2 px-4 rounded font-semibold"
              onClick={deleteNote}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ViewPost;
