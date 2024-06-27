import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
function Login() {
  const { register, handleSubmit } = useForm();
  const loginSubmit = (data) => {
    console.log(data);
    // login functionality
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center max-sm:px-10 bg-main ">
      <h1 className="text-3xl font-semibold font-primary">Welcome back !! </h1>
      <div className="w-1/3 max-xl:w-1/2 max-sm:w-full  ">
        <form onSubmit={handleSubmit(loginSubmit)}>
          <Input
            label="email"
            labelStyle=" capitalize font-semibold my-2"
            className="rounded-md"
            placeholder="what is your email"
            {...register("email", { required: true })}
          />
          <Input
            label="password"
            labelStyle=" capitalize font-semibold my-2"
            className="rounded-md"
            placeholder="what is your password"
            {...register("password", { required: true })}
          />
          <Button
            type="submit"
            className="bg-primary  text-white mt-6 rounded-md"
          >
            Log in
          </Button>
        </form>
        <a
          href="/forgot"
          className=" font-primary inline-block my-3 font-medium"
        >
          forgot your password?
        </a>
        <p className=" font-primary text-center font-medium">
          Log in from another method
        </p>
        <Button className="border-2 bg-white  border-border mt-4 rounded-md flex items-center justify-around">
          Log in by Google
          <FcGoogle />
        </Button>
      </div>
    </div>
  );
}

export default Login;
