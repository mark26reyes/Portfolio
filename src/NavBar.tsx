import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <>
      {isMobile && (
        <button
          className="navbar-toggler position-absolute text-light"
          style={{
            top: "5%",
            right: "5%",
            zIndex: 10000,
            border: "none",
            background: "transparent",
          }}
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      )}

      {isMobile ? (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="position-fixed top-0 right-0 d-flex flex-column align-items-center text-center bg-black text-light"
          style={{
            width: menuOpen ? "100%" : "0%",
            height: "100vh",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          <ul
            className="nav flex-column mt-5"
            style={{ fontSize: "1.5rem", fontFamily: "Helvetica" }}
          >
            {["/", "/AboutMe", "/Work", "/Experience", "/Contact"].map(
              (path, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link"
                    to={path}
                    onClick={toggleMenu}
                    style={{
                      color: isActive(path) ? "darkgray" : "white",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "darkgray";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(path)) {
                        (e.target as HTMLElement).style.color = "white";
                      }
                    }}
                  >
                    {path === "/"
                      ? "HJEM"
                      : path === "/AboutMe"
                        ? "OM MEG"
                        : path === "/Work"
                          ? "ARBEID"
                          : path === "/Experience"
                            ? "ERFARING"
                            : "TA KONTAKT"}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </motion.nav>
      ) : (
        <nav
          className="position-absolute w-100 d-flex align-items-center justify-content-between px-5 text-light"
          style={{
            position: "absolute",
            top: "6%",
            left: "22%",
            fontWeight: "lighter",
            zIndex: "1050",
          }}
        >
          <div className="d-flex align-items-center">
            <ul
              className="nav"
              style={{ fontSize: "1rem", fontFamily: "Helvetica" }}
            >
              {["/", "/AboutMe", "/Work", "/Experience"].map((path, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link"
                    to={path}
                    style={
                      isActive(path)
                        ? { color: "darkgray" }
                        : { color: "white", transition: "color 0.3s ease" }
                    }
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "darkgray";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(path)) {
                        (e.target as HTMLElement).style.color = "white";
                      }
                    }}
                  >
                    {path === "/"
                      ? "HJEM"
                      : path === "/AboutMe"
                        ? "OM MEG"
                        : path === "/Work"
                          ? "ARBEID"
                          : "ERFARING"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link
              className="btn text-white px-4 nav-link"
              to="/Contact"
              style={{
                position: "absolute",
                borderRadius: "0px",
                fontWeight: "lighter",
                fontSize: "0.9rem",
                border: "1px solid rgb(255, 255, 255)",
                padding: "10px 15px",
                right: "27%",
                top: "2%",
                backgroundColor: isActive("/Contact")
                  ? "dimgray"
                  : "transparent",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "dimgray";
              }}
              onMouseLeave={(e) => {
                if (!isActive("/Contact")) {
                  (e.target as HTMLElement).style.backgroundColor =
                    "transparent";
                }
              }}
            >
              TA KONTAKT
            </Link>
          </div>
        </nav>
      )}

      {/* 🛠️ Fix for blå tekst i hamburgermenyen */}
      <style>
        {`
          /* Hindrer blå Bootstrap-farge */
          .nav-link {
            text-decoration: none !important;
          }

          /* Endrer farge ved hover */
          .nav-link:hover,
          .nav-link:focus,
          .nav-link:active {
            color: darkgray !important;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
