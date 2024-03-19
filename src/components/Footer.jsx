import React from "react";

// Get the current year dynamically
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="rowAlignment alignCenter">
      <p>Made with <span class="material-icons">favorite</span> by <a href="https://github.com/isha71" target="blank"><span className="authorName">Isha Jain</span></a> &copy; {year}</p>
    </footer>
  );
}

export default Footer;
