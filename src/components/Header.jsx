import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_ADDRESS } from "../config";

const head = "NoteNest";

function Header(props) {
  const currentUserToken = localStorage.getItem("userToken"); // Get user token from local storage
  axios.defaults.headers.common["Authorization"] = `Bearer ${currentUserToken}`; // Set authorization header with user token
  const navigate = useNavigate(); // Initializing useNavigate hook for navigation

  // Function to handle user logout
  function handleLogOut() {
    localStorage.removeItem("userToken"); // Remove user token from local storage
    navigate("/"); // Redirect user to home page after logout
  }

  // Function to handle user account deletion
  function handleDeleteAccount() {
    if (window.confirm("Are you sure you want to delete you account?")) {
      // Ask for confirmation before account deletion
      axios // Make DELETE request to delete user endpoint
        .delete(`${SERVER_ADDRESS}/deleteUser`)
        .then((response) => {
          // Handle successful account deletion response
          localStorage.removeItem("userToken"); // Remove user token from local storage
          navigate("/"); // Redirect user to home page after account deletion
        })
        .catch((err) => {
          // Handle account deletion errors
          alert("Error deleting user"); // Alert user with error message
        });
    }
  }

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <header className="columnAlignment">
    //   <nav className="rowAlignment headerContainer">
    //     <h1 className="rowAlignment">
    //       <i className="material-icons alignSelfCenter">description</i>
    //       {head}
    //     </h1>
    //     <span className="fill"></span>
    //     <span className="greetUser">Welcome, {props.username}</span>
    //     <div className="rowAlignment">
    //       <button
    //         onClick={handleLogOut}
    //         className="accentButton darkAccentButton navButton"
    //       >
    //         Log out
    //       </button>
    //       <button
    //         onClick={handleDeleteAccount}
    //         className="accentButton transparentAccentButton light navButton"
    //       >
    //         Delete account
    //       </button>
    //     </div>
    //   </nav>
    // </header>
    <header className="columnAlignment">
      <nav className="rowColumnAlignment ">
        <div className="rowColumnAlignment">
          <h1 className="rowAlignment">
            <i className="material-symbols-outlined alignSelfCenter">
              description
            </i>
            {head}
          </h1>
          <span className="greetUser">Welcome, {props.username}</span>
        </div>
        <span className="fill"></span>

        <div
          className="menu rowAlignment"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span class="material-symbols-outlined">menu</span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <button
              onClick={handleLogOut}
              className="accentButton darkAccentButton navButton"
            >
              Log out
            </button>
          </li>
          <li>
            <button
              onClick={handleDeleteAccount}
              className="accentButton transparentAccentButton light navButton"
            >
              Delete account
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
