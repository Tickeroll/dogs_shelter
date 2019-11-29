import React from 'react';
import './button.css'

function Button({children, checked, onClick, large}) {
    return (
        <button onClick={onClick} className={large ? "my-button large" : checked ? "my-button checked" : "my-button"}><b
            className="my-button-text">{children}</b></button>
    );
}

export default Button;