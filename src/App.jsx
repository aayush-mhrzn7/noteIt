import Header from "./components/Header";
import ChangePassword from "./pages/ChangePassword";
import Error from "./pages/Error";
import Forgot from "./pages/Forgot";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/*  <Header></Header>
      <main>
        <Outlet />
      </main> */}
      <Header></Header>
      <Home></Home>
      <Signup></Signup>
      <Login></Login>
      <ChangePassword></ChangePassword>
      <Forgot></Forgot>
      <Error></Error>
    </>
  );
}

export default App;
