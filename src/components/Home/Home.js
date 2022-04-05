import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCustomers from '../../hooks/useCustomers';
import CustomersReviews from '../CustomersReviews/CustomersReviews';
import Reviews from '../Reviews/Reviews';
import './Home.css';
const Home = () => {
    // const [customers,setCustomers]=useCustomers();
    const [customers,setCustomers]=useState([]);
    useEffect(()=>{
        fetch('homedata.json')
        .then(res=>res.json())
        .then(data=>setCustomers(data))
    },[])
    return (
        <div>
          <div className="grid container">
          <div>
          <h1>You can get here the best healthy oil. </h1>
            <p>Our oil is healthy. It is completely free from adulteration. Anyone can take our oil without fear. 
                We have many buyers who regularly purchase our products. 
                Take a look at our products. We also save on oil prices.Our products are internationally recognized. We have been successfully conducting our business in different countries. Our brand has a lot of reputation in the country and abroad. Below you can see the comments of our customers.</p>
          </div>
                <div className='picture'>
                <img src="https://hatureya.com/wp-content/uploads/2019/04/36-1000x1000.jpg" alt="" />
                </div>
          </div>
          
          <div>
          <h1>Coustomer Reviews:</h1>
          {
              customers.map(customer=><CustomersReviews
              key={customer.id}
              customer={customer}
              ></CustomersReviews>)
          }
        <Link to="/reviews">
        <Button variant='primary'>See all reveiws</Button>
        </Link>
          </div>
          
        </div>
    );
};

export default Home;