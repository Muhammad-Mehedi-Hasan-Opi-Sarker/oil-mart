import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import './Home.css';
const Home = () => {
    const [reveiws,setReviews]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
          <div className="grid container">
          <div>
          <h1>You can get here the best healthy oil. </h1>
            <p>Our oil is healthy. It is completely free from adulteration. Anyone can take our oil without fear. 
                We have many buyers who regularly purchase our products. 
                Take a look at our products. We also save on oil prices</p>
          </div>
                <div className='picture'>
                <img src="https://hatureya.com/wp-content/uploads/2019/04/36-1000x1000.jpg" alt="" />
                </div>
          </div>
          <h1>Coustomer Reviews {reveiws.length}</h1>
          {
              reveiws.map(reveiw=><Reviews
              reveiw={reveiw}
              ></Reviews>)
          }
          <h4>name{reveiws.name}</h4>
        </div>
    );
};

export default Home;