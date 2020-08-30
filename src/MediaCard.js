import React from 'react';
import './MediaCard.css';

const MediaCard = ({ title, body, imageURL }) => {
    return (
        <div className="container">
            <h1>Assignment 02 from Dave Ceddia React Tutorial</h1>
            <h2 className="head2"> {title} </h2>
            <br />
            <p> {body} </p>
            <br />
            <img className="img" src={imageURL} alt="image" />
        </div>
    )
}

export default MediaCard;