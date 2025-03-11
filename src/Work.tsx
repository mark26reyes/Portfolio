import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { motion } from "framer-motion";
import Navbar from "./NavBar";

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
        "Pågående prosjekt, oppdateres ved endringer: Fristil er et plateselskap som lar russegrupper velge artister, produsenter og vokalister for å lage sin russelåt. Nettsiden, utviklet i WIX Studio, viser artister, tidligere verk og nyheter og generelt om Fristil.",
      url: "https://editor.wix.com/html/editor/web/renderer/external_preview/document/1892ff93-aa34-4b35-ac78-6b37aab561d1?metaSiteId=40eb0fc3-c360-4f9b-8077-335767491125&dsOrigin=externalPreview&configName=externalPreview",
    },
  ];

  return (
    <div
      className="bg-black min-vh-100 d-flex flex-column position-relative text-light content"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Portfolio/minimalistic_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden",
      }}
    >
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

      <section
        className="container position-relative work-content"
        style={{ marginTop: "11%", zIndex: 2, left: "0vw" }}
      >
        <h1 className="text-white title">MITT ARBEID</h1>
        <p
          className="text-white text"
          style={{
            fontFamily: "Proxima Nova",
            fontSize: "1rem",
            width: "80%",
            fontWeight: "lighter",
          }}
        >
          Velkommen til mitt kreative univers! Jeg tror på design som ikke bare
          ser bra ut, men som også løser reelle utfordringer og skaper verdi for
          brukeren. Utforsk mitt arbeid og se hvordan estetikk og funksjonalitet
          smelter sammen for å skape inspirerende digitale opplevelser.
        </p>

        <div className="row justify-content-center mt-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-3 col-sm-6 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="p-4 d-flex align-items-center justify-content-center position-relative project-card">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="img-fluid position-absolute project-image"
                  />
                  <div className="overlay">
                    <p className="description-text">{project.description}</p>
                  </div>
                </div>
                <p className="mt-3 text-white text-center">{project.name}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <style>
        {`
          .project-card {
            background-color: #101010;
            min-height: 300px;
            overflow: hidden;
            position: relative;
          }
          .project-image {
            max-width: 80%;
            transition: opacity 0.3s ease-in-out;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            padding: 15px;
          }
          .project-card:hover .overlay {
            opacity: 1;
          }
          .description-text {
            color: white;
            text-align: center;
          }

          .title {
            font-size: 5.5rem;
           
            font-family: "Proxima Nova";
          }

           /* MOBIL RESPONSIVITET */
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

    .container {
      position: relative;
      overflow: visible !important; /* Sikrer at containeren ikke skaper egen scroll */
      padding-top: 145px;
    }

    .work-content {
      position: relative;
      overflow: visible !important; /* Hindrer egen scroll */
    }

    .title {
      font-size: 3.5rem;
      font-family: "Helvetica";
      text-align: center;
    }

    .text {
      width: 100%;
      font-size: 1rem;
      text-align: center;
      margin: auto;
      font-family: "Proxima Nova", sans-serif;
    }

    .row {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .col-sm-6 {
      width: 90%;
      margin-bottom: 20px;
    }

    .p-4 {
      min-height: 250px;
    }

    img {
      max-width: 90%;
    }

    /* 🔥 FJERNER DOBBEL SCROLL 🔥 */
    .project-card {
      overflow: visible !important; /* Sikrer at prosjektboksene ikke skaper ekstra scroll */
    }

    .project-image,
    .overlay {
      pointer-events: none; /* Sørger for at de ikke blokkerer scroll */
    }
}


        `}
      </style>
    </div>
  );
};

export default Work;
