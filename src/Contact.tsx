import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { motion } from "framer-motion";
import Navbar from "./NavBar";

const AboutMe = () => {
  const text = "MARK     DANIEL     REYES".split("");

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
      <div className="container">
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "22%",
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
            TA KONTAKT
          </h1>
          <a
            href="mailto:mark26reyes@gmail.com"
            style={{
              position: "absolute",
              fontSize: "2.5rem",
              fontWeight: "lighter",
              fontFamily: "Helvetica",
              color: "gray",
              textDecoration: "underline",
              top: "150%",
              cursor: "pointer",
            }}
          >
            mark26reyes@gmail.com
          </a>
        </div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            display: "flex",
            alignItems: "center",
            gap: "30px", // Mellomrom mellom ikonene
          }}
        >
          {/* LinkedIn */}
          <a
            className="text-decoration-none"
            href="https://www.linkedin.com/in/mark-daniel-reyes-865609278"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              style={{ width: "60px", height: "60px" }}
            />
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "2rem",
                color: "white",
                marginLeft: "10px",
              }}
            >
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            className="text-decoration-none"
            href="https://github.com/mark26reyes"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              style={{ width: "60px", height: "60px", filter: "invert(1)" }}
            />
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "2rem",
                color: "white",
                marginLeft: "10px",
              }}
            >
              GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
