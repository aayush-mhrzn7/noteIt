import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../tools/authSlice";
import auth from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteSession = async () => {
    await auth.logout();
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
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
