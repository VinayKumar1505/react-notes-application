import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddNoteModal({ isOpen, onClose, handleAddNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mediaLink, setMediaLink] = useState('');

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const sanitizeHTML = (html) => {
    // Create a new div element
    const tempDiv = document.createElement('div');
    // Set the HTML content of the div to the provided HTML
    tempDiv.innerHTML = html;
    // Return the text content of the div, which will strip any HTML tags
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description.trim()) {
      // If description is empty, prevent adding the note
      return;
    }

    // Sanitize the HTML content before saving
    const sanitizedDescription = sanitizeHTML(description);

    handleAddNote(title, sanitizedDescription, mediaLink);
    setTitle('');
    setDescription('');
    setMediaLink('');
    onClose(); // Close the modal after submitting
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div>
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
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

export default AddNoteModal;
