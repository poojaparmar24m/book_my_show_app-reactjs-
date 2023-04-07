import React from "react";
import { BiMenu, BiChevronRight, BiCaretDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "../../css/Style.css";

const NavbarSm = () => {
  return (
    <>
      <div className="flex items-center justify-between p-2 mx-2 w-full ">
        <div className="text-white">
          <h1 className="text-xl font-bold py-0.5">It All Starts Here!</h1>
          <span className="text-sm flex text-gray-400 items-center cursor-pointer ">
            Ahemdabad <BiChevronRight />
          </span>
        </div>
        <div className="flex text-white items-center gap-3">
          <button className="rounded-lg text-white text-sm bg-red-500 p-1.5 cursor-pointer">
            Use App
          </button>
          <div className=" cursor-pointer text-xl  py-1 ">
            <BsSearch />
          </div>
        </div>
      </div>
    </>
  );
};

const NavbarMd = () => {
  return (
    <>
      <div className="flex gap-3 w-full">
        <div className="pl-3">
          <img
            src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png"
            alt="Book_my_show_logo"
            className="bg-transparent"
            style={{ height: "50px", width: "130px" }}
          />
        </div>
        <div className="flex items-center justify-center w-96 gap-3 h-10 p-1 pl-2 m-2 bg-white rounded-md">
          <label>
            <BsSearch className="text-slate-700" />
          </label>
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search For movies,Events, Plays And activites..."
          ></input>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="hover:text-white text-gray-400">Ahemdabad</h3>
          <BiCaretDown className="text-white" />
        </div>
        <div className="flex items-center">
          <button className="rounded-md text-white text-sm bg-red-500 p-1 px-3.5 cursor-pointer">
            Sign in
          </button>
        </div>
        <div className="flex items-center">
          <BiMenu className="text-white text-3xl" />
        </div>
      </div>
    </>
  );
};

const NavbarLg = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <div className="pl-32">
            <img
              src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png"
              alt="Book_my_show_logo"
              className="bg-transparent"
              style={{ height: "50px", width: "130px" }}
            />
          </div>
          <div
            className="flex items-center justify-center gap-3 h-10  pl-2 m-2 bg-white rounded-md"
            style={{ width: "550px" }}
          >
            <label>
              <BsSearch className="text-slate-700" />
            </label>
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search For movies,Events, Plays And activites"
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center">
            <h3 className="hover:text-white text-gray-400">Ahemdabad</h3>
            <BiCaretDown className="text-white" />
          </div>
          <div className="flex items-center">
            <button className="rounded-md text-white text-sm bg-red-500 p-1 px-3.5 cursor-pointer">
              Sign in
            </button>
          </div>
          <div className="flex items-center pr-32">
            <BiMenu className="text-white text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className=" w-full p-1" style={{ background: "rgb(51, 53, 69)" }}>
        <div className="sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden smNavbar">
          <NavbarSm />
        </div>
        <div className="lg:hidden md:flex sm:hidden xl:hidden 2xl:hidden MdNavbar">
          <NavbarMd />
        </div>
        <div className="sm:hidden md:hidden lg:flex xl:flex 2xl:flex lgNavbar">
          <NavbarLg />
        </div>
        {/* <NavbarLg /> */}
      </nav>
    </>
  );
};

export default Navbar;
