import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../appwrite/auth";

function Verify() {
  const navigate = useNavigate();
  const urlParam = new URLSearchParams(window.location.search);
  const userId = urlParam.get("userId");
  const secret = urlParam.get("secret");
  console.log(userId, secret);
  const emailVerification = async () => {
    try {
      await auth.updateVerify(userId, secret);
      navigate("/all-posts");
    } catch (error) {
      console.log(error);
    }
  };
  emailVerification();
  return <div></div>;
}

export default Verify;
