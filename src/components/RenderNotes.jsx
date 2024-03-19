import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
function RenderNotes(props) {
   // Render a single note with title, content, and edit/delete buttons
  return (
    <div className="note columnAlignment">
      <span className="noteTitle">{props.title}</span>
      <p className="noteContent">{props.content}</p>
      <div className="rowAlignment justifyRight noteButtonWrapper">
        <button
          onClick={() => {
            props.onDelete(props.id, props.noteLocalArrayId); // Call onDelete function when delete button is clicked
          }}
        >
          <DeleteIcon />
        </button>

        <button
          onClick={() => {
            props.onEdit(props.id, props.noteLocalArrayId); // Call onEdit function when edit button is clicked
          }}
        >
          <EditIcon />
        </button>
      </div>
    </div>
  );
}

export default RenderNotes;
