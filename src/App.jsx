import { useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import auth from "../appwrite/auth";
import { login, logout } from "../tools/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth
      .getUser()
      .then((user) => {
        if (user) {
          console.log("User is logged in");
          dispatch(login(user));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
