import React from "react";
import { motion } from "framer-motion";

const Image = () => {
  return (
    <div className="image-wrapper">
      <img
        src="/Portfolio/mark4k.png"
        alt="Mark"
        className="responsive-image"
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
        className="responsive-autograph"
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
        src="/Portfolio/mark_table.png"
        alt="Table"
        style={{
          width: "265px",
          zIndex: 2,
          position: "relative",
        }}
      />
    </div>
  );
};

const Sunset = () => {
  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <img
        src="/Portfolio/mark_sunset.png"
        alt="Sunset"
        style={{
          width: "275px",
          zIndex: 2,
          position: "relative",
        }}
      />
    </div>
  );
};

export default Image;
export { Autograf, SideProfile, Table, Sunset };
