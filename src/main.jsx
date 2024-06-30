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
import AuthLayout from "./components/AuthLayout.jsx";
import Favorates from "./pages/Favorates.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/forgot",
        element: (
          <AuthLayout authentication={false}>
            <Forgot />
          </AuthLayout>
        ),
      },
      {
        path: "/change-password",
        element: (
          <AuthLayout authentication={false}>
            <ChangePassword />
          </AuthLayout>
        ),
      },
      {
        path: "/all-notes",
        element: (
          <AuthLayout>
            <AllNotes />
          </AuthLayout>
        ),
      },
      {
        path: "/favorates",
        element: (
          <AuthLayout>
            <Favorates />
          </AuthLayout>
        ),
      },
      {
        path: "/verify",
        element: (
          <AuthLayout authentication={false}>
            <Verify />
          </AuthLayout>
        ),
      },
      {
        path: "*",
        element: (
          <AuthLayout authentication={false}>
            <Error />
          </AuthLayout>
        ),
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
