import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { motion } from "framer-motion";
import { SideProfile, Sunset } from "./Image";
import { Table } from "./Image";

const AboutMe = () => {
  const text = "MARK     DANIEL     REYES".split("");

  return (
    <div
      className="bg-black min-vh-100 d-flex flex-column position-relative overflow-hidden text-light"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Portfolio/minimalistic_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo med animasjon */}
      <header style={{ position: "absolute", top: "5%", left: "5%" }}>
        <motion.div
          className="position-absolute"
          style={{
            top: "5px",
            left: "5px",
            width: "calc(100% + 5px)",
            height: "calc(100% + 5px)",
            border: "2px solid white",
          }}
        ></motion.div>
        <motion.div
          className="text-light fw-bold text-uppercase position-relative"
          style={{
            padding: "10px 10px",
            fontSize: "14px",
            display: "flex",
            border: "2px solid white",
            backgroundColor: "black",
          }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {text.map((char, index) => (
            <motion.span
              key={index}
              style={{ marginRight: "1.5px", fontFamily: "Helvetica" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </header>

      {/* Navigasjonsmeny */}
      <nav
        style={{
          position: "absolute",
          top: "6%",
          right: "50%",
          fontFamily: "Helvetica",
          fontWeight: "lighter",
          fontSize: "0.9rem",
        }}
      >
        <ul className="nav">
          <li className="nav-item">
            <Link className="text-light nav-link" to="/home">
              HJEM
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-light nav-link" to="/aboutme">
              OM MEG
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-light nav-link" to="/work">
              ARBEID
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-light nav-link" to="/experience">
              ERFARING
            </Link>
          </li>
        </ul>
        <div style={{ position: "absolute", top: "-20%", right: "-185%" }}>
          <Link
            to="/contact"
            className="btn text-center text-white px-4"
            style={{
              borderRadius: "0px",
              fontWeight: "lighter",
              fontSize: "0.9rem",
              border: "1px solid rgb(255, 255, 255)",
              padding: "15px 20px",
            }}
          >
            TA KONTAKT
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AboutMe;
