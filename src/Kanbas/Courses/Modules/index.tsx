import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import db from "../../Database";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    const { cid } = useParams();
    const [modules, setModules] = useState<any[]>([]);
    const [moduleName, setModuleName] = useState("");

    const addModule = () => {
        if (moduleName) {
            const newModule = {
                _id: new Date().getTime().toString(),
                name: moduleName,
                course: cid, 
                lessons: []
            };
            setModules(prevModules => [...prevModules, newModule]);
            setModuleName("");
        }
    };

    const deleteModule = (moduleId: string) => {
        setModules(prevModules => prevModules.filter(module => module._id !== moduleId));
    };

    return (
        <div className="wd-modules">
            <ModulesControls 
                moduleName={moduleName} 
                setModuleName={setModuleName} 
                addModule={addModule}
            />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules.map((module) => (
                    <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            {module.name}
                            <ModuleControlButtons
                                moduleId={module._id}
                                deleteModule={deleteModule}
                                editModule={() => console.log('Edit module')}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
