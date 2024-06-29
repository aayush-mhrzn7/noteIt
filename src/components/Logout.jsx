import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../tools/authSlice";
import auth from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteSession = async () => {
    await auth.logout();
    dispatch(logout());
    toast("user logged out", {
      duration: 2000,
      position: "top-center",
      icon: "👋",
    });
    navigate("/login");
  };
  return (
    <div>
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
      <button
        className="font-primary font-semibold mx-5"
        onClick={() => {
          deleteSession();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
