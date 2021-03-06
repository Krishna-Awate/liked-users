import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "",
              backgroundColor: isActive ? "white" : "",
            };
          }}
          className="navbar-brand"
          to="/"
        >
          Home
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "",
                    backgroundColor: isActive ? "white" : "",
                  };
                }}
                className="nav-link"
                to="/liked"
              >
                Liked <span className="sr-only"></span>
              </NavLink>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
