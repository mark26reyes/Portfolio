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
        backgroundImage: "url('/Portfolio/sky.png')",
        backgroundSize: "cover",
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

      {/* UX/UI Overskrift */}
      <div
        style={{
          position: "absolute",
          top: "13%",
          left: "45%",
          transform: "translateX(-50%)",
          textAlign: "left",
          fontFamily: "Helvetica",
        }}
      >
        <h1 style={{ fontSize: "5rem", fontWeight: "regular", opacity: 0.7 }}>
          UX/UI
        </h1>
      </div>

      {/* Tekstblokk */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "53%",
          width: "30%",
          transform: "translateX(-50%)",
          fontSize: "0.9rem",
          lineHeight: "1.5",
          fontFamily: "Helvetica",
          fontWeight: "lighter",
        }}
      >
        <p>
          Mitt navn er <strong>Mark Daniel Reyes</strong>, og jeg er en 23 år
          gammel UX/UI-designer med en bachelorgrad i Interaktivt Design fra
          Høyskolen Kristiania. Jeg har en lidenskap for å skape intuitive og
          estetisk tiltalende digitale opplevelser som kombinerer funksjonalitet
          og design.
        </p>
        <p>
          Gjennom studiene mine har jeg fått en solid forståelse for
          brukeropplevelse, interaksjonsdesign og visuell kommunikasjon. Jeg har
          erfaring med verktøy som Figma, Adobe XD og andre designprogrammer, og
          jeg jobber alltid med et brukerfokusert tankesett for å skape
          løsninger som er både innovative og effektive.
        </p>
        <p>
          I tillegg til UX/UI-design har jeg en sterk interesse for webutvikling
          og ønsker å utvikle meg videre innen dette feltet. Jeg har erfaring
          med HTML, CSS og JavaScript og bygger opp ferdighetene mine innenfor
          moderne rammeverk som React.
        </p>
        <p>
          Jeg er nysgjerrig av natur og drives av å lære nye teknologier og
          designmetoder for å kunne utvikle meg videre som både designer og
          utvikler. Med en sterk interesse for designpsykologi og brukeradferd,
          streber jeg etter å skape løsninger som ikke bare ser bra ut, men som
          også fungerer sømløst for brukeren.
        </p>
      </div>

      {/* Profilbilde */}
      <div
        className="position-absolute"
        style={{
          left: "13%",
          top: "22%",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <SideProfile />
        <p
          className="text-dark mt-2"
          style={{
            fontWeight: "regular",
            fontSize: "1.5rem",
            fontFamily: "Helvetica",
          }}
        >
          Mark Daniel Reyes
        </p>
      </div>

      {/* Svart-hvitt bilde til høyre */}
      <div
        className="position-absolute"
        style={{
          right: "6%",
          top: "32%",
          opacity: 0.2,
          filter: "grayscale(100%)",
        }}
      >
        <Table />
      </div>
      <div
        className="position-absolute"
        style={{
          left: "-12%",
          top: "28%",
          opacity: 0.2,
          filter: "grayscale(100%)",
        }}
      >
        <Sunset />
      </div>
    </div>
  );
};

export default AboutMe;
