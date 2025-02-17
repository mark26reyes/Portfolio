import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { motion } from "framer-motion";

const Work = () => {
  const text = "MARK     DANIEL     REYES".split("");

  const projects = [
    {
      name: "MatSpar",
      img: "/Portfolio/matspar.png",
      description:
        "En app designet for studenter og familier som ønsker å planlegge måltider økonomisk og bærekraftig. Den hjelper med budsjettstyring, optimalisering av ingredienser og redusering av matsvinn.",
      url: "https://www.figma.com/design/ObFSRwwNMJGFbuidoVTQcM/Eksamen-Int.-Design-H23?node-id=420-3691&t=ZVwTNP9kWrQR4nbR-1",
    },
    {
      name: "OneHub",
      img: "/Portfolio/onehub.png",
      description:
        "En plattform som samler strømmetjenester og hjelper brukere med å oppdage nytt innhold. Med en rullbar trailer-feed inspirert av TikTok blir oppdagelsen av filmer og serier engasjerende og enkel.",
      url: "https://www.figma.com/design/p4JxnaeXfreYq8qZu8DCTJ/OneHub?node-id=0-1&t=F0JbR9q81tT1orOz-1",
    },
    {
      name: "Harmoni",
      img: "/Portfolio/harmoni.png",
      description:
        "En app som fungerer som en virtuell støttespiller for bedre psykisk helse. Den tilbyr ressurser og verktøy for å håndtere mental helse i hverdagen, som et supplement til profesjonell behandling.",
      url: "https://www.figma.com/design/bPH9Iw8WCGkhd2K7J13m7w/Design-Prosjekt?node-id=770-1244&t=E7nKcxjfZsVGWHIo-1",
    },
    {
      name: "Fristil",
      img: "/Portfolio/fristil.png",
      description:
        "Fristil er et plateselskap som lar russegrupper velge artister, produsenter og vokalister for å lage sin russelåt. Nettsiden, utviklet i WIX Studio, viser artister, tidligere verk og nyheter og generelt om Fristil.",
      url: "https://adrian43124.wixstudio.com/my-site-3",
    },
  ];

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
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-185%",
          }}
        >
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

      {/* Arbeid-seksjonen */}
      <section className="container" style={{ marginTop: "11%", zIndex: 2 }}>
        <h1
          className="text-white"
          style={{
            fontFamily: "Helvetica",
            fontSize: "5rem",
            fontWeight: "regular",
          }}
        >
          MITT ARBEID
        </h1>
        <p
          className="text-white-50"
          style={{ fontSize: "0.9rem", width: "75%" }}
        >
          Velkommen til mitt kreative univers! Jeg tror på design som ikke bare
          ser bra ut, men som også løser reelle utfordringer og skaper verdi for
          brukeren. Her kan du utforske hvordan idéer blir til gjennomtenkte og
          funksjonelle løsninger – fra smarte apper som forenkler hverdagen til
          digitale plattformer som kobler mennesker og teknologi på en intuitiv
          måte. Hvert prosjekt er et resultat av grundig research, strategisk
          design og en lidenskap for innovasjon. Utforsk mitt arbeid og se
          hvordan estetikk og funksjonalitet smelter sammen for å skape
          inspirerende digitale opplevelser.
        </p>

        {/* Prosjektkort */}
        <div className="row justify-content-center mt-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-3 col-sm-6 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div
                  className="p-4 d-flex align-items-center justify-content-center position-relative"
                  style={{
                    backgroundColor: "#101010",

                    minHeight: "300px",
                    overflow: "hidden",
                  }}
                >
                  {/* Bilde */}
                  <img
                    src={project.img}
                    alt={project.name}
                    className="img-fluid position-absolute"
                    style={{
                      maxWidth: "80%",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  />

                  {/* Hover-overlay med beskrivelse */}
                  <div
                    className="position-absolute d-flex align-items-center justify-content-center text-white text-center p-3"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      width: "100%",
                      height: "100%",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <p className="m-0">{project.description}</p>
                  </div>
                </div>
                <p className="mt-3 text-white">{project.name}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
