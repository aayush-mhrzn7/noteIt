import React from "react";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className=" text-center">
        <div>
          <h1 className="text-5xl font-semibold font-primary mb-3 max-sm:text-3xl">
            {" "}
            You're Brain's Backup{" "}
          </h1>
          <p className="text-2xl max-sm:text-xl">
            <span className="inline-block font-semibold mr-1 ">NoteIT: </span>
            Think it,Note it, Get Note it now
          </p>
          <button className="my-4 bg-primary text-white py-3 px-14 rounded-md font-semibold">
            Signup
          </button>
        </div>
      </div>
      <div>
        {/* add image here mmockups */}
        {/* <img
          src="https://img.freepik.com/premium-vector/laptop-smartphone-mockup-with-blank-screen-isolated-transparent-background-laptop-phone-vector-template-realistic-mobile-phone-mockup-screen-device-mockup-digital-device-cncept-eps-10_564974-282.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Home;
