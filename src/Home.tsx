import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";
import Image from "./Image";
import { motion } from "framer-motion";
import { Autograf } from "./Image";

const Home = () => {
  const text = "MARK     DANIEL     REYES".split("");

  return (
    <div className="bg-black min-vh-100 d-flex flex-column position-relative overflow-hidden">
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
          zIndex: 9999, // Legg til denne
        }}
      >
        <ul className="nav">
          <li className="nav-item">
            <Link className="text-light nav-link" to="/Home">
              HJEM
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-light nav-link" to="/AboutMe">
              OM MEG
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-light nav-link" to="/Work">
              ARBEID
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-light nav-link" to="/Experience">
              ERFARING
            </Link>
          </li>
        </ul>
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-185%",
          }}
        >
          <a
            className="btn text-center text-white px-4"
            href="#"
            style={{
              borderRadius: "0px",
              fontWeight: "lighter",
              fontSize: "0.9rem",
              border: "1px solid rgb(255, 255, 255)",
              padding: "15px 20px",
            }}
          >
            TA KONTAKT
          </a>
        </div>
      </nav>

      {/* Hovedinnhold */}
      <div
        className="position-absolute"
        style={{
          left: "5%",
          top: "75%",
          zIndex: 2,
          textAlign: "left",
          width: "50%",
          fontFamily: "Helvetica",
          fontWeight: "lighter",
          fontSize: "0.9rem",
          color: "gray",
        }}
      >
        <p>
          Mark Daniel Reyes, 23 år.
          <span style={{ fontWeight: "Bold" }}>
            {" "}
            Bachelorgrad i Interaktivt Design{" "}
          </span>
          fra Høyskole Kristiania. Sterk interesse for UX/UI og webutvikling
          hvor jeg ser etter en mulighet hvor jeg kan videreutvikle mine
          ferdigheter og bidra til brukervennlige og innovative digitale
          løsninger.
        </p>
      </div>
      <div
        className="position-absolute"
        style={{ left: "4%", top: "27%", zIndex: 2, textAlign: "left" }}
      >
        <h1
          style={{
            lineHeight: "0.9",
          }}
        >
          <span
            className="text-white d-block position-relative"
            style={{
              fontSize: "12rem",
              fontWeight: "100",
              fontFamily: "neue-haas-grotesk-display, sans-serif",
            }}
          >
            Min
          </span>
          <span
            className="text-white"
            style={{
              fontSize: "12rem",
              fontWeight: "100",
              fontFamily: "neue-haas-grotesk-display, sans-serif",
              opacity: 0.6,
            }}
          >
            Portefølje
          </span>
        </h1>
      </div>

      {/* Bilde og autograf */}
      <div
        className="position-absolute"
        style={{
          left: "66%",
          top: "-11%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <Image />
        <Autograf />
      </div>

      {/* Om Meg-knapp 
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
      */}
    </div>
  );
};

export default Home;
