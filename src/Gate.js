import React from 'react';

const Gate = ({ isOpen }) => {
    return (
        <div className="container">
            {isOpen === true ? "Open!" : "Closed!"}
        </div>
    )
}

export default Gate;