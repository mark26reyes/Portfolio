import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Image from "./Image";

const App = () => {
  return (
    <>
      <div className="">
        <section>
          <h1 className="fixed-top bold text-dark p-4 text-start">
            Min portefølje
          </h1>
          <nav>
            <ul className="nav justify-content-end fixed-top p-4">
              <li className="nav-item">
                <a className="text-dark nav-link active" href="#">
                  Hjem
                </a>
              </li>
              <li className="nav-item">
                <a className="text-dark nav-link" href="#">
                  Om meg
                </a>
              </li>
              <li className="nav-item">
                <a className="text-dark nav-link" href="#">
                  Prosjekter
                </a>
              </li>
              <li className="nav-item">
                <a className="text-dark nav-link" href="#">
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
