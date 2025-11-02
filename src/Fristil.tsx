import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./NavBar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Fristil = () => {
  const text = "MARK     DANIEL     REYES".split("");
  const navigate = useNavigate();

  return (
    <div
      className="bg-black min-vh-100 d-flex flex-column position-relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Portfolio/minimalistic_bg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // ← dette gjør bakgrunnen statisk
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden",
      }}
    >
      {/* Logo */}
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

      <Navbar />

      {/* Tilbake-knapp */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "175px",
          left: "4%",
          border: "none",
          background: "none",
          fontSize: "3rem",
          color: "white",
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        ↩︎
      </button>

      {/* Innhold */}
      <section
        className="container text-white"
        style={{
          paddingTop: "180px",
          paddingBottom: "60px",
        }}
      >
        <h1 className="display-4 fw-bold text-center">Fristil</h1>
        <p className="lead text-center mb-1 mt-4 text-white">
          Et bachelorprosjekt utviklet for Fristil Records AS – en moderne og
          visuell nettside skreddersydd for ungdom og norske artister.
        </p>

        <img
          src="/Portfolio/fristil.png"
          alt="Fristil skjermbilde"
          className="img-fluid rounded shadow w-25 justify-content-center d-block mx-auto"
        />

        <h3 className="mt-5">Kort om prosjektet</h3>
        <p style={{ fontWeight: "lighter" }}>
          Fristil er et bachelorprosjekt i samarbeid med Fristil Records AS.
          Oppgaven går ut på å utvikle en moderne, engasjerende nettside som
          fungerer som et digitalt showcase – ikke en salgstrakt. Nettsiden skal
          presentere artistene, vise frem spillelister og synliggjøre selskapets
          identitet overfor ungdom i alderen 16–19 år.
        </p>

        <h3 className="mt-4">Designprosess</h3>
        <ul>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 1:</strong> Spørreundersøkelse med målgruppen og
            innsiktsanalyse
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 2:</strong> Wireframes og visuell prototype i Figma
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 3:</strong> MVP-utvikling i Wix Studio
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 4:</strong> Brukertesting og iterativ forbedring av
            navigasjon og layout
          </li>
        </ul>

        <h3 className="mt-4">Metodikk og verktøy</h3>
        <p style={{ fontWeight: "lighter" }}>
          Vi benyttet Lean UX og Kanban som rammeverk. Figma ble brukt til
          design, mens Wix Studio ble valgt som publiseringsverktøy for at
          Fristil enkelt kan videreutvikle løsningen selv. Plattformen er
          optimalisert for mobil, SEO og fremtidig fleksibilitet.
        </p>

        <h3 className="mt-4">Viktige lærdommer</h3>
        <ul>
          <li style={{ fontWeight: "lighter" }}>
            Nettsiden bør ikke konkurrere med sosiale medier, men støtte
            merkevarebygging
          </li>
          <li style={{ fontWeight: "lighter" }}>
            Mobilvennlighet og visuell appell er avgjørende for målgruppen
          </li>
          <li style={{ fontWeight: "lighter" }}>
            Wix Studio gir lav teknisk terskel for kunden og rask implementering
            for oss
          </li>
        </ul>

        <a
          href="https://www.fristilrecords.no/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light mt-4"
        >
          Besøk nettsiden!
        </a>
        <br />
        {/* <a
          href="/Portfolio/public/Gruppe38-2025-Fristil Records AS.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light mt-4"
        >
          Les full rapport (PDF)
        </a> */}
      </section>
      <style>
        {`
    .back-button {
      position: absolute;
      top: 100px;
      left: 20px;
      border: none;
      background: none;
      font-size: 2.5rem;
      color: white;
      cursor: pointer;
      transition: transform 0.2s ease;
      z-index: 999;
    }

    .back-button:hover {
      transform: scale(1.2);
    }

    @media (max-width: 576px) {
      .back-button {
        font-size: 1.8rem;
        top: 80px;
        left: 15px;
      }
    }
  `}
      </style>
    </div>
  );
};
export default Fristil;
