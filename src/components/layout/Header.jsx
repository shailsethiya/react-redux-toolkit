import React, { useContext, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "../../context/Theme.context";
import { authSelector, logout } from "../../store/api/auth";

export default function Header() {
  const { theme, themeToggler, THEMES } = useContext(ThemeContext);
  const { token } = useSelector(authSelector, shallowEqual);
  const [extraMenu, showExtraMenu] = useState(false);
  const dispatch = useDispatch();

  const onLogout = () => {
    showExtraMenu(false);
    dispatch(logout());
  };

  return (
    <header>
      <Navbar expand="md">
        <Container fluid>
          <Navbar.Brand href="#">React Redux Toolkit</Navbar.Brand>
          <NavLink to="/todo" className="mr-2" style={{ margin: "0 10px" }}>
            Todo
          </NavLink>
          <NavLink to="/user" className="ml-2" style={{ margin: "0 10px" }}>
            User
          </NavLink>
          {!token && (
            <NavLink to="/login" className="ml-2" style={{ margin: "0 10px" }}>
              Login
            </NavLink>
          )}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {theme === THEMES.LIGHT ? (
              <i className="cursor-pointer mr-1 rounded-circle py-1 px-2 bg-light">
                <FaMoon onClick={themeToggler} />
              </i>
            ) : (
              <i className="cursor-pointer mr-1 py-1 px-2 rounded-circle bg-dark">
                <FaSun onClick={themeToggler} />
              </i>
            )}
          </Navbar.Collapse>
          {token && (
            <div className="position-relative">
              <i className="mx-1" onClick={() => showExtraMenu(!extraMenu)}>
                <BsThreeDotsVertical />
              </i>
              {extraMenu && (
                <div className="extra-menu">
                  <span className="extra-menu-item">Profile</span>
                  <span className="extra-menu-item" onClick={onLogout}>
                    Logout
                  </span>
                </div>
              )}
            </div>
          )}
        </Container>
      </Navbar>
    </header>
  );
}
