import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { motion } from "framer-motion";
import Navbar from "./NavBar";

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
      <div>
        <Navbar />
      </div>

      <div className="container experience-content">
        <h1 className="experience-title">ERFARING</h1>

        <div className="row">
          {/* Erfaringsseksjon */}
          <div className="col-md-6">
            <p className="experience-text">
              Gjennom tre år har jeg utviklet ferdigheter innen webutvikling,
              interaksjonsdesign og brukertesting. Jeg har jobbet med HTML, CSS,
              React, JavaScript og TypeScript for å skape dynamiske og
              brukervennlige løsninger. Design og brukeropplevelse har vært en
              stor del av mitt arbeid, der jeg har brukt verktøy som Figma og
              Adobe Illustrator for å skape intuitive grensesnitt. I tillegg har
              jeg lært viktige designprinsipper og gjennomført brukertesting for
              å sikre at løsningene fungerer optimalt for brukerne.
            </p>
            <h4 className="certificate-title">SERTIFIKATER</h4>

            <div className="certificates">
              <img
                src="/Portfolio/htmlcss_certificate.png"
                alt="HTML & CSS Certificate"
              />
              <img
                src="/Portfolio/react_certificate.png"
                alt="React Certificate"
              />
            </div>
          </div>

          {/* Ferdighetsseksjon */}
          <div className="col-md-6 skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="d-flex align-items-center mb-1">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="skill-logo"
                  />
                  <span>{skill.name}</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
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

      {/* RESPONSIV STYLING */}
      <style>
        {`
  /* STANDARD DESKTOP DESIGN (BEHOLDER ORIGINALEN) */
  .experience-content {
    text-align: left;
    width: 100%;
    margin-top: 18%;
  }

  .experience-title {
    font-size: 5rem;
    top: 20%;
    left: 19%;
    position: absolute;
    transform: translateX(-50%);
    font-family: Helvetica;
  }

  .experience-text {
    font-size: 1rem;
    width: 98%;
    font-weight: lighter;
    margin-bottom: 50px;
    font-family: Proxima Nova;
  }

  .certificates {
    display: flex;
    gap: 30px;
  }

  .certificates img {
    width: 175px;
  }

  .skill-item {
    margin-bottom: 30px;
  }

  .skill-logo {
    width: 30px;
    margin-right: 10px;
  }

  .progress {
    height: 8px;
  }

  /* MOBILVERSJON (max 440px) */
  @media (max-width: 440px) {
    .experience-content {
      text-align: center;
      width: 90%;
      margin-top: 50%;
    }

    .experience-title {
      font-size: 4rem;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
    }

    .experience-text {
      font-size: 1rem;
      text-align: center;
      width: 100%;
    }

    .skills-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      margin-top: 20px;
    }

    .skill-item {
      width: 100%;
      text-align: left;
    }

    .progress {
      height: 6px;
      width: 100%;
    }

    .certificates {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
    }

    .certificate-title {
      font-size: 2rem;
      margin-top: 50px;
    }

    .certificates img {
      width: 80%;
      margin-bottom: 15px;
    }
  }

  /* TABLETVERSJON (441px - 1024px) */
  @media (min-width: 441px) and (max-width: 1024px) {
    .experience-title {
      font-size: 4rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .skills-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-top: 25px;
    }

    .certificates {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 40px;
    }

    .certificates img {
      width: 45%;
    }
  }
  `}
      </style>
    </div>
  );
};

export default Experience;
