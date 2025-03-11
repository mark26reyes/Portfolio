import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { motion } from "framer-motion";
import Navbar from "./NavBar";

const Contact = () => {
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

      {/* Kontakt-informasjon */}
      <div className="contact-container">
        <h1 className="contact-title">TA KONTAKT</h1>
        <a href="mailto:mark26reyes@gmail.com" className="contact-email">
          mark26reyes@gmail.com
        </a>

        {/* Sosiale medier */}
        <div className="social-links">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mark-daniel-reyes-865609278"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="social-icon"
            />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mark26reyes"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              className="social-icon github-icon"
            />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* RESPONSIV STYLING */}
      <style>
        {`
  /* Standard desktop-styling */
  .contact-container {
    position: absolute;
    top: 20%;
    left: 22%;
    transform: translateX(-50%);
    text-align: left;
  }

  .contact-title {
    font-size: 5rem;
    font-weight: regular;
    font-family: Helvetica;
  }

  .contact-email {
    font-size: 2.5rem;
    font-weight: lighter;
    font-family: Helvetica;
    color: gray;
    text-decoration: underline;
    display: block;
    margin-top: 30px;
  }

  .social-links {
    position: absolute;
    top: 130%;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .social-item {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .social-icon {
    width: 60px;
    height: 60px;
  }

  .github-icon {
    filter: invert(1);
  }

  .social-item span {
    font-family: Helvetica;
    font-size: 2rem;
    color: white;
    margin-left: 10px;
  }

 /* MOBIL RESPONSIVITET */
@media (max-width: 440px) {
    .contact-container {
        text-align: center;
        width: 90%;
        top: 18%; /* Flytter teksten ned */
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
    }

    .contact-title {
        font-size: 3.5rem;
        margin-bottom: 10px;
    }

    .contact-email {
        font-size: 2rem;
        margin-top: 80px;
        display: block;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    .social-links {
        margin-top: 30px;
        right: 12%;
    }

    .social-item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 100%;
    }

    .social-icon {
        width: 60px;
        height: 60px;
    }

    .social-item span {
        font-size: 1.3rem;
        margin-left: 8px;
    }
}


 /* TABLET RESPONSIVITET */
@media (min-width: 441px) and (max-width: 1024px) {
    .contact-container {
        text-align: center;
        width: 85%;
        top: 25%; /* Flytter teksten lenger ned */
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
    }

    .contact-title {
        font-size: 2rem;
        margin-bottom: 15px;
    }

    .contact-email {
        font-size: 1.8rem;
        margin-top: 20px;
        display: block;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    .social-links {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        gap: 40px;
    }

    .social-item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: auto;
    }

    .social-icon {
        width: 50px;
        height: 50px;
    }

    .social-item span {
        font-size: 1.6rem;
        margin-left: 10px;
    }
}

  `}
      </style>
    </div>
  );
};

export default Contact;
