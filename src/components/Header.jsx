import React, { useState } from "react";
import { TfiAlignRight } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "./Logout";
function Header() {
  const [open, setOpen] = useState(false);
  const status = useSelector((state) => state.auth.status);
  const navItems = [
    {
      name: "About",
      slug: "/about",
      active: status,
    },
    {
      name: "Notes",
      slug: "/all-notes",
      active: status,
    },
    {
      name: "Favorites",
      slug: "/favorites",
      active: status,
    },
    {
      name: "Login",
      slug: "/login",
      active: !status,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !status,
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex bg-white justify-between py-2 px-10 text-xl h-14 shadow-md items-center z-20">
        <Link to="/" className="font-semibold font-primary flex items-center">
          <img src={logo} width="50px" height="50px" />
          NoteIt
        </Link>

        <nav>
          <ul
            className={` z-20 items-end  ease-in-out ${
              open
                ? " flex-col mt-[190px] z-50 bg-white p-3 rounded-md shadow-md "
                : "flex"
            }`}
          >
            <li
              className=" z-20 hidden cursor-pointer max-sm:flex justify-end  ease-in-out"
              onClick={() => setOpen(!open)}
            >
              {open ? <TfiClose /> : <TfiAlignRight />}
            </li>
            {navItems.map((item) =>
              item.active ? (
                <li
                  key={item.name}
                  onClick={() => navigate(`${item.slug}`)}
                  className={`mx-5 font-primary z-20  cursor-pointer  hover:underline underline-offset-8 font-medium transition-transform ${
                    open ? "max-sm:block p-2 mr-8   " : "max-sm:hidden"
                  }`}
                >
                  {item.name}
                </li>
              ) : null
            )}
            {status ? <Logout /> : null}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
