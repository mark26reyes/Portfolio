import React from "react";
import { motion } from "framer-motion";

const Image = () => {
  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <img
        src="/Portfolio/mark4k.png"
        alt="Mark"
        style={{
          width: "770px",
          opacity: 0.3,
          zIndex: 2,
          position: "relative",
        }}
      />
    </div>
  );
};

const Autograf = () => {
  return (
    <div>
      <motion.img
        src="/Portfolio/autograf_oransje.png"
        alt="Autograf"
        className="position-absolute"
        style={{
          width: "200px",
          top: "40%",
          left: "73%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ y: -10, opacity: 0 }} // Starter litt høyere og usynlig
        animate={{
          x: [-200, 0, 0], // Drift-effekt (opp og ned)
          opacity: 1,
          transition: { duration: 3 },
        }}
      />
    </div>
  );
};

export default Image;
export { Autograf };
