import React from 'react';
import useCustomers from '../../hooks/useCustomers';
import ShowReviews from '../ShowReviews/ShowReviews';

const Reviews = () => {
    const [customers, setCustomers] = useCustomers();
    return (
        <div>
            <h1>What our customers say!</h1>
            <div className='flex'>
            {
                customers.map(customer=><ShowReviews
                key={customer.id}
                customer={customer}
                ></ShowReviews>)
            }
            </div>
        </div>
    );
};

export default Reviews;