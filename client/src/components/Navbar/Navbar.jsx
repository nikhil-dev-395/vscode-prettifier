import { UserIcon } from "hugeicons-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className=" pt-4 border-b border-slate-100">
        <nav className="text-white max-w-[1320px] flex items-center justify-between mx-auto  h-20 px-10  uppercase">
          <div className="flex gap-5">
            <img src="/vscodeLogo.svg" alt="vscode prettifier" width={25} />
            <h3 className="text-2xl font-mono uppercase">vscode prettifier</h3>
          </div>
          <ul className="flex gap-x-10 text-[16px] py-5 items-center">
            <li className="hover:text-yellow-400">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/user">
                <UserIcon />
              </Link>
            </li>

            {/* <li className="hover:bg-blue-200 cursor-pointer  bg-white text-black px-4 py-2 rounded-md">
              <button className=" cursor-pointer">logout</button>
            </li> */}

            <li className="hover:bg-blue-200   bg-white text-black px-4 py-2 rounded-md ">
              <button className=" cursor-pointer uppercase">sign in</button>
            </li>

            {/* <li className="hover:bg-blue-200 cursor-pointer  bg-white text-black px-4 py-2 rounded-md">
              <button className="cursor-pointer ">sign up</button>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
