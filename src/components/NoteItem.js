import React, {useContext} from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-3">  
      <div className="card my-3">
        <div className="card-body">
            <div className="d-flex align-items-center">
               <h5 className="card-title">{note.title}</h5>
               <i className="fa-solid fa-trash mx-2 text-danger" onClick={()=>{deleteNote(note._id);
                    props.showAlert("Deleted Successfully", "success");
               }}></i>
               <i className="fa-solid fa-pen-to-square mx-2 text-success" onClick={()=>{updateNote(note)}}></i>
            </div>
          <p className="card-title" style={{color: "gray"}}>{note.tag}</p>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
