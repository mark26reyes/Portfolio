import React, { useState } from "react";
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

  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null,
  );

  return (
    <div
      className="bg-black min-vh-100 d-flex flex-column position-relative overflow-hidden text-light content"
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
              {["/Portfolio/htmlcss_certificate.png"].map((cert, index) => (
                <motion.img
                  key={index}
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  className="certificate1"
                  onClick={() => setSelectedCertificate(cert)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
              {["/Portfolio/react_certificate.png"].map((cert, index) => (
                <motion.img
                  key={index}
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  className="certificate2"
                  onClick={() => setSelectedCertificate(cert)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
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

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <img
            src={selectedCertificate}
            alt="Selected Certificate"
            className="certificate-full"
          />
        </div>
      )}

      {/* RESPONSIV STYLING */}
      <style>
        {`
    /* STANDARD DESKTOP DESIGN */
  .experience-content {
    text-align: left;
    width: 100%;
    margin-top: 18%;
  }

  .experience-title {
    font-size: 5rem;
    top: 20%;
    left: 5vw; /* Bruker vw for å sikre at tittelen holder seg på plass */
    position: absolute;
    font-family: Helvetica;
  }

  .experience-text {
    font-size: 1rem;
    width: 40vw; /* Sikrer konsistent bredde */
    font-weight: lighter;
    margin-bottom: 50px;
    font-family: "Proxima Nova";
    position: absolute;
    top: 34%;
    left: 5vw; /* Justert for større skjermer */
  }

  .certificate-title {
  position: absolute;
    top: 60%;
    left: 5vw;
  }

  .certificates {
    display: flex;
    gap: 30px;
    position: absolute;
    top: 65%;
    left: 5vw;
  }

  .certificate1 {
    width: 190px;
    height: 200px
  }

  .certificate2 {
    width: 275px;
    height: 200px
  }

  .skills-container {
    position: absolute;
    top: 30.5%;
    right: 5vw; /* Justert for at ferdighetene holder seg på plass */
    width: 45vw; /* Sørger for at innholdet holder seg i riktig posisjon */
  }

  .skill-item {
    margin-bottom: 70px;
  }

  .skill-logo {
    width: 30px;
    margin-right: 10px;
  }

  .progress {
    height: 8px;
  }

  .certificate-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
          }
          .certificate-full {
            max-width: 80vw;
            max-height: 80vh;
            border-radius: 10px;
          }

  /* MOBILVERSJON (max 440px) */
  @media (max-width: 440px) {
    html, body {
      height: 100%;
      overflow-x: hidden; /* Hindrer horisontal scrolling */
      overflow-y: auto !important; /* Sikrer at hele siden kan scrolle */
      -webkit-overflow-scrolling: touch; /* Bedre scrolling på iOS */
      touch-action: manipulation; /* Forhindrer at scrollen stopper */
    }
    
    .content {
      margin-top: -40px;
    }

    .experience-content {
      text-align: center;
      width: 90%;
      margin-top: 50%;
      overflow: visible !important; /* Fjern egen scroll */
    }

    .experience-title {
      font-size: 3.5rem;
      top: 11%;
      left: 50%;
      transform: translateX(-50%);
    }

    .experience-text {
      font-size: 1rem;
      text-align: center;
      width: 100%;
      position: relative;
      top: 6%;
      left: 0;
      font-family: "Proxima Nova", sans-serif;
    }

    .skills-container {
      position: relative;
      width: 100%;
      left: -1%;
      top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    .skill-item {
      width: 90%;
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
      position: relative;
      top: 5%;
      left: 0;
      margin-bottom: 50px;
    }

    .certificate1 {
      width: 300px;
      height: 300px;
    }

    .certificate2 {    
      width: 300px;
      height: 200px;
    } 
      
    .certificate-title {
      position: relative;
      font-size: 2rem;
      margin-top: 10px;
      left: 0;
      top: 7%;
    }
}


  /* TABLETVERSJON (441px - 1024px) */
  @media (min-width: 441px) and (max-width: 1024px) {
    .experience-title {
      font-size: 4rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .experience-text {
      width: 85%;
      left: 50%;
      transform: translateX(-50%);
      top: 23%;
    }

    .skills-container {
      position: relative;
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
