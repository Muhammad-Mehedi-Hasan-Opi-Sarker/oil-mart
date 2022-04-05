import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons'
const ShowReviews = (props) => {
    const { name, review } = props.customer;
    return (
        <div>
            <Card className='mt-5'>
                    <h4>Name:{name}</h4>
                    <p>{review}</p>
                    <p>Rating: 
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 
                    
                    </p>
                
            </Card>
        </div>
    );
};

export default ShowReviews;