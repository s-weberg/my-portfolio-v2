import React from "react";

const PopupWindow = ({ title, info, onClick }) => {
    return (
        <div className="popup-window">
            <h1 className="title">{title}</h1>
            <p className="info">{info}</p>
            <button onClick={onClick} className="close-button">
                Close window
            </button>
        </div>
    );
};

export default PopupWindow;