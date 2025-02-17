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
            <Link className="text-light nav-link" to="/">
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

      {/* OM MEG Overskrift */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "16.5%",
          transform: "translateX(-50%)",
          textAlign: "left",
        }}
      >
        {/* Tekst med skygge */}
        <h1
          style={{
            fontSize: "5rem",
            fontWeight: "regular",
            fontFamily: "Helvetica",
          }}
        >
          OM MEG
        </h1>
      </div>

      {/* Tekstblokk */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "27.5%",
          width: "45%",
          transform: "translateX(-50%)",
          fontSize: "1rem",
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
          right: "23%",
          top: "21%",
          padding: "10px",
          backgroundColor: "white",
          zIndex: 2,
        }}
      >
        <SideProfile />
        <p
          className="text-dark mt-2 mb-0"
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
          top: "15%",
          filter: "grayscale(100%) brightness(30%)", // Gjør bildet mørkere
          zIndex: 1,
        }}
      >
        <Table />
      </div>
      <div
        className="position-absolute"
        style={{
          right: "4%",
          top: "45%",
          filter: "grayscale(100%) brightness(30%)",
        }}
      >
        <Sunset />
      </div>
    </div>
  );
};

export default AboutMe;
