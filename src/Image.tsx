import React from "react";
const Image = () => {
  return (
    <div>
      <img
        src="/Portfolio/mark_sorthvitt.jpg"
        alt="Mark"
        style={{ width: "380px", zIndex: 2 }}
      />
    </div>
  );
};

const Autograf = () => {
  return (
    <div>
      <img
        src="/Portfolio/autograf.png"
        alt="Autograf"
        className="position-absolute"
        style={{
          width: "275px",
          top: "50%",
          left: "100%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default Image;
export { Autograf };
