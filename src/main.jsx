import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../tools/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Forgot from "./pages/Forgot.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import AllNotes from "./pages/AllNotes.jsx";
import Error from "./pages/Error.jsx";
import Verify from "./pages/Verify.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/all-notes",
        element: <AllNotes />,
      },
      {
        path: "/verify",
        element: <Verify />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
