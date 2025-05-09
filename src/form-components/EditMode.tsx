import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <div className="form-switch">
                <label htmlFor="edit-mode">Edit Mode</label>
                <input
                    type="checkbox"
                    id="edit-mode"
                    checked={isEditMode}
                    onChange={() => {
                        setIsEditMode(!isEditMode);
                    }}
                />
            </div>

            {!isEditMode ?
                <div>
                    {name} is {isStudent ? "" : "not "}a student
                </div>
            :   <div>
                    <div>
                        <label htmlFor="name-input">Name:</label>
                        <input
                            type="text"
                            id="name-input"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="student-checkbox">Student:</label>
                        <input
                            type="checkbox"
                            id="student-checkbox"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />
                    </div>
                </div>
            }
        </div>
    );
}
