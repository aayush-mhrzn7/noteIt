import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
/* import mockup from "../assets/mockup.png"; */

function Home() {
  const navigate = useNavigate();
  const active = useSelector((state) => state.auth.status);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className=" text-center">
        <div className="">
          <h1 className="text-5xl font-semibold font-primary mb-3 max-sm:text-3xl">
            You're Brain's Backup
          </h1>
          <p className="text-2xl max-sm:text-xl">
            <span className="inline-block font-semibold mr-1 ">NoteIT: </span>
            Think it,Note it, Get Note it now
          </p>
          {active ? null : (
            <button
              className="my-4 bg-primary text-white py-3 px-14 rounded-md font-semibold"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          )}
        </div>
      </div>
      <div>{/* add image here mmockups */}</div>
    </div>
  );
}

export default Home;
