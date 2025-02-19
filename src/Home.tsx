import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Image from "./Image";
import { motion } from "framer-motion";
import { Autograf } from "./Image";
import Navbar from "./NavBar";

const Home = () => {
  const text = "MARK     DANIEL     REYES".split("");

  return (
    <div
      className="bg-black min-vh-100 d-flex flex-column position-relative overflow-hidden"
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
      <div>
        <Navbar />
      </div>

      {/* Hovedinnhold */}
      <div className="text-container">
        <p>
          Mark Daniel Reyes, 23 år.
          <span className="bold-text"> Bachelorgrad i Interaktivt Design </span>
          fra Høyskole Kristiania. Sterk interesse for UX/UI og webutvikling
          hvor jeg ser etter en mulighet hvor jeg kan videreutvikle mine
          ferdigheter og bidra til brukervennlige og innovative digitale
          løsninger.
        </p>
      </div>

      {/* Overskrift */}
      <div className="title-container">
        <h1 className="title-main">Min</h1>
        <h1 className="title-sub">Portefølje</h1>
      </div>

      {/* Bilde og autograf */}
      <div className="image-container">
        <Image />
        <Autograf />
      </div>

      {/* Stilendringer for responsivt design */}
      <style>
        {`
  /* Standardstil */
  .text-container {
    position: absolute;
    left: 5%;
    top: 75%;
    z-index: 2;
    text-align: left;
    width: 50%;
    font-family: "Proxima Nova";
    font-weight: lighter;
    font-size: 0.9rem;
    color: white;
  }

  .bold-text {
    font-weight: bold;
  }

  .title-container {
    position: absolute;
    left: 4%;
    top: 27%;
    z-index: 2;
    text-align: left;
  }

  .title-main {
    font-weight: 100;
    font-family: "neue-haas-grotesk-display", sans-serif;
    font-size: 12rem;
    color: white;
    line-height: 0.9;
  }

  .title-sub {
    font-weight: 100;
    font-family: "neue-haas-grotesk-display", sans-serif;
    opacity: 0.6;
    font-size: 12rem;
    color: white;
    line-height: 0.9;
  }

  .image-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .image-wrapper {
    filter: brightness(27%);
  }

  .responsive-image {
    width: 770px;
    position: absolute;
    right: 5%;
    top: -80px;
    z-index: 2;
  }

  .responsive-autograph {
    position: absolute;
    width: 250px;
    right: 5%;
    top: 450px;
    z-index: 3;
    opacity: 0.7;
  }

  /* RESPONSIVE DESIGN FOR MOBIL */
  @media (max-width: 440px) {
    .text-container {
      width: 90%;
      left: 7%;
      top: 35%;
      font-size: 0.9rem;
    }

    .title-container {
      left: 5%;
      top: 15%;
    }

    .title-main, .title-sub {
      font-size: 5rem;
    }

    .responsive-image {
      width: 115%;
      left: 70%;
      transform: translateX(-50%);
      top: 300px;
      z-index: 5;
    }

    .responsive-autograph {
      width: 150px;
      left: 5%;
      top: 80%;
    }
  }

    /* RESPONSIVE DESIGN FOR TABLETS */
  @media (min-width: 441px) and (max-width: 1024px) {
    .text-container {
      width: 60%;
      left: 6%;
      top: 35%;
      font-size: 1.5rem;
    }

    .title-container {
      left: 5%;
      top: 15%;
    }

    .title-main, .title-sub {
      font-size: 8rem;
    }

    .responsive-image {
      width: 1000px;
      right: -30%;
      top: 50px;
    }

    .responsive-autograph {
      width: 300px;
      left: 5%;
      top: 70%;
    }
  }




  `}
      </style>
    </div>
  );
};

export default Home;
