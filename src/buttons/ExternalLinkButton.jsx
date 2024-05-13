import React from "react";
import '../buttons/styles/ExternalLinkButton.css';

const ExternalLinkButton = ({ url, buttonText }) => {
    const handleButtonClick = () => {
        window.open(url, '_blank')
    }

    return (
        <button className="external-link-button" onClick={handleButtonClick}>
            {buttonText}
        </button>
    )
}

export default ExternalLinkButton;