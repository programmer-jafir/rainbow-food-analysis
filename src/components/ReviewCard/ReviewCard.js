import React from 'react';
import './ReviewCard.css'
const ReviewCard = (props) => {
    const {author, description, rating} = props.reating;
    return(
        <div className='review'>
            <h4>Name: {author}</h4>
            <p>Comment: {description}</p>
            <p><small>Rettings: {rating}</small></p>
        </div>
    );
};

export default ReviewCard;