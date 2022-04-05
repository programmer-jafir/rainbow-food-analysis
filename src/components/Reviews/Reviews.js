import useReatings from '../../hooks/useReatings';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css'


const Reviews = () => {
    const [reatings] = useReatings();
    return (
            <div>
            <h1>Costomer Review({reatings.length})</h1>
            <div>
                <div className="review-container">
                {
                    reatings.map(reating => <ReviewCard
                    key={reating.id}
                    reating={reating}
                    >
                    </ReviewCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Reviews;