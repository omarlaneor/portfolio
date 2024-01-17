import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <aside>
          <h1>
            Hola, soy <span className="highlight">Omar Osorio</span>
          </h1>
          <p>
            Establecido en Colombia, soy un estudiante de Web-Full Stack
            Development y Análisis y Desarrollo de Software, con estudios en la
            Universidad de Brigham Young Idaho en "Applied Technology BS".
          </p>
        </aside>
        <aside>
          <img src="../../../public/In The Office.jpg" alt="Omar Osorio" />
        </aside>
      </div>
    </header>
  );
};

export default Header;
