import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../../tools/authSlice";
import { Toaster, toast } from "react-hot-toast";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const signupSubmit = async (data) => {
    const user = await auth.signup(data);
    toast.loading("creating new account", {
      duration: 2000,
      position: "top-center",
      icon: "👷‍♂️",
    });

    if (user) {
      const verify = await auth.verification();
      toast("mail sent", {
        duration: 2000,
        position: "top-center",
      });
      if (verify) {
        toast("user verified", {
          duration: 2000,
          position: "top-center",
          icon: "✅",
        });
        dispatch(login(user));
        navigate("/all-notes");
      }
    }
  };
  const authGoogle = () => {
    const signed = auth.login("google").then((res) => {
      if (signed) dispatch(login(res));
      navigate("/all-notes");
    });
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center max-sm:px-10 ">
      <h1 className="text-3xl font-semibold font-primary ">Join us !!</h1>
      <div className="w-1/3 max-xl:w-1/2 max-sm:w-full  ">
        <Toaster
          position="top-center"
          gutter={8}
          toastOptions={{
            className: "mt-20",
            style: {
              background: "white",
              color: "black",
            },
          }}
        />
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
            type="email"
            labelStyle=" capitalize font-semibold my-2  "
            className="rounded-md lowercase"
            placeholder="what is your email"
            {...register("email", { required: true })}
          />
          <Input
            label="password"
            type="password"
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
        <Button
          className=" bg-white border-border mt-4 rounded-md flex items-center justify-around"
          onClick={() => {
            authGoogle();
          }}
        >
          Log in by Google
          <FcGoogle />
        </Button>
      </div>
    </div>
  );
}

export default Signup;
