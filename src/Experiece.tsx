import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { motion } from "framer-motion";

const Experience = () => {
  const text = "MARK     DANIEL     REYES".split("");

  const skills = [
    { name: "Figma", level: "100%", logo: "/Portfolio/figma.png" },
    { name: "UX (Brukertesting)", level: "80%", logo: "/Portfolio/ux.png" },
    { name: "HTML & CSS", level: "75%", logo: "/Portfolio/htmlcss.png" },
    { name: "React", level: "70%", logo: "/Portfolio/react.png" },
    { name: "JavaScript", level: "70%", logo: "/Portfolio/javascript.png" },
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
      <div className="container">
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "19%",
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
            ERFARING
          </h1>
        </div>
        <div className="row" style={{ marginTop: "20%" }}>
          {/* Erfaringsseksjon */}
          <div className="col-md-6">
            <p style={{ fontSize: "1rem", width: "90%" }}>
              Gjennom tre år har jeg utviklet ferdigheter innen webutvikling,
              interaksjonsdesign og brukertesting. Jeg har jobbet med HTML, CSS,
              React, JavaScript og TypeScript for å skape dynamiske og
              brukervennlige løsninger. Design og brukeropplevelse har vært en
              stor del av mitt arbeid, der jeg har brukt verktøy som Figma og
              Adobe Illustrator for å skape intuitive grensesnitt. I tillegg har
              jeg lært viktige designprinsipper og gjennomført brukertesting for
              å sikre at løsningene fungerer optimalt for brukerne.
            </p>
            <h4 className="mt-5">Sertifikater</h4>

            <img
              src="/Portfolio/htmlcss_certificate.png"
              alt="HTML & CSS Certificate"
              style={{ width: "175px", marginRight: "20px" }}
            />
            <img
              src="/Portfolio/react_certificate.png"
              alt="React Certificate"
              style={{ width: "200px" }}
            />
          </div>

          {/* Ferdighetsseksjon */}
          <div className="col-md-6">
            {skills.map((skill, index) => (
              <div key={index} className="mb-5">
                <div className="d-flex align-items-center mb-1">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{ width: "30px", marginRight: "10px" }}
                  />
                  <span>{skill.name}</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: skill.level }}
                    aria-valuenow={parseInt(skill.level)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
