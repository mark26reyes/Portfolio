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
          opacity: 0.4,
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
        src="/Portfolio/autograf_hvit.png"
        alt="Autograf"
        className="position-absolute"
        style={{
          width: "250px",
          top: "50%",
          left: "73%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
        }}
        initial={{ y: -10, opacity: 0 }} // Starter litt høyere og usynlig
        animate={{
          x: [-200, 0, 0], // Drift-effekt (opp og ned)
          opacity: 0.6, // Gjør bildet synlig
          transition: { duration: 3 },
        }}
      />
    </div>
  );
};

const SideProfile = () => {
  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <img
        src="/Portfolio/mark_side.jpeg"
        alt="Mark"
        style={{
          width: "325px",
          zIndex: 2,
          position: "relative",
        }}
      />
    </div>
  );
};

const Table = () => {
  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <img
        src="/Portfolio/mark_table.jpeg"
        alt="Table"
        style={{
          width: "200px",
          zIndex: 2,
          position: "relative",
        }}
      />
    </div>
  );
};

export default Image;
export { Autograf };
export { SideProfile };
export { Table };
