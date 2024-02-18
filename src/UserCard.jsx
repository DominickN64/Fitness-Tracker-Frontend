import React, { useState } from "react";
import "./App.css";
import CaretDownIcon from "./caret-down-square.svg";


const UserCard = ({ user }) => {
    const [showNotes, setShowNotes] = useState(false);

    const handleEmailClick = () => {
        setShowNotes(!showNotes);
    };

    return (
        <div className="user">
            <div className="userEmails">
                <span >{user.email}</span>
                <img src={CaretDownIcon} alt="dropdown" onClick={handleEmailClick} />

            </div>

            {showNotes && user.notes.length > 0 ? (
                <div>
                    {user.notes.map((note) => (
                        <div>{note.note} | {note.date}</div>

                    ))}
                </div>
            ) : showNotes ? (
                <div>No logs recorded under this account</div>
            ) : null}
        </div>
    );





};

export default UserCard;

