// src/pages/OneHub.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./NavBar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OneHub = () => {
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
        <h1 className="display-4 fw-bold text-center">OneHub</h1>
        <p className="lead text-center mb-5 mt-4 text-white">
          En app som samler strømmetjenester og gjør det enklere å oppdage nytt
          innhold – inspirert av TikTok og sosiale medier.
        </p>
        <img
          src="/Portfolio/onehub.png"
          alt="OneHub skjermbilde"
          className="img-fluid rounded shadow w-25 justify-content-center d-block mx-auto"
        />
        <h3 className="mt-4">Kort om prosjektet</h3>
        <p style={{ fontWeight: "lighter" }}>
          OneHub ble utviklet for å løse utfordringen med fragmenterte
          strømmetjenester. Målet var å skape én plattform der brukere enkelt
          kan oppdage filmer og serier, med personlig tilpasning og sosial
          deling. Jeg jobbet med design og prototypeutvikling i Figma.
        </p>
        <h3 className="mt-4">Designprosess</h3>
        <ul>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 1:</strong> Innsikt gjennom spørreundersøkelser og
            intervjuer med målgruppen.
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 2:</strong> Idéutvikling med fokus på algoritmisk
            trailer-feed og personlig tilpasning.
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 3:</strong> Prototyping av TikTok-lignende grensesnitt,
            først vertikalt – senere horisontalt for bedre tilpasning av
            videoformat.
          </li>
          <li style={{ fontWeight: "lighter" }}>
            <strong>Fase 4:</strong> Brukertesting og forbedringer basert på
            tilbakemeldinger og gjennomførbarhetsanalyse.
          </li>
        </ul>
        <h3 className="mt-4">Metodikk og verktøy</h3>
        <p style={{ fontWeight: "lighter" }}>
          Vi kombinerte Design Thinking (fra IDEO) med Lean UX. Design Thinking
          hjalp oss å identifisere brukerbehov, mens Lean UX ga oss raske
          iterasjoner med MVP-testing. Prototypen ble designet i Figma og testet
          med ekte brukere.
        </p>
        <h3 className="mt-4">Viktige lærdommer</h3>
        <ul>
          <li style={{ fontWeight: "lighter" }}>
            Brukere foretrekker horisontale trailere – bedre utnyttelse av
            skjermareal.
          </li>
          <li style={{ fontWeight: "lighter" }}>
            Sosiale delingsfunksjoner øker engasjement og oppdagelse.
          </li>
          <li style={{ fontWeight: "lighter" }}>
            Personlige anbefalinger og visuell enkelhet gir høyere
            brukeropplevelse.
          </li>
        </ul>
        <a
          href="https://www.figma.com/design/p4JxnaeXfreYq8qZu8DCTJ/OneHub?node-id=0-1&t=KvNfpaKgDECucDZI-1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light mt-4"
        >
          Se full prototype i Figma
        </a>
        <br />
        {/* <a
          href="/Portfolio/public/Innovasjon og Prototyping Eksamen.pdf"
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

export default OneHub;
