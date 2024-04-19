import React from 'react';

const FullDescriptionModal = ({ isOpen, onClose, title, description, mediaLink }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <p style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>{description}</p>
        {mediaLink && (
          <div>
            {mediaLink.startsWith("http") && mediaLink.endsWith(".mp3") && <audio controls src={mediaLink} />}
            {mediaLink.startsWith("http") && mediaLink.endsWith(".mp4") && <video controls src={mediaLink} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default FullDescriptionModal;
