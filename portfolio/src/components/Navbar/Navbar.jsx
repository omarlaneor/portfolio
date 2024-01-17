import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>omarlaneor</h2>
      </div>
      <div className="navbar-right">
        <a
          href="https://github.com/omarlaneor?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../../public/github.svg" alt="GitHub" />
        </a>
        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../../public/twitter.svg" alt="Twitter" />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../../public/insta.svg" alt="Instagram" />
        </a>

        <a
          href="https://co.indeed.com/?r=us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../../public/indeed.svg" alt="Indeed" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
