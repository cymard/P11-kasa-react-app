import React, { useEffect, useState } from 'react';
import './slideShow.scss';

function SlideShow ({ pictures }) {
    const [arrayIndex, setArrayIndex] = useState(0)
    const [index, setIndex] = useState(1)

    const nextSlide = () => {
        if (index === pictures.length) {
            setArrayIndex( 0);
            setIndex( 1)
        } else {
            setArrayIndex(arrayIndex => arrayIndex + 1)
            setIndex( index => index + 1)
        }
    }

    const previousSlide = () => {
        if (index === 1) {
            setArrayIndex(pictures.length-1);
            setIndex(pictures.length)
        } else {
            setArrayIndex(arrayIndex => arrayIndex - 1)
            setIndex( index => index - 1)
        }
    }

    return <div className='slideShow'>
        <img src={pictures[arrayIndex]} alt=""/>
        {pictures.length > 1 &&
            <>
                <span onClick={() => previousSlide()} className='leftArrow'>
                    <i className="fa-solid fa-chevron-left"></i>
                </span>
                <span onClick={() => nextSlide()} className='rightArrow'>
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
                <p className='numbering'>{index + '/' + pictures.length}</p>
            </>
        }
    </div>
}

export default SlideShow;
