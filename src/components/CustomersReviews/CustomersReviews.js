import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons'
const CustomersReviews = (props) => {
    const {name,review,rating}=props.review;
    return (
        <div>
            <Card className='mt-5'>
                <Card.Body>
                    <h5>Name:{name}</h5>
            <p>{review}</p>
            <p>Rating:
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </p>
            </Card.Body>
            </Card>
            
        </div>
    );
};

export default CustomersReviews;