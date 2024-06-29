import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import auth from "../../appwrite/auth";

function Forgot() {
  const { register, handleSubmit } = useForm();
  const forgotPassword = async (data) => {
    console.log(data);
    await auth.forgot(data);
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center max-sm:px-10 ">
      <h1 className="text-2xl font-semibold font-primary">Forgot password.</h1>
      <div className="w-1/3 max-xl:w-1/2 max-sm:w-full  ">
        <form onSubmit={handleSubmit(forgotPassword)}>
          <Input
            label="email"
            labelStyle=" capitalize font-semibold my-2"
            className="rounded-md"
            placeholder="what is your email"
            {...register("email", { required: true })}
          />
          <Button className=" text-white bg-primary mt-6 rounded-md">
            Reset
          </Button>{" "}
        </form>
      </div>
    </div>
  );
}

export default Forgot;
