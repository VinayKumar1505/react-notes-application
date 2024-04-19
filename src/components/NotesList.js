import Note from "./Note";

const NotesList= ({notes, handleDeleteNote, handleUpdateNote})=>{
    return(
        <div className="notes-list">
            {notes.map((note)=>(
                <Note id={note.id} title={note.title} description={note.description} mediaLink={note.media} date={note.date} handleDeleteNote={handleDeleteNote} handleUpdateNote={handleUpdateNote} />
            ))}
          
        </div>
    )
}

export default NotesList;