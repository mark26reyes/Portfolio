import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Image from "./Image";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Home = () => {
  const text = "MARK DANIEL REYES".split("");

  return (
    <div className="bg-black min-vh-100 d-flex flex-column position-relative">
      {/* Logo med animasjon */}
      <header style={{ position: "absolute", top: "5%", left: "5%" }}>
        <motion.div
          className="border border-light p-2 text-light fw-bold text-uppercase"
          style={{ padding: "8px 16px", fontSize: "14px", display: "flex" }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {text.map((char, index) => (
            <motion.span
              key={index}
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
      <nav style={{ position: "absolute", top: "5%", right: "5%" }}>
        <ul className="nav">
          <li className="nav-item">
            <a className="text-light nav-link" href="#">
              HJEM
            </a>
          </li>
          <li className="nav-item">
            <a className="text-light nav-link" href="#">
              OM MEG
            </a>
          </li>
          <li className="nav-item">
            <a className="text-light nav-link" href="#">
              ARBEID
            </a>
          </li>
          <li className="nav-item">
            <a className="text-light nav-link" href="#">
              ERFARING
            </a>
          </li>
          <li className="nav-item">
            <a
              className="btn btn-light text-black px-4"
              href="#"
              style={{ borderRadius: "0px", fontWeight: "bold" }}
            >
              KONTAKT
            </a>
          </li>
        </ul>
      </nav>

      {/* Bakgrunnsdetalj */}
      <div
        className="position-absolute"
        style={{
          top: "39%",
          left: "46%",
          transform: "translate(-50%, -50%)",
          width: "320px",
          height: "420px",
          backgroundColor: "rgb(0, 247, 255)",
          filter: "blur(5px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      ></div>

      {/* Hovedinnhold */}
      <div
        className="position-absolute"
        style={{ left: "15%", top: "65%", zIndex: 2, textAlign: "left" }}
      >
        <h1
          className="text-light fw-bold"
          style={{
            fontSize: "4rem",
            textTransform: "uppercase",
            fontWeight: "900",
            lineHeight: "0.9",
          }}
        >
          <span
            className="text-white d-block"
            style={{ textShadow: "-4px 4px 4px rgba(190, 190, 190, 4)" }}
          >
            MIN
          </span>
          <span
            className="text-white"
            style={{ fontSize: "6rem", fontWeight: "bold" }}
          >
            PORTE
          </span>
          <span
            className="text-white opacity-50"
            style={{ fontSize: "6rem", fontWeight: "bold" }}
          >
            FØLJE
          </span>
        </h1>
      </div>

      <div
        className="position-absolute"
        style={{
          left: "50%",
          top: "15%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <Image />
      </div>
    </div>
  );
};

export default Home;
