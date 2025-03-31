import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./NavBar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Harmoni = () => {
  const text = "MARK     DANIEL     REYES".split("");
  const navigate = useNavigate();

  return (
    <div
      className="bg-black min-vh-100 d-flex flex-column position-relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Portfolio/minimalistic_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Helvetica",
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
        <h1 className="display-4 fw-bold text-center">Harmoni</h1>
        <p className="lead text-center mb-2 mt-4 text-white">
          En app for psykisk helse som tilbyr råd, støtte og verktøy for å
          håndtere hverdagen – designet med omtanke og trygghet.
        </p>

        <img
          src="/Portfolio/harmoni.png"
          alt="Harmoni skjermbilde"
          className="img-fluid rounded shadow w-25 justify-content-center d-block mx-auto"
        />

        <h3 className="mt-4">📌 Kort om prosjektet</h3>
        <p style={{ fontWeight: "lighter" }}>
          Harmoni ble utviklet som et høynivå-prototypeprosjekt med fokus på
          åpenhet rundt psykisk helse. Appen fungerer som en virtuell
          støttespiller og er tilpasset unge voksne med mildt til moderat
          psykisk ubehag. Jeg jobbet spesielt med design, innholdsstruktur og
          teststrategi.
        </p>

        <h3 className="mt-4">🧭 Designprosess</h3>
        <ul>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 1:</strong> Konseptutvikling og konkurrentanalyse
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 2:</strong> Miro-idémyldring og wireframes i Figma
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 3:</strong> Visuell prototyping med universell
            utforming i fokus
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 4:</strong> Brukertesting og iterasjon basert på
            feedback
          </li>
        </ul>

        <h3 className="mt-4">🔧 Metodikk og verktøy</h3>
        <p style={{ fontWeight: "lighter" }}>
          Vi benyttet Design Thinking og brukersentrert design med fokus på
          tilgjengelighet. Testing ble gjennomført med ulike brukerprofiler, og
          Figma ble brukt til prototyping. Designet ble justert i henhold til
          WCAG-retningslinjer og anbefalinger for universell utforming.
        </p>

        <h3 className="mt-4">🧠 Viktige lærdommer</h3>
        <ul>
          <li style={{ fontWeight: "lighter" }}>
            Skrollfunksjon må alltid forventes av brukeren
          </li>
          <li style={{ fontWeight: "lighter" }}>
            White space og visuell ro gir bedre opplevelse
          </li>
          <li style={{ fontWeight: "lighter" }}>
            Universell utforming forbedrer brukeropplevelse for alle
          </li>
          <li style={{ fontWeight: "lighter" }}>
            Støtte for “hjelp en venn” bør være lett tilgjengelig
          </li>
        </ul>

        <a
          href="https://www.figma.com/design/bPH9Iw8WCGkhd2K7J13m7w/Design-Prosjekt?node-id=770-1244&t=0SxEfQNqFoWZPHeq-1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light mt-4"
        >
          Se full prototype i Figma
        </a>
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

export default Harmoni;
