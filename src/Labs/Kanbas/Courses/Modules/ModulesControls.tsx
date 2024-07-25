import React from 'react';
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

interface ModulesControlsProps {
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}

const ModulesControls: React.FC<ModulesControlsProps> = ({ moduleName, setModuleName, addModule }) => {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"
        onClick={addModule}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <input 
        className="form-control mb-3" 
        value={moduleName} 
        onChange={e => setModuleName(e.target.value)} 
        placeholder="Enter Module Name" 
      />
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModulesControls;
