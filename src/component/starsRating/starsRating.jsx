import React from 'react';
import './starsRating.scss'

function StarsRating ({rating}) {

    return <div className='containerRating'>
        {[...Array(5)].map((star, index) => {
            index += 1;
            return <button
                    type="button"
                    key={index}
                    className={index <= rating ? 'on' : 'off'}
                >
                    <span className='star'>&#9733;</span>
                </button>
        })}
    </div>
}

export default StarsRating;
