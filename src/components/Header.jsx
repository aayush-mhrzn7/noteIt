import React, { useState } from "react";
import { TfiAlignRight } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import logo from "../assets/logo.png";

import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      name: "About",
      slug: "/about",
      status: true,
    },
    {
      name: "Notes",
      slug: "/notes",
      status: true,
    },
    {
      name: "Todo",
      slug: "/todo",
      status: true,
    },
  ];
  return (
    <div>
      <header className="flex bg-white justify-between py-2 px-10 text-xl h-14 shadow-md items-center">
        <a href="/" className="font-semibold flex items-center">
          <img src={logo} width="50px" height="50px" />
          NoteIt
        </a>
        {console.log(open)}
        {/* <Link to="/">NoteIt</Link> */}
        <nav>
          <ul
            className={` items-end  ease-in-out ${
              open
                ? " flex-col mt-[128px] bg-white p-3 rounded-md shadow-md "
                : "flex"
            }`}
          >
            <li
              className="hidden cursor-pointer max-sm:flex justify-end  ease-in-out"
              onClick={() => setOpen(!open)}
            >
              {open ? <TfiClose /> : <TfiAlignRight />}
            </li>
            {navItems.map((item) =>
              item.status ? (
                <li
                  key={item.name}
                  className={`mx-5  cursor-pointer  hover:animate-bounce font-medium ${
                    open ? "max-sm:block p-2 mr-8   " : "max-sm:hidden"
                  }`}
                >
                  {item.name}
                </li>
              ) : null
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
