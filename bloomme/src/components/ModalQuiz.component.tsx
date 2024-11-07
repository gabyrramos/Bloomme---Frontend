import { useNavigate } from "react-router-dom";
import React from 'react';
import '../styles/ModalQuiz.style.css';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const ModalQuiz: React.FC<ModalProps> = ({ isOpen, children }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/quiz', { replace: true }); // Reemplaza la ruta actual en el historial
  };
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" data-backdrop="static">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={handleClose} className="modalQuiz-button">Send results</button>
      </div>
    </div>
  );
};