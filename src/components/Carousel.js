import React from 'react'
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import pachira from './images/pachira.jpg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Carousel() {

    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ];

    return (
        <div>
            <br></br>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
                {/* children here */}
                <img className="w-75 rounded" src={pachira}></img>
                <img className="w-75 rounded" src={pachira}></img>
                <img className="w-75 rounded" src={pachira}></img>
                <img className="w-75 rounded" src={pachira}></img>
                <img className="w-75 rounded" src={pachira}></img>
                <img className="w-75 rounded" src={pachira}></img>


            </Slide>


        </div>
    )
}

export default Carousel