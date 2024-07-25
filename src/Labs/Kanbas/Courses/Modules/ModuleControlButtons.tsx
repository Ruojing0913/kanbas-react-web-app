import React from 'react';
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

interface ModuleControlButtonsProps {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}

const ModuleControlButtons: React.FC<ModuleControlButtonsProps> = ({ moduleId, deleteModule, editModule }) => {
  return (
    <div className="float-end">
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />
    </div>
  );
};

export default ModuleControlButtons;
