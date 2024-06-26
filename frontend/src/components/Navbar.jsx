/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-gradient navbar-dark text-white">
      <div className="container">
        <NavLink className="navbar-brand font-weight-bold" exact to="/">
          <h1 className="font-weight-bold">
            Academi<span className="text-orange">X</span>
          </h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item sd mr-3 font-weight-bold">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="active"
              >
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item mx-3 font-weight-bold">
              <NavLink
                className="nav-link"
                to="/courses"
                activeClassName="active"
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item mx-3 font-weight-bold">
              <NavLink
                className="nav-link"
                to="/resources"
                activeClassName="active"
              >
                Resources
              </NavLink>
            </li>
            <li className="nav-item mx-3 font-weight-bold">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
          </ul>

          <NavLink to="/signIn">
            <button
              className="btn btn-primary ml-auto btn-sm custom-nav-btn"
              type="button"
            >
              Sign in
            </button>
          </NavLink>

          <NavLink to="/signup">
            <button
              className="btn btn-primary ml-3 btn-sm custom-nav-btn"
              type="button"
            >
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
