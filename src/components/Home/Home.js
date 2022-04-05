import React from 'react';
import { Link } from 'react-router-dom';
import useReatings from '../../hooks/useReatings';
import headerImg from "../img/header.jpg"
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css'

const Home = () => {
    const [reatings] = useReatings();
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

            <div>
            <h1>Costomer Review({reatings.length})</h1>
            <div>
                <div className="review-container">
                {
                    reatings.slice(0, 3).map(reating => <ReviewCard
                    key={reating.id}
                    reating={reating}
                    >
                    </ReviewCard>)
                }
                </div>
            </div>
        </div>
            <Link to='/review'>
                <button className='review-btn'>See All Reviews</button>
            </Link>
        </div>
    );
};

export default Home;