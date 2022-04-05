import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from "../img/header.jpg"
import Review from '../Reviews/Reviews';
import './Home.css'
// import '../img/header.jpg'

const Home = () => {
    return (
        <div>
            <div className='flexible-container'>
                <div className='half-width'>
                    <h1 className='title'>Welcome to Rainbow food shop</h1>
                    <p className='paragraph'>This is a online food store.You can order various type of food.There are thousand people like our servise. What are you waiting for let's checkout.</p>
                </div>
                <div className='half-width'>
                    <img src={headerImg} alt="" />
                </div>
            </div>
            <Review></Review>
            <Link to='/review'>
                <button className='review-btn'>See All Reviews</button>
            </Link>
        </div>
    );
};

export default Home;