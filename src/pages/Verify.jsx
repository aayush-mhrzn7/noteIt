import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import auth from "../../appwrite/auth";

function Verify() {
  const navigate = useNavigate();
  const urlParam = useSearchParams(window.location.search);
  const userId = urlParam.get("userId");
  const secret = urlParam.get("secret");
  console.log(userId, secret);
  const emailVerification = async () => {
    await auth.updateVerify(userId, secret);
    navigate("/all-posts");
  };
  emailVerification();
  return <div></div>;
}

export default Verify;
