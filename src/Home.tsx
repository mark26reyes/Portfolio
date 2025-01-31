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
          top: "5%",
          right: "5%",
          fontFamily: "Helvetica",
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
          filter: "blur(2px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      ></div>

      {/* Hovedinnhold */}
      <div
        className="position-absolute"
        style={{ left: "14%", top: "65%", zIndex: 2, textAlign: "left" }}
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
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              fontFamily: "Helvetica",
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
          top: "15%",
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
        style={{ bottom: "5%", right: "5%", zIndex: 3 }}
      >
        <a
          className="text-light"
          href="#"
          style={{
            fontFamily: "Helvetica",
          }}
        >
          [ OM MEG ]
        </a>
      </div>
    </div>
  );
};

export default Home;
