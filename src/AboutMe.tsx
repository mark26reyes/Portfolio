import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { motion } from "framer-motion";
import Navbar from "./NavBar";
import { SideProfile, Sunset } from "./Image";
import { Table } from "./Image";

const AboutMe = () => {
  const text = "MARK     DANIEL     REYES".split("");

  return (
    <div
      className="bg-black min-vh-100 d-flex flex-column position-relative text-light aboutme"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Portfolio/minimalistic_bg.jpg')",
        backgroundSize: "cover",
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

      <div className="aboutme-content">
        {/* Navigasjonsmeny */}
        <div>
          <Navbar />
        </div>

        {/* OM MEG Overskrift */}
        <div className="about-title">
          <h1>OM MEG</h1>
        </div>

        {/* Tekstblokk */}
        <div className="about-text">
          <p>
            Mitt navn er <strong>Mark Daniel Reyes</strong>, og jeg er en 23 år
            gammel UX/UI-designer med en forventet bachelorgrad i Interaktivt
            Design fra Høyskolen Kristiania til sommer. Jeg har en lidenskap for
            å skape intuitive og estetisk tiltalende digitale opplevelser som
            kombinerer funksjonalitet og design.
          </p>
          <p>
            Gjennom studiene mine har jeg fått en solid forståelse for
            brukeropplevelse, interaksjonsdesign og visuell kommunikasjon. Jeg
            har erfaring med verktøy som Figma, Adobe XD og andre
            designprogrammer, og jeg jobber alltid med et brukerfokusert
            tankesett for å skape løsninger som er både innovative og effektive.
          </p>
          <p>
            I tillegg til UX/UI-design har jeg en sterk interesse for
            webutvikling og ønsker å utvikle meg videre innen dette feltet. Jeg
            har erfaring med HTML, CSS og JavaScript og bygger opp ferdighetene
            mine innenfor moderne rammeverk som React.
          </p>
          <p>
            Ved siden av design og utvikling, driver jeg også med friidrett, som
            sprinter. Gjennom dette har jeg utviklet verdifulle egenskaper som{" "}
            <strong>disiplin</strong>, <strong>målbevissthet</strong> og{" "}
            <strong>arbeidsvilje</strong>, noe jeg tar med meg inn i
            arbeidslivet og bruker aktivt i mine prosjekter.
          </p>
          <p>
            Jeg er nysgjerrig av natur og drives av å lære nye teknologier og
            designmetoder for å kunne utvikle meg videre som både designer og
            utvikler. Med en sterk interesse for designpsykologi og
            brukeradferd, streber jeg etter å skape løsninger som ikke bare ser
            bra ut, men som også fungerer sømløst for brukeren. Ikke nøl med å
            ta kontakt :)
          </p>
        </div>

        {/* Profilbilde */}
        <div className="profile-container">
          <SideProfile />
          <p className="profile-name">Mark Daniel Reyes</p>
        </div>

        {/* Svart-hvitt bilder i bakgrunnen */}
        <div className="table-image">
          <Table />
        </div>
        <div className="sunset-image">
          <Sunset />
        </div>
      </div>

      {/* RESPONSIV CSS */}
      <style>
        {`
   /* Standard desktop-styling */
  .about-title {
    position: absolute;
    top: 20%;
    left: 5vw; /* Bruker viewport width for konsistent plassering */
  }

  .about-title h1 {
    font-size: 5rem;
    font-weight: regular;
    font-family: Helvetica;
  }

  .about-text {
    position: absolute;
    top: 35%;
    left: 5vw; /* Justert for å passe på store skjermer */
    width: 40vw; /* Låser bredden til viewport width */
    font-size: 1rem;
    line-height: 1.5;
    font-family: "Proxima Nova";
    font-weight: lighter;
  }

  .profile-container {
    position: absolute;
    right: 20vw; /* Sørger for at bildet holder seg på riktig sted */
    top: 30%;
    padding: 10px;
    background-color: white;
    z-index: 2;
  }

  .profile-name {
    color: black;
    font-weight: regular;
    font-size: 1.5rem;
    font-family: Helvetica;
  }

  .table-image {
    position: absolute;
    right: 6vw; /* Bruker vw for bedre skalering */
    top: 25%;
    filter: grayscale(100%) brightness(30%);
    z-index: 1;
  }

  .sunset-image {
    position: absolute;
    right: 3.5vw;
    top: 55%;
    filter: grayscale(100%) brightness(30%);
  }

  /* MOBIL RESPONSIVITET */
  @media (max-width: 440px) {
    html, body {
      height: 100%;
      overflow-x: hidden; /* Hindrer horisontal scrolling */
      overflow-y: auto; /* Sikrer at hele siden kan scrolle */
      -webkit-overflow-scrolling: touch; /* Gir bedre scrolling på iOS */
    }


    .aboutme {
      min-height: auto; /* La innholdet bestemme høyden */
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: -20px;
    }

    .about-title {
      width: 100%;
      top: 175px;
      left: 0;
    }

    .about-title h1 {
      font-size: 3.5rem;
    }

    .about-text {
      width: 90%;
      font-size: 0.9rem;
      top: 250px;
      position: relative;
      font-family: "Proxima Nova", sans-serif;
    }

    .profile-container {
      width: 80%;
      background-color: white;
      padding: 10px;
      position: relative;
      z-index: 2;
      top: 280px;
      left: 5%;
    }

    /* Juster bildene for å unngå tomrom */
    .table-image,
    .sunset-image {
      width: 70%;
      margin: -150px auto 0 auto; /* Fjern tomrom under */
      filter: grayscale(100%) brightness(40%);
      position: relative;
      left: 15%;
    }

    .table-image {
      margin-top: -250px; /* Juster for å flytte det opp */
    }

    .sunset-image {
      margin-top: -150px; /* Juster for å fjerne tomrom */
    }
}
   



  /* TABLET RESPONSIVITET */
  @media (min-width: 441px) and (max-width: 1024px) {

    .about-title {
      left: 18vw;
      top: 15%;
    }

    .about-title h1 {
      font-size: 4rem;
    }

    .about-text {
      width: 85%;
      left: 48%;
      top: 23%;
      font-size: 1.3rem;
    }

    .profile-container {
      right: 28vw;
      top: 65%;
    }

    .table-image {
      right: 10vw;
      top: 62%;
    }

    .sunset-image {
      right: 5vw;
      top: 76%;
    }
  }


  `}
      </style>
    </div>
  );
};

export default AboutMe;
