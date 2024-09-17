import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState("md:hidden");

  const menuClickHandler = () => {
    if (showMenu === "md:hidden") {
      setShowMenu("");
    } else {
      setShowMenu("md:hidden");
    }
  };
  // to check the path of the location
  const pathname = window.location.pathname;

  const menuItems = [
    { id: 1, title: "Home", key: "/" },
    { id: 2, title: "Projects", key: "/projects" },
    { id: 3, title: "Courses", key: "/courses" },
    { id: 4, title: "Contact", key: "/contact" },
  ];
  return (
    <div className="text-white font-merri fixed top-0 right-0 left-0 z-50">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg  ${
          showMenu === "" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between w-full items-center">
          <Link to="/">
            <h1 className="text-4xl font-semibold hover:text-blue-500 cursor-pointer">
              TAYO JAMES
            </h1>
          </Link>
          {/* this icon only displays on mobile view */}
          <FaBars
            onClick={menuClickHandler}
            className="xl:hidden 2xl:hidden lg:hidden md:flex cursor-pointer"
          />
          {/* end of the icon display */}
        </div>
        <div className="flex sm:hidden md:hidden">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                className={`list-none mx-5 p-1 ${
                  item.key === pathname && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={item.key}>{item.title}</Link>
              </li>
            );
          })}
        </div>
        {/* mobile/tablet view */}
        <div
          className={`md:flex flex-col items-start justify-start w-full  lg:hidden 2xl:hidden xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => {
            return (
              <nav key={item.id} className={`list-none w-full p-1 my-2 ${item.key === pathname && "bg-white text-black rounded-md"}`}>
                <Link to={item.key}><li>{item.title}</li></Link>
              </nav>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
