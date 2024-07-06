import React, { useState } from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import auth from "../../appwrite/auth";
import { login } from "../../tools/authSlice";
import { Toaster, toast } from "react-hot-toast";
function Login() {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const loginSubmit = async (data) => {
    const userData = await auth.login(data);
    if (userData) {
      const session = await auth.getUser();
      if (session) {
        console.log(userData);
        dispatch(login(session));
        toast("Logged back in", {
          duration: 2000,
          position: "top-center",
          icon: "👏",
        });
      }
      navigate("/all-notes");
    } else {
      toast.error("invalid credentials");
    }
  };
  const authGoogle = () => {
    const signed = auth.googleAuth();
    if (signed) {
      navigate("/all-posts");
    } else {
      navigate("/error");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center max-sm:px-10 bg-main ">
      <h1 className="text-3xl font-semibold font-primary">Welcome back !! </h1>
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
        ></Toaster>
        <form onSubmit={handleSubmit(loginSubmit)}>
          <Input
            label="email"
            labelStyle=" capitalize font-semibold my-2 "
            className="rounded-md lowercase"
            placeholder="what is your email"
            {...register("email", { required: true })}
          />
          <Input
            label="password"
            type={viewPassword ? "text" : "password"}
            labelStyle=" capitalize font-semibold my-2 "
            className="rounded-md "
            placeholder="what is your password"
            {...register("password", { required: true })}
          />
          <div className="flex items-center justify-end my-3">
            <label
              htmlFor="passcheck"
              className=" inline-block mx-4 font-semibold font-primary"
            >
              view password
            </label>
            <input
              type="checkbox"
              onChange={(e) => setViewPassword(!viewPassword)}
              id="passcheck"
            />
          </div>

          <Button
            type="submit"
            className="bg-primary  text-white mt-1 rounded-md"
          >
            Log in
          </Button>
        </form>
        <Link
          to="/forgot"
          className=" font-primary inline-block my-3 font-medium"
        >
          forgot your password?
        </Link>
        <p className=" font-primary text-center font-medium">
          Log in from another method
        </p>
        <Button
          className="border-2 bg-white  border-border mt-4 rounded-md flex items-center justify-around"
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

export default Login;
