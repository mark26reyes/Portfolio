import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Image from "./Image";
import { motion } from "framer-motion";
import { Autograf } from "./Image";

const Home = () => {
  const text = "MARK     DANIEL     REYES".split("");

  return (
    <div className="bg-black min-vh-100 d-flex flex-column position-relative">
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
          right: "4%",
          fontFamily: "Helvetica",
          fontWeight: "lighter",
          fontSize: "0.9rem",
        }}
      >
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
          <li>
            {" "}
            <a
              className="btn text-black px-4"
              href="#"
              style={{
                borderRadius: "0px",
                fontWeight: "regular",
                fontSize: "0.9rem",
                backgroundColor: "rgb(255, 135, 0)",
              }}
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
          top: "45%",
          left: "43%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "350px",
          backgroundColor: "rgb(255, 135, 0)",
          borderRadius: "40%",
          rotate: "12deg",
          zIndex: 0,
        }}
      ></div>

      {/* Hovedinnhold */}
      <div
        className="position-absolute"
        style={{
          left: "5.5%",
          top: "28%",
          zIndex: 2,
          textAlign: "left",
          width: "17%",
          fontFamily: "Helvetica",
          fontWeight: "lighter",
          fontSize: "0.9rem",
          color: "white",
        }}
      >
        <p>
          Mark Daniel Reyes, 23 år.
          <span style={{ fontWeight: "Bold" }}>
            {" "}
            Bachelorgrad i Interaktivt Design{" "}
          </span>
          fra Høyskole Kristiania.
        </p>
      </div>
      <div
        className="position-absolute"
        style={{ left: "13.5%", top: "66%", zIndex: 2, textAlign: "left" }}
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
            className="text-white d-block position-relative"
            style={{
              fontWeight: "1000",
              left: "0.7%",
            }}
          >
            MIN
          </span>
          <span
            className="text-white"
            style={{
              fontSize: "6rem",
              fontWeight: "bold",
              fontFamily: "Helvetica",
            }}
          >
            PORTE
          </span>
          <span
            className="text-white opacity-50"
            style={{
              fontSize: "6rem",
              fontWeight: "bold",
              fontFamily: "Helvetica",
            }}
          >
            FØLJE
          </span>
        </h1>
      </div>

      {/* Bilde og autograf */}
      <div
        className="position-absolute"
        style={{
          left: "50%",
          top: "13%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <Image />
        <Autograf />
      </div>

      {/* Om Meg-knapp */}
      <div
        className="position-absolute"
        style={{ bottom: "5%", right: "4%", zIndex: 3 }}
      >
        <a
          className="text-light"
          href="#"
          style={{
            fontFamily: "Helvetica",
            fontWeight: "regular",
            display: "inline-block",
            color: "white",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "1.6rem", color: "rgb(255, 135, 0)" }}>
            [
          </span>
          <span style={{ padding: "25px" }}>OM MEG</span>
          <span style={{ fontSize: "1.6rem", color: "rgb(255, 135, 0)" }}>
            ]
          </span>
        </a>
      </div>
    </div>
  );
};

export default Home;
