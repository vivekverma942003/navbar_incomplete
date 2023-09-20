import React from "react";
import menuItems from "./MenuItems";
import "./Navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../Button";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <nav className="nav-items">
      <h1 className="nav-title">React js</h1>
      <div className="navbar-icon" onClick={handleClick}>
        {click ? (
          // <GiHamburgerMenu className="logo" />
          <AiOutlineClose className="logo" />
        ) : (
          <GiHamburgerMenu className="logo" />
        )}
      </div>
      <ul className={click ? "nav-links-active" : "nav-links1"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button> Sign Up</Button>
    </nav>
  );
}
export default Navbar;
