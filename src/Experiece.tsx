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
      className="bg-black min-vh-100 d-flex flex-column position-relative overflow-hidden text-light"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Portfolio/minimalistic_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden",
        marginTop: "-30px",
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

      {/* Navigasjonsmeny */}
      <div className="navbar">
        <Navbar />
      </div>

      {/* Innhold */}
      <div>
        <div className="container experience-content">
          <div style={{ paddingTop: "100px" }}>
            <h1 className="experience-title mb-4">ERFARING</h1>

            <div className="row">
              {/* Venstre kolonne */}
              <div className="col-lg-6 mb-5">
                <p className="experience-text">
                  Gjennom tre år har jeg utviklet ferdigheter innen
                  webutvikling, interaksjonsdesign og brukertesting. Jeg har
                  jobbet med HTML, CSS, React, JavaScript og TypeScript for å
                  skape dynamiske og brukervennlige løsninger. Design og
                  brukeropplevelse har vært en stor del av mitt arbeid, der jeg
                  har brukt verktøy som Figma og Adobe Illustrator for å skape
                  intuitive grensesnitt. I tillegg har jeg lært viktige
                  designprinsipper og gjennomført brukertesting for å sikre at
                  løsningene fungerer optimalt for brukerne.
                </p>

                <h4 className="mt-5 experience-subtitle">ARBEIDSERFARING</h4>

                <div className="job mt-3">
                  <h5>💼 Assisterende medarbeider – Floriss Hasle</h5>
                  <p className="job-period">Juni 2017 – Nåværende</p>
                  <ul>
                    <li>Ansvar for henting og oppakning av nye varer</li>
                    <li>
                      Visuell utforming av butikkens produkter og utstillinger
                    </li>
                    <li>
                      Utviklet forståelse for kundebehov og forbedret
                      kundeopplevelse
                    </li>
                  </ul>
                </div>

                <div className="job mt-4">
                  <h5>📦 Lagermedarbeider – Bring Alfaset</h5>
                  <p className="job-period">Nov. 2020 – Sept. 2022</p>
                  <ul>
                    <li>Sortering og logistikk av pakker</li>
                    <li>Bidro til optimalisering av arbeidsflyt og sporing</li>
                    <li>Lærte verdien av nøyaktighet i logistikkprosesser</li>
                  </ul>
                </div>

                <a
                  href="/Portfolio/CV.pdf"
                  className="btn btn-outline-light mt-4"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Last ned full CV (PDF)
                </a>

                <h4 className="mt-5 experience-subtitle">SERTIFIKATER</h4>
                <div className="certificates mt-3 d-flex flex-wrap gap-4 justify-content-start">
                  <motion.img
                    src="/Portfolio/htmlcss_certificate.png"
                    alt="HTML CSS Certificate"
                    className="certificate1"
                    onClick={() =>
                      setSelectedCertificate(
                        "/Portfolio/htmlcss_certificate.png",
                      )
                    }
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src="/Portfolio/react_certificate.png"
                    alt="React Certificate"
                    className="certificate2"
                    onClick={() =>
                      setSelectedCertificate("/Portfolio/react_certificate.png")
                    }
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Høyre kolonne – ferdigheter */}
              <div className="col-lg-6">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item mb-5">
                    <div className="d-flex align-items-center mb-2">
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

            {/* Sertifikat popup */}
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
          </div>
        </div>
      </div>

      {/* STYLE */}
      <style>{`
        .navbar {
          margin-top: 75px;
        }

        .experience-title {
          font-family: Helvetica;
          font-size: 5rem;
          text-align: left;
        }

        .experience-text {
          font-size: 1rem;
          font-family: "Proxima Nova", sans-serif;
        }

        .experience-subtitle {
          font-size: 1.6rem;
          color: white;
          font-family: Helvetica;
        }

        .job h5 {
          font-size: 1.2rem;
          color: #ffc107;
        }

        .job-period {
          font-size: 0.9rem;
          font-style: italic;
          color: #ccc;
        }

        .job ul {
          padding-left: 20px;
          font-size: 1rem;
        }

        .skill-logo {
          width: 30px;
          margin-right: 10px;
        }

        .certificate1 {
          width: 275px;
          height: 300px;
        }

        .certificate2 {
          width: 300px;
          height: 200px;
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

        @media (max-width: 768px) {
          .experience-title {
            font-size: 3rem;
            text-align: center;
          }

          .experience-subtitle {
            font-size: 1.3rem;
            text-align: center;
          }

          .experience-text {
            text-align: center;
            margin-bottom: 40px;
          }

          .certificate1, .certificate2 {
            width: 90%;
            height: auto;
          }

          .certificates {
            justify-content: center !important;
          }

          .job h5 {
            font-size: 1.1rem;
            text-align: center;
          }

          .job ul {
            padding-left: 15px;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
