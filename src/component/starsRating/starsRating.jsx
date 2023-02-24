import React from 'react';
import './starsRating.scss'

function StarsRating ({rating}) {

    return <div className='containerRating'>
        {[...Array(5)].map((star, index) => {
            index += 1;
            return <span
                    key={index}
                    className={index <= rating ? 'on' : 'off'}
                >
                    <span className='star'>&#9733;</span>
                </span>
        })}
    </div>
}

export default StarsRating;
