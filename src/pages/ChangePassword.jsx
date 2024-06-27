import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
function ChangePassword() {
  const { register, handleSubmit } = useForm();
  const ChangePass = (data) => {
    console.log(data);
    // chaneg password functionality
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center max-sm:px-10 ">
      <h1 className="text-2xl font-semibold font-primary">New password.</h1>
      <div className="w-1/3 max-xl:w-1/2 max-sm:w-full  ">
        <form onSubmit={handleSubmit(ChangePass)}>
          <Input
            label="password"
            labelStyle=" capitalize font-semibold my-2"
            className="rounded-md"
            placeholder="enter your new password"
            {...register("email", { required: true })}
          />
          <Input
            label="repassword"
            labelStyle=" capitalize font-semibold my-2"
            className="rounded-md"
            placeholder="re-enter your new password"
            {...register("email", { required: true })}
          />
          <Button className=" text-white text-md bg-primary mt-6  rounded-md">
            Change password
          </Button>{" "}
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
