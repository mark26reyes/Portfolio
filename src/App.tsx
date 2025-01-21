import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Image from "./Image";

const App = () => {
  return (
    <>
      <div className="">
        <h1 className="bold bg-primary text-white p-4 text-center">
          Min portefølje
        </h1>
        <section className="text-center">
          <Image />
        </section>
      </div>
    </>
  );
};

export default App;
