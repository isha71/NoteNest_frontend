import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import axios from "axios";
import { SERVER_ADDRESS } from "../config";

function Note(props) {
  // Get user token from local storage
  const currentUserToken = localStorage.getItem("userToken");
  // Set authorization header with user token
  axios.defaults.headers.common["Authorization"] = `Bearer ${currentUserToken}`;

  // State to manage note data
  const [note, setNote] = useState(
    // If editing a note, set initial state to the note being edited; otherwise, set to an empty note
    props.noteToEdit
      ? props.noteToEdit
      : {
          note_title: "",
          note_content: "",
        }
  );

  // State to manage whether the input field is visible
  const [inputField, setInputField] = useState(false);

  // Update note state when noteToEdit prop changes
  useEffect(() => {
    setNote(props.noteToEdit || { note_title: "", note_content: "" });
  }, [props.noteToEdit]);

  // Function to handle changes in the note input fields
  function handleNoteChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  // Function to handle click event on textarea
  function textAreaClicked() {
    setInputField(true);
  }

  // Function to add or edit a note
  function addNote(e) {
    e.preventDefault();
    if (props.editMode) {
      // If in edit mode
      props.setNoteInContainer({ isNote: false, content: {} });
      axios
        .post(`${SERVER_ADDRESS}/editNote`, {
          note: note,
          noteId: props.idOfNoteToEdit,
        })
        .then((response) => {
          const { updatedNoteId } = response.data;
          props.setEditMode(false);
          props.updateArray({
            // Update the notes array with the edited note
            id: updatedNoteId,
            note_title: note.note_title,
            note_content: note.note_content,
          });
          setNote({ note_title: "", note_content: "" }); // Reset note state
        })
        .catch((err) => {
          console.log("error updating note in database");
          console.error(err);
        });
    } else {
      // If adding a new note
      axios
        .post(`${SERVER_ADDRESS}/addNote`, {
          note: note,
        })
        .then((response) => {
          const { addedNoteId } = response.data;
          props.updateArray({
            // Update the notes array with the newly added note
            id: addedNoteId,
            note_title: note.note_title,
            note_content: note.note_content,
          });
          setNote({ note_title: "", note_content: "" }); // Reset note state
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <div className="columnAlignment createNoteContainer alignSelfCenter">
      {/* Form for creating/editing a note */}
      <form onSubmit={addNote} className="columnAlignment createNote">
        {/* Input field for note title */}
        {inputField ? (
          <input
            type="text"
            name="note_title"
            value={note.note_title}
            placeholder="Title"
            onChange={handleNoteChange}
          />
        ) : null}
        {/* Textarea for note content */}
        <textarea
          type="text"
          name="note_content"
          value={note.note_content}
          placeholder="Enter content.."
          rows={inputField ? "3" : "1"}
          onChange={handleNoteChange}
          onFocus={textAreaClicked} // Show input field when textarea is focused
          required
        />
        <Zoom in={inputField ? true : false}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Note;
