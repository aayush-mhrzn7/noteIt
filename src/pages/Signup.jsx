import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function Signup() {
  const { register, handleSubmit } = useForm();
  const signupSubmit = (data) => {};
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center max-sm:px-10 ">
      <h1 className="text-3xl font-semibold font-primary ">Join us !!</h1>
      <div className="w-1/3 max-xl:w-1/2 max-sm:w-full  ">
        <form onSubmit={handleSubmit(signupSubmit)}>
          <Input
            label="name"
            labelStyle=" capitalize font-semibold my-2 "
            className="rounded-md"
            placeholder="what is your name"
            {...register("name", { required: true })}
          />
          <Input
            label="email"
            labelStyle=" capitalize font-semibold my-2 "
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
            className="bg-primary  text-white mt-6  rounded-md"
          >
            Sign up
          </Button>
        </form>
        <p className="font-primary">
          Already have an account?
          <Link
            to="/login"
            className=" font-primary font-semibold my-3 inline-block"
          >
            Login
          </Link>
        </p>
        <p className=" font-primary text-center font-medium">
          Sign up from another method
        </p>
        <Button className=" bg-white border-border mt-4 rounded-md flex items-center justify-around">
          Log in by Google
          <FcGoogle />
        </Button>
      </div>
    </div>
  );
}

export default Signup;
