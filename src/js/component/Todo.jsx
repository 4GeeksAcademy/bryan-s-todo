import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Todo({ todo, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="todo-content">
        <p className="todo-text ms-4 my-2">{todo.label}</p>
      </div>
      {isHovered && (
        <div>
          <button className="delete-button" onClick={onDelete}>
            <FaTimes className="delete-icon" />
          </button>
        </div>
      )}
    </div>
  );
}
