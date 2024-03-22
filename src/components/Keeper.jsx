import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import RenderNotes from "./RenderNotes.jsx";
import { SERVER_ADDRESS } from "../config.js";

function Keeper() {
  // Get user token from local storage and set authorization header
  const currentUserToken = localStorage.getItem("userToken");
  axios.defaults.headers.common["Authorization"] = `Bearer ${currentUserToken}`;
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Redirect user to home page if not authenticated
  useEffect(() => {
    if (currentUserToken === null) {
      navigate("/");
    }
  });

  // State variables for username, notes array, edit mode, note to edit, and ID of note to edit
  const [username, setUserName] = useState("");
  const [notesArray, setNotesArray] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState({});
  const [idOfNoteToEdit, setIdOfNoteToEdit] = useState();
  const [noteInContainer, setNoteInContainer] = useState({
    isNote: false,
    content: {},
  });

  // Fetch user data and existing notes from the server on component mount
  useEffect(() => {
    try {
      axios
        .post(`${SERVER_ADDRESS}/getUserData`)
        .then((response) => {
          setUserName(response.data.username);
          setNotesArray(response.data.existedNotes);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  // Function to update notes array with a new note object
  function updateArray(newNoteObject) {
    setNotesArray((prevNotesArray) => {
      return [...prevNotesArray, newNoteObject];
    });
  }

  // Function to delete a note item from the notes array
  function deleteItem(id, noteLocalArrayId) {
    axios.delete(`${SERVER_ADDRESS}/deleteNote`, {
      data: { noteIdToDelete: id },
    });
    setNotesArray((preValue) => {
      return preValue.filter((item, index) => {
        return index !== noteLocalArrayId;
      });
    });
  }

  // Function to edit a note item in the notes array
  function editItem(id, noteLocalArrayId) {
    if (noteInContainer.isNote === true) {
      setNotesArray((prevNotesArray) => {
        return [...prevNotesArray, noteInContainer.content];
      });
    }
    const { note_title, note_content } = notesArray[noteLocalArrayId];
    const content = {
      id: id,
      note_title: note_title,
      note_content: note_content,
    };
    setNoteInContainer({ isNote: true, content: content });
    setNoteToEdit({ note_title: note_title, note_content: note_content });
    setEditMode(true);
    setIdOfNoteToEdit(id);
    setNotesArray((preValue) => {
      return preValue.filter((item, index) => {
        return item.id !== id;
      });
    });
  }

  useEffect(() => {}, [notesArray]);

  return (
    <div className="columnAlignment noteContainer backgroundContainer">
      <Header username={username} />
      <div className="columnAlignment noteContentContainer">
        {/* Render Note component for adding/editing notes */}
        {editMode ? (
          <Note
            noteToEdit={noteToEdit}
            editMode={editMode}
            setEditMode={setEditMode}
            idOfNoteToEdit={idOfNoteToEdit}
            updateArray={updateArray}
            noteInContainer={noteInContainer}
            setNoteInContainer={setNoteInContainer}
          />
        ) : (
          <Note updateArray={updateArray} />
        )}
        <div className="rowAlignment userNotesContainer">
          {/* Render existing notes */}
          {notesArray.map((note, index) => {
            return (
              <RenderNotes
                key={index}
                title={note.note_title}
                content={note.note_content}
                id={note.id}
                noteLocalArrayId={index}
                onDelete={deleteItem}
                onEdit={editItem}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Keeper;
