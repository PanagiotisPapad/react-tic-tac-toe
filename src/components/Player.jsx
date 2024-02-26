import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((value) => !value);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(e) {
        setPlayerName(e.target.value)
    }    

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {!isEditing ? (
                    <span className="player-name">{playerName}</span> 
                    ) : ( 
                    <input
                        value={playerName}
                        type="text"
                        onChange={handleChange}
                    />
                    )
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
