import React, { useState } from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import service from "../../appwrite/service";
import { useSelector } from "react-redux";

function Modal() {
  const [close, setClose] = useState(false);
  const { register, handleSubmit } = useForm();
  const state = useSelector((state) => state.auth.user);
  const userId = state.$id;
  console.log(userId);
  const createNew = async (data) => {
    const note = await service.createDocuments(data /* userId */);
    if (note) {
      console.log("note has been created");
    } else {
      console.log("note has not been created");
    }
    setClose(true);
  };
  const handleClose = () => {
    setClose(!close);
  };

  return close ? null : (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white shadow-lg rounded-lg  p-8 relative">
        <IoMdClose
          className="absolute right-10 top-6 font-extrabold text-2xl cursor-pointer"
          onClick={() => {
            handleClose();
          }}
        />
        <form onSubmit={handleSubmit(createNew)}>
          <Input
            label="Title"
            placeholder="enter the title"
            labelStyle="font-semibold mt-3  text-lg font-primary"
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
            className="w-full border-2 rounded-md p-3 font-primary text-lg "
            rows={12}
            placeholder="enter your body here"
            {...register("body", { required: true })}
          ></textarea>
          <div className="flex items-center font-semibold font-primary">
            <label htmlFor="favorate" className="mr-2">
              Favorate
            </label>
            <input type="checkbox" id="favorate" {...register("favorate")} />
          </div>
          <button
            type="submit"
            className="mt-4 font-primary bg-primary text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
