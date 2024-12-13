import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoLogoSlack } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import "./index.css";

const Header = () => {
  const location = useLocation();
  const isAboutActive =
    location.pathname === "/" ? "active-link" : "normal-link";
  const isProductsActive =
    location.pathname === "/products" ? "active-link" : "normal-link";
  const isStoriesActive =
    location.pathname === "/stories" ? "active-link" : "normal-link";
  const isContactActive =
    location.pathname === "/contact" ? "active-link" : "normal-link";

  const onUser = () => {
    alert("Bugga Naresh Here..!\n THANK YOU FOR VIEWING MY PROJECT...");
  };

  return (
    <div className="nav-container">
      <nav>
        <ul className="header-list-container">
          <li>
            <Link className="nav-link">
              <IoLogoSlack size={50} className="mall-logo" />
            </Link>
          </li>
          <li className={`header-heading ${isAboutActive}`}>
            <Link to="/" className="nav-link">
              ABOUT
            </Link>
          </li>
          <li className={`header-heading ${isProductsActive}`}>
            <Link to="/products" className="nav-link">
              PRODUCTS
            </Link>
          </li>
          <li className={`header-heading ${isStoriesActive}`}>
            <Link to="/stories" className="nav-link">
              STORIES
            </Link>
          </li>
          <li className={`header-heading ${isContactActive}`}>
            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>
          </li>
          <li>
            <CiUser size={38} className="user-logo" onClick={onUser} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
