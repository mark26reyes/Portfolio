import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Image from "./Image";

const App = () => {
  return (
    <>
      <div className="bg-dark">
        <section>
          <h1 className="fixed-top bold text-light p-4 text-start">
            Min portefølje
          </h1>
          <nav>
            <ul className="nav justify-content-end fixed-top p-4">
              <li className="nav-item">
                <a className="text-light nav-link active" href="#">
                  Hjem
                </a>
              </li>
              <li className="nav-item">
                <a className="text-light nav-link" href="#">
                  Om meg
                </a>
              </li>
              <li className="nav-item">
                <a className="text-light nav-link" href="#">
                  Prosjekter
                </a>
              </li>
              <li className="nav-item">
                <a className="text-light nav-link" href="#">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="text-center p-5">
          <Image />
        </section>
      </div>
    </>
  );
};

export default App;
