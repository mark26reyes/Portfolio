// src/pages/MatSpar.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./NavBar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MatSpar = () => {
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
        fontFamily: "Helvetica",
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

      {/* Navigasjon */}
      <Navbar />

      {/* Tilbake-knapp uten bakgrunn, kun ikon */}
      <button
        onClick={() => navigate(-1)}
        className="back-button position-absolute"
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
        <h1 className="display-4 fw-bold text-center">MatSpar</h1>
        <p className="lead text-center mb-5 mt-4 text-white">
          En app for smart matplanlegging, budsjett og bærekraft.
        </p>

        <img
          src="/Portfolio/matspar.png"
          alt="MatSpar skjermbilde"
          className="img-fluid rounded shadow w-25 justify-content-center d-block mx-auto"
        />

        <h3 className="mt-4">Kort om prosjektet</h3>
        <p style={{ fontWeight: "lighter" }}>
          MatSpar ble utviklet som et gruppeprosjekt, med mål om å lage en app
          for studenter og familier som ønsker bedre kontroll over matbudsjettet
          og å redusere matsvinn. Jeg jobbet spesielt med innsiktsarbeid,
          struktur og prototyping i Figma.
        </p>

        <h3 className="mt-4">Designprosess</h3>
        <ul>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 1:</strong> Innsikt via spørreundersøkelser, intervjuer
            og konkurrentanalyse.
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 2:</strong> Idégenerering og low-fidelity skisser.
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 3:</strong> Iterativ prototyping og interaksjonsdesign
            i Figma.
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 4:</strong> Brukertesting og forbedring basert på reell
            feedback.
          </li>
        </ul>

        <h3 className="mt-4">Metodikk og verktøy</h3>
        <p style={{ fontWeight: "lighter" }}>
          Vi brukte Lean UX som metode, med fokus på hypotesedrevne
          beslutninger, rask prototyping og kontinuerlig iterasjon. Alt design
          ble laget i Figma, og innsikt ble samlet inn gjennom fysiske
          spørreundersøkelser.
        </p>

        <h3 className="mt-4">Viktige lærdommer</h3>
        <ul>
          <li style={{ fontWeight: "lighter" }}>
            Viktigheten av tidlig problemforståelse og innsikt.
          </li>
          <li style={{ fontWeight: "lighter" }}>
            Iterasjon er nøkkelen til god brukeropplevelse.
          </li>
          <li style={{ fontWeight: "lighter" }}>
            Samarbeid og kommunikasjon gir bedre designvalg.
          </li>
        </ul>

        <a
          href="https://www.figma.com/design/ObFSRwwNMJGFbuidoVTQcM/Eksamen-Int.-Design-H23?node-id=420-3691&t=ZVwTNP9kWrQR4nbR-1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light mt-4"
        >
          Se full prototype i Figma
        </a>
        <br />
        {/*  <a
          href="/Portfolio/public/DS3302-Eksamen-H23.pdf"
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

export default MatSpar;
