// src/components/Modal.tsx
import React from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isVisible, onClose, children }: ModalProps) {
  return (
    <div
      id="modal-overlay"
      className={isVisible ? "visible" : "hidden"}
      onClick={onClose}
    >
      <div id="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          id="modal-close-btn"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div id="modal-body">{children}</div>
      </div>
    </div>
  );
}
