import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };
  return (
    <div>
      <nav className={"navbar navbar-expand-lg bg-body-tertiary"}>
        <div className={"container-fluid"}>
          <Link to="/" className={"navbar-brand ms-5 "}>
            <img
              src="https://www.guvi.in/build/images/guvi-logo.e8ad68fbd8dc0a5fc2f7c4ffd580c54d.png"
              alt="GUVI"
              width="100"
              height="30"
            ></img>
          </Link>

          <button
            className={"navbar-toggler"}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div
            className={"collapse navbar-collapse"}
            id="navbarSupportedContent"
          >
            {user ? (
              <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                <li className={"nav-item"}>
                  <Link
                    to="/about"
                    className={"nav-link active"}
                    aria-current="page"
                  >
                    <button className={"btn btn-light me-3"}> About</button>
                  </Link>
                </li>
                <li className={"nav-item"}>
                  <Link
                    to="/product"
                    className={"nav-link active "}
                    aria-current="page"
                  >
                    <button className={"btn btn-light me-2"}> Courses</button>
                  </Link>
                </li>
                <li className={"nav-item"}>
                  <Link
                    to="/teams"
                    className={"nav-link active"}
                    aria-current="page"
                  >
                    <button className={"btn btn-light me-3"}>
                      {" "}
                      Zen Classes{" "}
                    </button>
                  </Link>
                </li>
                <div className="nav">

            

                <li className="listItem ">
                  <img
                    src={user.photos[0].value}
                    alt=""
                    className={"avatar me-2 mt-3"}
                  />
                </li>
                <li className="listItem mt-3">{user.displayName}</li>
                </div>

                <li>
                  <Link
                    to="/"
                    className={"nav-link active ms-auto"}
                    aria-current="page"
                  >
                    <button className={"btn btn-light "} onClick={logout}>
                      Log Out
                    </button>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className={"navbar-nav me-0 mb-2 mb-lg-0 "}>
                <li>
                  <Link
                    to="/login"
                    className={"nav-link active ms-auto"}
                    aria-current="page"
                  >
                    <button className={"btn btn-light "}>
                      Log In
                    </button>
                  </Link>
                </li>
                {/* <li className={"nav-item nav"}>
                  <Link
                    to="/login"
                    className={"nav-link active "}
                    aria-current="page"
                  >
                    Login
                  </Link>
                </li> */}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
