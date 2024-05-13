import React from "react";
import '../buttons/styles/NotExternalLinkButton.css';

const NotExternalLinkButton = ({ url, buttonText }) => {
    const handleButtonClick = () => {
        window.location.href = url;
    }

    return (
        <button className="not-external-link-button" onClick={handleButtonClick}>
            {buttonText}
        </button>
    )
}

export default NotExternalLinkButton;