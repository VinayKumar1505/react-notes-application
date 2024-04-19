import React, { useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import EditNoteModal from './EditNoteModal';
import FullDescriptionModal from './FullDescriptionModel';

export default function Note({ id, title, description, mediaLink, date, handleDeleteNote, handleUpdateNote }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFullDescriptionOpen, setIsFullDescriptionOpen] = useState(false);

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleFullDescriptionOpen = () => {
    setIsFullDescriptionOpen(true);
  };

  const handleFullDescriptionClose = () => {
    setIsFullDescriptionOpen(false);
  };

  const truncatedDescription = description.length > 100 ? description.substring(0, 100) + "..." : description;

  return (
    <div className='note'>
      <strong>{title}</strong>
      <span style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
        {isFullDescriptionOpen ? description : truncatedDescription}
        {!isFullDescriptionOpen && description.length > 100 && (
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={handleFullDescriptionOpen}
          >
            {' See More'}
          </span>
        )}
      </span>
      <div>{mediaLink}</div>
      <div className='footer-note'>
        <small> {date}</small>
        <MdEdit className="edit-icon" size='1.3rem' onClick={handleEditModalOpen} style={{cursor: 'pointer'}}/>
        <MdDeleteForever className="delete-icon" size='1.3rem' onClick={() => handleDeleteNote(id)}/>
      </div>
      <EditNoteModal
        isOpen={isEditModalOpen}
        onClose={handleEditModalClose}
        note={{ id, title, description, mediaLink }}
        handleUpdateNote={handleUpdateNote}
      />
      {isFullDescriptionOpen && (
        <FullDescriptionModal
          isOpen={isFullDescriptionOpen}
          onClose={handleFullDescriptionClose}
          title={title}
          description={description}
          mediaLink={mediaLink}
        />
      )}
    </div>
  );
}
