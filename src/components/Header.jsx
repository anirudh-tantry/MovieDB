import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "boxicons";
import Search from "./Search";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Shows",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const active = headerNav.findIndex((i) => i.path === pathname);

  const screenWidth = window.innerWidth;

  const header =
    screenWidth >= 700 ? (
      <DesktopHeader active={active} />
    ) : (
      <MobileHeader active={active} />
    );

  return header;
};

const DesktopHeader = ({ active }) => {
  return (
    <header className="header">
      <div className="left">
        <Link to="/">
          <h2>
            MovieDB<span>.</span>
          </h2>
        </Link>
      </div>
      <ul className="center">
        {headerNav.map((nav, i) => (
          <li key={i}>
            <Link to={nav.path} className={i === active ? "nav-active" : ""}>
              {nav.display}
            </Link>
          </li>
        ))}
      </ul>
      <div className="right">
        <Search />
      </div>
    </header>
  );
};

const MobileHeader = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onHamburgerClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="mobile-header">
        <div className="mob-nav-left">
          <Link to="/">
            <h2>
              MovieDB<span>.</span>
            </h2>
          </Link>
        </div>
        <div className="mob-nav-right">
          <box-icon
            color="white"
            name="menu-alt-left"
            onClick={onHamburgerClick}
          ></box-icon>
        </div>
      </header>
      <div className={isOpen ? "nav-slider active" : "nav-slider"}>
        <ul className="nav-list">
          {headerNav.map((nav, i) => (
            <li key={i} onClick={onHamburgerClick}>
              <Link to={nav.path} className={i === active ? "nav-active" : ""}>
                {nav.display}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Search />
        </div>
      </div>
    </>
  );
};

export default Header;
