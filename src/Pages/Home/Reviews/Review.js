import React from 'react';

const Review = () => {
    return (
        <div className="card w-96 bg-base-100">
            <div className="avatar mx-auto mt-5">
                <div className="w-24 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3174" alt=""/>
                </div>
            </div>

            <div className="card-body items-center text-center">
                <h2 className="card-title">Johny Dhep</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Review;