import React, { useState } from 'react';

function EditNoteModal({ isOpen, onClose, note, handleUpdateNote }) {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [mediaLink, setMediaLink] = useState(note.mediaLink);

  const handleSubmit = (event) => {
    event.preventDefault();
     
    handleUpdateNote(note.id, title, description, mediaLink);
    onClose(); // Close the modal after submitting
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={ handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Audio/Video Link"
            value={mediaLink}
            onChange={(e) => setMediaLink(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default EditNoteModal;
