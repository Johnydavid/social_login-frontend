import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.reload();
  };
  const handleClick = () => {
    if (localStorage.key) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };
  const value = window.localStorage.getItem("name");

  return (
    <div>
      <nav className={"navbar navbar-expand-lg bg-body-tertiary"}>
        <div className={"container-fluid"}>
          <div className={"navbar-brand ms-5"}>
            <img
              src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
              alt="Stack Overflow"
              width="150"
              height="30"
              onClick={() => handleClick()}
              ></img>
          </div>

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
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
              <li className={"nav-item"}>
                <Link
                  to="/home"
                  className={"nav-link active"}
                  aria-current="page"
                >
               <button className={"btn btn-light me-2"}> Home</button>
                </Link>
              </li>

              <li className={"nav-item"}>
                <Link
                  to="/question"
                  className={"nav-link active"}
                  aria-current="page"
                >
                <button className={"btn btn-light me-2"}> Questions</button>
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link
                  to="/users"
                  className={"nav-link active"}
                  aria-current="page"
                >
             <button className={"btn btn-light me-2"}> Users</button>
                </Link>
              </li>
            </ul>
            <form className={"d-flex  w-50"} role="search">            
              <input
                className={"form-control me-5  w-100"}
                type="search"
                placeholder="Search"
                aria-label="Search"
                required
              ></input>
            </form>
            <div
              style={{
                color: "yellow",
                backgroundColor: "brown",
                borderRadius: "10%",
                width: "10%",
                textAlign: "center",
              }}
            >
              <h4>{value}</h4>
            </div>

            <div>
              <Link to="/logout">
                <button
                  className={"btn btn-danger ms-4 me-3"}
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Logout;