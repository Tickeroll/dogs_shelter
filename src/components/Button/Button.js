import React from 'react';
import './button.css'
import classnames from 'classnames';

function Button({className, children, checked, onClick, large}) {
    return (
        <button onClick={onClick} className={classnames(className, large ? "my-button large" : checked ? "my-button checked" : "my-button")}><b
            className="my-button-text">{children}</b></button>
    );
}

export default Button;