import React from "react";
import { motion } from "framer-motion";

const Image = () => {
  return (
    <div>
      {/*
      <div
        style={{ width: "500px", height: "5px", backgroundColor: "white" }}
      ></div> */}
      <img
        src="/Portfolio/mark_sorthvitt.jpg"
        alt="Mark"
        style={{ width: "470px", zIndex: 2 }}
      />
    </div>
  );
};

const Autograf = () => {
  return (
    <div>
      <motion.img
        src="/Portfolio/autograf.png"
        alt="Autograf"
        className="position-absolute"
        style={{
          width: "300px",
          top: "30%",
          left: "65%",
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
